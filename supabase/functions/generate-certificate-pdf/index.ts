// import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
// import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
// import { PDFDocument, rgb, StandardFonts } from "https://esm.sh/pdf-lib@1.17.1";

// const corsHeaders = {
//   "Access-Control-Allow-Origin": "*",
//   "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
// };

// // Certificate layout configuration - adjust these values based on your template
// const CERTIFICATE_LAYOUT = {
//   // Student name - centered, large, bold
//   studentName: {
//     size: 36,
//     yPercent: 0.48, // Position from bottom as percentage
//     color: { r: 0.1, g: 0.15, b: 0.35 }, // Dark navy blue
//   },
//   // Course title - centered below student name
//   courseTitle: {
//     size: 18,
//     yPercent: 0.38,
//     color: { r: 0.1, g: 0.1, b: 0.1 },
//   },
//   // Duration/dates - centered
//   duration: {
//     size: 14,
//     yPercent: 0.33,
//     color: { r: 0.2, g: 0.2, b: 0.2 },
//   },
//   // Certificate number - bottom left
//   certNumber: {
//     size: 10,
//     x: 60,
//     y: 45,
//     color: { r: 0.3, g: 0.3, b: 0.3 },
//   },
//   // Issue date - bottom right area
//   issueDate: {
//     size: 12,
//     xFromRight: 120,
//     y: 85,
//     color: { r: 0.1, g: 0.1, b: 0.1 },
//   },
// };

// serve(async (req) => {
//   // Handle CORS preflight
//   if (req.method === "OPTIONS") {
//     return new Response(null, { headers: corsHeaders });
//   }

//   try {
//     const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
//     const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    
//     // Create Supabase client with service role for admin operations
//     const supabase = createClient(supabaseUrl, supabaseServiceKey);

//     const { studentId, courseName, issueDate, grade, centerName } = await req.json();
//     console.log("[generate-certificate-pdf] Request:", { studentId, courseName, issueDate, grade, centerName });

//     // Validate required fields
//     if (!studentId) {
//       return new Response(
//         JSON.stringify({ error: "Student ID is required" }),
//         { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
//       );
//     }

//     // Fetch student details
//     const { data: student, error: studentError } = await supabase
//       .from("students")
//       .select("*")
//       .eq("id", studentId)
//       .single();

//     if (studentError || !student) {
//       console.error("[generate-certificate-pdf] Student not found:", studentError);
//       return new Response(
//         JSON.stringify({ error: "Student not found" }),
//         { status: 404, headers: { ...corsHeaders, "Content-Type": "application/json" } }
//       );
//     }

//     console.log("[generate-certificate-pdf] Found student:", student.full_name);

//     // Generate certificate number using database function
//     const { data: certNumber, error: certNumError } = await supabase.rpc("generate_certificate_number");

//     if (certNumError) {
//       console.error("[generate-certificate-pdf] Failed to generate cert number:", certNumError);
//       return new Response(
//         JSON.stringify({ error: "Failed to generate certificate number" }),
//         { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
//       );
//     }

//     console.log("[generate-certificate-pdf] Generated certificate number:", certNumber);

//     // Fetch the PDF template
//     // First, try to load from public URL
//     const templateUrl = `${supabaseUrl.replace('.supabase.co', '.supabase.co')}/storage/v1/object/public/templates/certificate-template.pdf`;
    
//     let pdfDoc: PDFDocument;
    
//     try {
//       // Try loading from storage bucket
//       const templateResponse = await fetch(templateUrl);
//       if (templateResponse.ok) {
//         const templateBytes = await templateResponse.arrayBuffer();
//         pdfDoc = await PDFDocument.load(templateBytes);
//         console.log("[generate-certificate-pdf] Loaded template from storage");
//       } else {
//         throw new Error("Template not in storage");
//       }
//     } catch (e) {
//       // Create a blank A4 landscape PDF if template not available
//       console.log("[generate-certificate-pdf] Creating blank PDF (template not found in storage)");
//       pdfDoc = await PDFDocument.create();
//       const page = pdfDoc.addPage([842, 595]); // A4 landscape
      
//       // Add a simple border
//       const { width, height } = page.getSize();
//       page.drawRectangle({
//         x: 20,
//         y: 20,
//         width: width - 40,
//         height: height - 40,
//         borderColor: rgb(0.1, 0.15, 0.35),
//         borderWidth: 3,
//       });
      
//       // Add header text
//       const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
//       const headerText = "CERTIFICATE OF COMPLETION";
//       const headerSize = 32;
//       const headerWidth = boldFont.widthOfTextAtSize(headerText, headerSize);
//       page.drawText(headerText, {
//         x: (width - headerWidth) / 2,
//         y: height - 80,
//         size: headerSize,
//         font: boldFont,
//         color: rgb(0.1, 0.15, 0.35),
//       });
      
//       // Add "This is to certify that" text
//       const regularFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
//       const certifyText = "This is to certify that";
//       const certifyWidth = regularFont.widthOfTextAtSize(certifyText, 16);
//       page.drawText(certifyText, {
//         x: (width - certifyWidth) / 2,
//         y: height * 0.55,
//         size: 16,
//         font: regularFont,
//         color: rgb(0.3, 0.3, 0.3),
//       });
//     }

//     const pages = pdfDoc.getPages();
//     const firstPage = pages[0];
//     const { width, height } = firstPage.getSize();

//     // Embed fonts
//     const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
//     const regularFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
//     const italicFont = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

//     const layout = CERTIFICATE_LAYOUT;

//     // Add Student Name (centered, bold, large)
//     const studentName = student.full_name.toUpperCase();
//     const nameSize = layout.studentName.size;
//     const nameWidth = boldFont.widthOfTextAtSize(studentName, nameSize);
//     const nameX = (width - nameWidth) / 2;
//     const nameY = height * layout.studentName.yPercent;

//     firstPage.drawText(studentName, {
//       x: nameX,
//       y: nameY,
//       size: nameSize,
//       font: boldFont,
//       color: rgb(layout.studentName.color.r, layout.studentName.color.g, layout.studentName.color.b),
//     });

//     // Add Course Name (centered, regular)
//     const courseText = courseName || student.course_name;
//     const courseSize = layout.courseTitle.size;
//     const courseWidth = regularFont.widthOfTextAtSize(courseText, courseSize);
//     const courseX = (width - courseWidth) / 2;
//     const courseY = height * layout.courseTitle.yPercent;

//     firstPage.drawText(courseText, {
//       x: courseX,
//       y: courseY,
//       size: courseSize,
//       font: regularFont,
//       color: rgb(layout.courseTitle.color.r, layout.courseTitle.color.g, layout.courseTitle.color.b),
//     });

//     // Add Duration/Center info (centered, italic)
//     const durationText = `at ${centerName || student.center_name || "Noida"} Center`;
//     const durationSize = layout.duration.size;
//     const durationWidth = italicFont.widthOfTextAtSize(durationText, durationSize);
//     const durationX = (width - durationWidth) / 2;
//     const durationY = height * layout.duration.yPercent;

//     firstPage.drawText(durationText, {
//       x: durationX,
//       y: durationY,
//       size: durationSize,
//       font: italicFont,
//       color: rgb(layout.duration.color.r, layout.duration.color.g, layout.duration.color.b),
//     });

//     // Add Certificate Number (bottom left)
//     const certText = `Certificate No: ${certNumber}`;
//     firstPage.drawText(certText, {
//       x: layout.certNumber.x,
//       y: layout.certNumber.y,
//       size: layout.certNumber.size,
//       font: regularFont,
//       color: rgb(layout.certNumber.color.r, layout.certNumber.color.g, layout.certNumber.color.b),
//     });

//     // Add Issue Date (bottom right)
//     const issueDateObj = new Date(issueDate || new Date().toISOString().split("T")[0]);
//     const formattedDate = issueDateObj.toLocaleDateString("en-IN", {
//       day: "2-digit",
//       month: "long",
//       year: "numeric",
//     });
//     const dateText = `Date: ${formattedDate}`;
//     const dateWidth = regularFont.widthOfTextAtSize(dateText, layout.issueDate.size);
    
//     firstPage.drawText(dateText, {
//       x: width - layout.issueDate.xFromRight - dateWidth / 2,
//       y: layout.issueDate.y,
//       size: layout.issueDate.size,
//       font: regularFont,
//       color: rgb(layout.issueDate.color.r, layout.issueDate.color.g, layout.issueDate.color.b),
//     });

//     // Add Grade if provided (bottom right, above date)
//     if (grade) {
//       const gradeText = `Grade: ${grade}`;
//       const gradeWidth = boldFont.widthOfTextAtSize(gradeText, 14);
//       firstPage.drawText(gradeText, {
//         x: width - layout.issueDate.xFromRight - gradeWidth / 2,
//         y: layout.issueDate.y + 25,
//         size: 14,
//         font: boldFont,
//         color: rgb(0, 0.45, 0.2), // Green color for grade
//       });
//     }

//     // Save the PDF
//     const pdfBytes = await pdfDoc.save();
//     const base64Pdf = btoa(String.fromCharCode(...new Uint8Array(pdfBytes)));

//     console.log("[generate-certificate-pdf] PDF generated successfully");

//     // Save certificate record in database
//     const { data: certificate, error: certError } = await supabase
//       .from("certificates")
//       .insert({
//         certificate_number: certNumber,
//         student_id: studentId,
//         course_name: courseText,
//         issue_date: issueDate || new Date().toISOString().split("T")[0],
//         grade: grade || "A",
//         status: "ACTIVE",
//       })
//       .select()
//       .single();

//     if (certError) {
//       console.error("[generate-certificate-pdf] Failed to save certificate:", certError);
//       return new Response(
//         JSON.stringify({ error: "Failed to save certificate record" }),
//         { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
//       );
//     }

//     console.log("[generate-certificate-pdf] Certificate saved:", certificate.id);

//     // Return success with PDF data
//     return new Response(
//       JSON.stringify({
//         success: true,
//         certificateNumber: certNumber,
//         certificateId: certificate.id,
//         studentName: student.full_name,
//         courseName: courseText,
//         pdfBase64: base64Pdf,
//         viewUrl: `/certificate/${certNumber}`,
//       }),
//       {
//         status: 200,
//         headers: { ...corsHeaders, "Content-Type": "application/json" },
//       }
//     );

//   } catch (error) {
//     console.error("[generate-certificate-pdf] Error:", error);
//     const errorMessage = error instanceof Error ? error.message : "Internal server error";
//     return new Response(
//       JSON.stringify({ error: errorMessage }),
//       { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
//     );
//   }
// });
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { PDFDocument, rgb, StandardFonts } from "https://esm.sh/pdf-lib@1.17.1";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Certificate layout configuration - adjust these values based on your template
const CERTIFICATE_LAYOUT = {
  // Student name - centered, large, bold
  studentName: {
    size: 36,
    yPercent: 0.48, // Position from bottom as percentage
    color: { r: 0.1, g: 0.15, b: 0.35 }, // Dark navy blue
  },
  // Course title - centered below student name
  courseTitle: {
    size: 18,
    yPercent: 0.38,
    color: { r: 0.1, g: 0.1, b: 0.1 },
  },
  // Duration/dates - centered
  duration: {
    size: 14,
    yPercent: 0.33,
    color: { r: 0.2, g: 0.2, b: 0.2 },
  },
  // Certificate number - bottom left
  certNumber: {
    size: 10,
    x: 60,
    y: 45,
    color: { r: 0.3, g: 0.3, b: 0.3 },
  },
  // Issue date - bottom right area
  issueDate: {
    size: 12,
    xFromRight: 120,
    y: 85,
    color: { r: 0.1, g: 0.1, b: 0.1 },
  },
};

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    
    // Create Supabase client with service role for admin operations
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const { studentId, courseName, issueDate, grade, centerName } = await req.json();
    console.log("[generate-certificate-pdf] Request:", { studentId, courseName, issueDate, grade, centerName });

    // Validate required fields
    if (!studentId) {
      return new Response(
        JSON.stringify({ error: "Student ID is required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Fetch student details
    const { data: student, error: studentError } = await supabase
      .from("students")
      .select("*")
      .eq("id", studentId)
      .single();

    if (studentError || !student) {
      console.error("[generate-certificate-pdf] Student not found:", studentError);
      return new Response(
        JSON.stringify({ error: "Student not found" }),
        { status: 404, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log("[generate-certificate-pdf] Found student:", student.full_name);

    // Generate certificate number using database function
    const { data: certNumber, error: certNumError } = await supabase.rpc("generate_certificate_number");

    if (certNumError) {
      console.error("[generate-certificate-pdf] Failed to generate cert number:", certNumError);
      return new Response(
        JSON.stringify({ error: "Failed to generate certificate number" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log("[generate-certificate-pdf] Generated certificate number:", certNumber);

    // Fetch the PDF template
    // First, try to load from public URL
    const templateUrl = `${supabaseUrl.replace('.supabase.co', '.supabase.co')}/storage/v1/object/public/templates/certificate-template.pdf`;
    
    let pdfDoc: PDFDocument;
    
    try {
      // Try loading from storage bucket
      const templateResponse = await fetch(templateUrl);
      if (templateResponse.ok) {
        const templateBytes = await templateResponse.arrayBuffer();
        pdfDoc = await PDFDocument.load(templateBytes);
        console.log("[generate-certificate-pdf] Loaded template from storage");
      } else {
        throw new Error("Template not in storage");
      }
    } catch (e) {
      // Create a blank A4 landscape PDF if template not available
      console.log("[generate-certificate-pdf] Creating blank PDF (template not found in storage)");
      pdfDoc = await PDFDocument.create();
      const page = pdfDoc.addPage([842, 595]); // A4 landscape
      
      // Add a simple border
      const { width, height } = page.getSize();
      page.drawRectangle({
        x: 20,
        y: 20,
        width: width - 40,
        height: height - 40,
        borderColor: rgb(0.1, 0.15, 0.35),
        borderWidth: 3,
      });
      
      // Add header text
      const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
      const headerText = "CERTIFICATE OF COMPLETION";
      const headerSize = 32;
      const headerWidth = boldFont.widthOfTextAtSize(headerText, headerSize);
      page.drawText(headerText, {
        x: (width - headerWidth) / 2,
        y: height - 80,
        size: headerSize,
        font: boldFont,
        color: rgb(0.1, 0.15, 0.35),
      });
      
      // Add "This is to certify that" text
      const regularFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
      const certifyText = "This is to certify that";
      const certifyWidth = regularFont.widthOfTextAtSize(certifyText, 16);
      page.drawText(certifyText, {
        x: (width - certifyWidth) / 2,
        y: height * 0.55,
        size: 16,
        font: regularFont,
        color: rgb(0.3, 0.3, 0.3),
      });
    }

    const pages = pdfDoc.getPages();
    const firstPage = pages[0];
    const { width, height } = firstPage.getSize();

    // Embed fonts
    const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
    const regularFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const italicFont = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

    const layout = CERTIFICATE_LAYOUT;

    // Add Student Name (centered, bold, large)
    const studentName = student.full_name.toUpperCase();
    const nameSize = layout.studentName.size;
    const nameWidth = boldFont.widthOfTextAtSize(studentName, nameSize);
    const nameX = (width - nameWidth) / 2;
    const nameY = height * layout.studentName.yPercent;

    firstPage.drawText(studentName, {
      x: nameX,
      y: nameY,
      size: nameSize,
      font: boldFont,
      color: rgb(layout.studentName.color.r, layout.studentName.color.g, layout.studentName.color.b),
    });

    // Add Course Name (centered, regular)
    const courseText = courseName || student.course_name;
    const courseSize = layout.courseTitle.size;
    const courseWidth = regularFont.widthOfTextAtSize(courseText, courseSize);
    const courseX = (width - courseWidth) / 2;
    const courseY = height * layout.courseTitle.yPercent;

    firstPage.drawText(courseText, {
      x: courseX,
      y: courseY,
      size: courseSize,
      font: regularFont,
      color: rgb(layout.courseTitle.color.r, layout.courseTitle.color.g, layout.courseTitle.color.b),
    });

    // Add Duration/Center info (centered, italic)
    const durationText = `at ${centerName || student.center_name || "Noida"} Center`;
    const durationSize = layout.duration.size;
    const durationWidth = italicFont.widthOfTextAtSize(durationText, durationSize);
    const durationX = (width - durationWidth) / 2;
    const durationY = height * layout.duration.yPercent;

    firstPage.drawText(durationText, {
      x: durationX,
      y: durationY,
      size: durationSize,
      font: italicFont,
      color: rgb(layout.duration.color.r, layout.duration.color.g, layout.duration.color.b),
    });

    // Add Certificate Number (bottom left)
    const certText = `Certificate No: ${certNumber}`;
    firstPage.drawText(certText, {
      x: layout.certNumber.x,
      y: layout.certNumber.y,
      size: layout.certNumber.size,
      font: regularFont,
      color: rgb(layout.certNumber.color.r, layout.certNumber.color.g, layout.certNumber.color.b),
    });

    // Add Issue Date (bottom right)
    const issueDateObj = new Date(issueDate || new Date().toISOString().split("T")[0]);
    const formattedDate = issueDateObj.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
    const dateText = `Date: ${formattedDate}`;
    const dateWidth = regularFont.widthOfTextAtSize(dateText, layout.issueDate.size);
    
    firstPage.drawText(dateText, {
      x: width - layout.issueDate.xFromRight - dateWidth / 2,
      y: layout.issueDate.y,
      size: layout.issueDate.size,
      font: regularFont,
      color: rgb(layout.issueDate.color.r, layout.issueDate.color.g, layout.issueDate.color.b),
    });

    // Add Grade if provided (bottom right, above date)
    if (grade) {
      const gradeText = `Grade: ${grade}`;
      const gradeWidth = boldFont.widthOfTextAtSize(gradeText, 14);
      firstPage.drawText(gradeText, {
        x: width - layout.issueDate.xFromRight - gradeWidth / 2,
        y: layout.issueDate.y + 25,
        size: 14,
        font: boldFont,
        color: rgb(0, 0.45, 0.2), // Green color for grade
      });
    }

    // Save the PDF
    const pdfBytes = await pdfDoc.save();
    const base64Pdf = btoa(String.fromCharCode(...new Uint8Array(pdfBytes)));

    console.log("[generate-certificate-pdf] PDF generated successfully");

    // Save certificate record in database
    const { data: certificate, error: certError } = await supabase
      .from("certificates")
      .insert({
        certificate_number: certNumber,
        student_id: studentId,
        course_name: courseText,
        issue_date: issueDate || new Date().toISOString().split("T")[0],
        grade: grade || "A",
        status: "ACTIVE",
      })
      .select()
      .single();

    if (certError) {
      console.error("[generate-certificate-pdf] Failed to save certificate:", certError);
      return new Response(
        JSON.stringify({ error: "Failed to save certificate record" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log("[generate-certificate-pdf] Certificate saved:", certificate.id);

    // Return success with PDF data
    return new Response(
      JSON.stringify({
        success: true,
        certificateNumber: certNumber,
        certificateId: certificate.id,
        studentName: student.full_name,
        courseName: courseText,
        pdfBase64: base64Pdf,
        viewUrl: `/certificate/${certNumber}`,
      }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );

  } catch (error) {
    console.error("[generate-certificate-pdf] Error:", error);
    const errorMessage = error instanceof Error ? error.message : "Internal server error";
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
