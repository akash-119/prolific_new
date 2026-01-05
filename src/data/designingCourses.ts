import { Course } from "./types";

export const designingCourses: Course[] = [
  {
    id: "solidworks",
    slug: "solidworks",
    title: "SolidWorks",
    category: "Designing",
    subCategory: "Mechanical",
    duration: "2-3 Months",
    mode: ["Classroom", "Hybrid"],
    fees: {
      original: 35000,
      discounted: 30000,
      currency: "INR"
    },
    thumbnail: "/images/courses/solidworks.jpg",
    shortDescription: "Professional 3D CAD modeling for mechanical design, assembly, and simulation.",
    
    overview: {
      description: `The SolidWorks training program teaches industry-standard 3D CAD software used extensively in mechanical design. Students learn part modeling, assembly design, drawings, and simulation.

SolidWorks is the leading CAD software for product design and engineering. This course prepares you for roles in automotive, aerospace, consumer products, and manufacturing industries.

With hands-on projects and certification preparation, graduates are well-equipped for design engineering positions.`,
      objectives: [
        "Create complex 3D part models",
        "Design assemblies with multiple components",
        "Generate manufacturing drawings",
        "Perform motion and stress analysis",
        "Use sheet metal and weldment tools",
        "Prepare for CSWA/CSWP certification"
      ],
      whoShouldAttend: [
        "Mechanical engineering students",
        "Product designers",
        "CAD operators",
        "Manufacturing engineers",
        "Entrepreneurs/inventors"
      ],
      prerequisites: "Basic mechanical drawing knowledge helpful",
      certifications: ["ISO 9001-2008 Certified", "SolidWorks Certification Prep"],
      tools: ["SolidWorks Premium", "SolidWorks Simulation", "PDM Basics"]
    },
    
    curriculum: {
      totalModules: 6,
      totalHours: 80,
      modules: [
        { moduleNumber: 1, title: "SolidWorks Basics", duration: "15 hours", topics: ["Interface", "Sketching", "Sketch constraints", "Basic features", "Modify features"] },
        { moduleNumber: 2, title: "Part Modeling", duration: "18 hours", topics: ["Extrude/Revolve", "Sweep/Loft", "Fillet/Chamfer", "Patterns", "Reference geometry"] },
        { moduleNumber: 3, title: "Assembly Design", duration: "15 hours", topics: ["Mates", "Sub-assemblies", "Configurations", "Exploded views", "Interference detection"] },
        { moduleNumber: 4, title: "Drawings", duration: "10 hours", topics: ["Drawing views", "Dimensions", "Annotations", "BOM", "Drawing standards"] },
        { moduleNumber: 5, title: "Advanced Topics", duration: "15 hours", topics: ["Sheet metal", "Weldments", "Mold design", "Surfacing basics", "Simulation intro"] },
        { moduleNumber: 6, title: "Projects & Certification", duration: "7 hours", topics: ["Industry projects", "CSWA prep", "Portfolio building", "Interview prep", "Certification exam"] }
      ]
    },
    
    instructor: {
      name: "Er. Manish Joshi",
      designation: "Design Engineer",
      experience: "14+ years",
      photo: "/images/instructors/manish.jpg",
      bio: "CSWP certified engineer with experience at Mahindra and Ashok Leyland. Expert in product design and development."
    },
    
    batchDetails: {
      upcomingBatches: [
        { date: "2026-01-22", timing: "10:00 AM - 1:00 PM", mode: "Classroom", seats: 15 },
        { date: "2026-02-10", timing: "6:00 PM - 9:00 PM", mode: "Hybrid", seats: 20 }
      ],
      batchSize: "Max 15 students per batch"
    },
    
    careerOpportunities: ["Design Engineer", "CAD Designer", "Product Designer", "Mechanical Designer", "Application Engineer"],
    
    placementStats: {
      averagePackage: "3.5 - 7 LPA",
      hiringCompanies: ["Mahindra", "TATA Motors", "L&T", "Ashok Leyland", "Godrej", "Bajaj Auto"]
    },
    
    relatedCourses: ["catia", "nx-cad", "creo", "autocad"],
    
    faqs: [
      { question: "Is SolidWorks certification included?", answer: "CSWA exam preparation is included. The actual certification exam can be arranged at additional cost." },
      { question: "What projects will I work on?", answer: "You'll design machine components, consumer products, and a complete assembly project." },
      { question: "Is SolidWorks better than AutoCAD?", answer: "They serve different purposes. SolidWorks is for 3D modeling, AutoCAD is for 2D drafting. Both are valuable skills." }
    ],
    
    syllabusFile: "/pdfs/solidworks-syllabus.pdf",
    brochureFile: "/pdfs/prolific-automation-brochure.pdf"
  },
  {
    id: "autocad",
    slug: "autocad",
    title: "AutoCAD",
    category: "Designing",
    subCategory: "Civil",
    duration: "2 Months",
    mode: ["Classroom", "Online"],
    fees: {
      original: 20000,
      discounted: 16000,
      currency: "INR"
    },
    thumbnail: "/images/courses/autocad.jpg",
    shortDescription: "Industry-standard CAD software for civil, mechanical, and architectural drafting.",
    
    overview: {
      description: `AutoCAD is the foundation of technical drawing and drafting. This course covers 2D drafting, 3D basics, and industry-specific tools for civil, mechanical, and architectural applications.

Learn to create precise technical drawings, floor plans, mechanical layouts, and more. AutoCAD skills are essential for anyone entering the design or engineering field.`,
      objectives: [
        "Master 2D drafting commands",
        "Create precise technical drawings",
        "Use layers, blocks, and templates",
        "Generate layouts and printing",
        "Learn 3D modeling basics",
        "Work with external references"
      ],
      whoShouldAttend: [
        "Engineering students",
        "Draftsmen",
        "Architects",
        "Interior designers",
        "Civil engineers"
      ],
      prerequisites: "Basic computer skills",
      certifications: ["ISO 9001-2008 Certified", "Autodesk Certified User Prep"],
      tools: ["AutoCAD 2024", "AutoCAD LT"]
    },
    
    curriculum: {
      totalModules: 5,
      totalHours: 60,
      modules: [
        { moduleNumber: 1, title: "AutoCAD Fundamentals", duration: "12 hours", topics: ["Interface", "Drawing setup", "Draw commands", "Modify commands", "Object snaps"] },
        { moduleNumber: 2, title: "Precision Drawing", duration: "12 hours", topics: ["Coordinate systems", "Construction techniques", "Ortho/Polar", "Object tracking", "Grips editing"] },
        { moduleNumber: 3, title: "Organization & Annotation", duration: "12 hours", topics: ["Layers", "Blocks", "Attributes", "Dimensions", "Text styles"] },
        { moduleNumber: 4, title: "Layouts & Output", duration: "12 hours", topics: ["Paper space", "Viewports", "Plotting", "PDFs", "Templates"] },
        { moduleNumber: 5, title: "3D Basics & Projects", duration: "12 hours", topics: ["3D modeling intro", "Solids", "Rendering basics", "Industry projects", "Certification prep"] }
      ]
    },
    
    instructor: {
      name: "Er. Deepak Singh",
      designation: "CAD Specialist",
      experience: "16+ years",
      photo: "/images/instructors/deepak.jpg",
      bio: "Autodesk certified instructor with experience in infrastructure and building design."
    },
    
    batchDetails: {
      upcomingBatches: [
        { date: "2026-01-18", timing: "10:00 AM - 12:00 PM", mode: "Classroom", seats: 20 },
        { date: "2026-01-25", timing: "6:00 PM - 8:00 PM", mode: "Online", seats: 30 }
      ],
      batchSize: "Max 20 students per batch"
    },
    
    careerOpportunities: ["CAD Draftsman", "Junior Designer", "Detailer", "Architectural Assistant", "Civil Draftsman"],
    
    placementStats: {
      averagePackage: "2.5 - 5 LPA",
      hiringCompanies: ["L&T Construction", "DLF", "Sobha", "Shapoorji Pallonji", "Design firms"]
    },
    
    relatedCourses: ["revit", "3ds-max", "solidworks"],
    
    faqs: [
      { question: "AutoCAD 2D or 3D?", answer: "We focus on 2D which is primary usage. 3D basics are covered as introduction." },
      { question: "Civil or Mechanical AutoCAD?", answer: "Core AutoCAD is the same. We cover examples from both domains." }
    ],
    
    syllabusFile: "/pdfs/autocad-syllabus.pdf",
    brochureFile: "/pdfs/prolific-automation-brochure.pdf"
  },
  {
    id: "revit",
    slug: "revit",
    title: "Revit Architecture",
    category: "Designing",
    subCategory: "Civil",
    duration: "3 Months",
    mode: ["Classroom", "Hybrid"],
    fees: {
      original: 35000,
      discounted: 30000,
      currency: "INR"
    },
    thumbnail: "/images/courses/revit.jpg",
    shortDescription: "Building Information Modeling (BIM) for architecture, structure, and MEP.",
    
    overview: {
      description: `Revit is the leading BIM software for architecture and construction. Learn to create intelligent 3D building models that contain complete design and construction information.

BIM is becoming mandatory for large projects. This course prepares you for the growing demand for Revit professionals in architecture and construction industries.`,
      objectives: [
        "Create architectural building models",
        "Design with BIM methodology",
        "Generate construction documents",
        "Work with families and components",
        "Collaborate on multi-discipline projects",
        "Perform quantity takeoffs"
      ],
      whoShouldAttend: [
        "Architecture students",
        "Civil engineers",
        "Interior designers",
        "Construction professionals",
        "AutoCAD users upgrading to BIM"
      ],
      prerequisites: "Basic CAD knowledge recommended",
      certifications: ["ISO 9001-2008 Certified", "Autodesk Revit Certified Prep"],
      tools: ["Revit 2024", "Navisworks (basics)", "BIM 360"]
    },
    
    curriculum: {
      totalModules: 6,
      totalHours: 90,
      modules: [
        { moduleNumber: 1, title: "Revit Fundamentals", duration: "15 hours", topics: ["BIM concepts", "Revit interface", "Levels and grids", "Walls", "Doors and windows"] },
        { moduleNumber: 2, title: "Building Elements", duration: "18 hours", topics: ["Floors", "Roofs", "Stairs and railings", "Ceilings", "Curtain walls"] },
        { moduleNumber: 3, title: "Modeling & Design", duration: "18 hours", topics: ["Components", "Model groups", "Design options", "Massing", "Site design"] },
        { moduleNumber: 4, title: "Documentation", duration: "15 hours", topics: ["Views", "Sheets", "Schedules", "Annotations", "Detail drawings"] },
        { moduleNumber: 5, title: "Families & Templates", duration: "15 hours", topics: ["Family creation", "Parametric families", "Project templates", "Content libraries", "Best practices"] },
        { moduleNumber: 6, title: "Collaboration & Projects", duration: "9 hours", topics: ["Worksharing", "Clash detection", "Industry project", "Portfolio", "Certification prep"] }
      ]
    },
    
    instructor: {
      name: "Ar. Nisha Kapoor",
      designation: "BIM Manager",
      experience: "12+ years",
      photo: "/images/instructors/nisha.jpg",
      bio: "Registered architect and BIM specialist with experience at leading architecture firms."
    },
    
    batchDetails: {
      upcomingBatches: [
        { date: "2026-01-25", timing: "10:00 AM - 1:00 PM", mode: "Classroom", seats: 15 },
        { date: "2026-02-15", timing: "6:00 PM - 9:00 PM", mode: "Hybrid", seats: 20 }
      ],
      batchSize: "Max 15 students per batch"
    },
    
    careerOpportunities: ["BIM Modeler", "Revit Technician", "BIM Coordinator", "Architectural Designer", "BIM Manager"],
    
    placementStats: {
      averagePackage: "3.5 - 8 LPA",
      hiringCompanies: ["Jacobs", "AECOM", "Stantec", "HKS", "Architecture firms", "Construction companies"]
    },
    
    relatedCourses: ["autocad", "3ds-max", "sketchup"],
    
    faqs: [
      { question: "What's the difference from AutoCAD?", answer: "Revit is 3D BIM software with intelligent building data. AutoCAD is primarily 2D drafting. Revit is the future of AEC." },
      { question: "Which version of Revit?", answer: "We use the latest Revit 2024 version." }
    ],
    
    syllabusFile: "/pdfs/revit-syllabus.pdf",
    brochureFile: "/pdfs/prolific-automation-brochure.pdf"
  },
  {
    id: "catia",
    slug: "catia",
    title: "CATIA",
    category: "Designing",
    subCategory: "Mechanical",
    duration: "3 Months",
    mode: ["Classroom"],
    fees: {
      original: 45000,
      discounted: 40000,
      currency: "INR"
    },
    thumbnail: "/images/courses/catia.jpg",
    shortDescription: "Advanced CAD/CAM/CAE for automotive, aerospace, and industrial design.",
    
    overview: {
      description: `CATIA is the premium CAD software used by leading automotive and aerospace companies. This course covers product design, surface modeling, and assembly design in CATIA V5.

Learn the software used by companies like Maruti Suzuki, TATA, Airbus, and Boeing. CATIA expertise opens doors to the most prestigious design positions in the industry.`,
      objectives: [
        "Master CATIA V5 interface and workflows",
        "Create complex 3D part models",
        "Design automotive and aerospace components",
        "Work with surface modeling",
        "Build and analyze assemblies",
        "Generate manufacturing drawings"
      ],
      whoShouldAttend: [
        "Mechanical engineers",
        "Automotive designers",
        "Aerospace engineers",
        "Product designers",
        "SolidWorks users upgrading"
      ],
      prerequisites: "Basic CAD knowledge recommended",
      certifications: ["ISO 9001-2008 Certified", "Dassault Certification Prep"],
      tools: ["CATIA V5", "CATIA V6 (basics)", "DELMIA (intro)"]
    },
    
    curriculum: {
      totalModules: 6,
      totalHours: 100,
      modules: [
        { moduleNumber: 1, title: "CATIA Fundamentals", duration: "15 hours", topics: ["Interface", "Sketcher workbench", "Constraints", "Profiles", "Sketch analysis"] },
        { moduleNumber: 2, title: "Part Design", duration: "22 hours", topics: ["Solid features", "Dress-up features", "Transformation", "Boolean ops", "Multi-body"] },
        { moduleNumber: 3, title: "Surface Modeling", duration: "20 hours", topics: ["Wireframe", "Surfaces", "Surface operations", "Freeform", "Styling"] },
        { moduleNumber: 4, title: "Assembly Design", duration: "18 hours", topics: ["Product structure", "Constraints", "Mechanisms", "Analysis", "Clash detection"] },
        { moduleNumber: 5, title: "Drafting", duration: "12 hours", topics: ["Views", "Dimensions", "Annotations", "BOM", "Standards compliance"] },
        { moduleNumber: 6, title: "Projects & Advanced", duration: "13 hours", topics: ["Automotive projects", "Aerospace components", "Sheet metal", "Portfolio", "Interview prep"] }
      ]
    },
    
    instructor: {
      name: "Er. Rajat Verma",
      designation: "CAD/CAM Specialist",
      experience: "15+ years",
      photo: "/images/instructors/rajat.jpg",
      bio: "Former Maruti Suzuki design engineer with expertise in automotive body design using CATIA."
    },
    
    batchDetails: {
      upcomingBatches: [
        { date: "2026-02-01", timing: "9:00 AM - 1:00 PM", mode: "Classroom", seats: 12 },
        { date: "2026-03-01", timing: "2:00 PM - 6:00 PM", mode: "Classroom", seats: 12 }
      ],
      batchSize: "Max 12 students per batch"
    },
    
    careerOpportunities: ["CATIA Designer", "Automotive Designer", "Surface Modeler", "Design Engineer", "CAD Specialist"],
    
    placementStats: {
      averagePackage: "4 - 9 LPA",
      hiringCompanies: ["Maruti Suzuki", "TATA Motors", "Mahindra", "Hero MotoCorp", "HAL", "Boeing India"]
    },
    
    relatedCourses: ["solidworks", "nx-cad", "creo"],
    
    faqs: [
      { question: "CATIA or SolidWorks?", answer: "Both are excellent. CATIA is preferred in automotive/aerospace, SolidWorks in general manufacturing. We recommend based on career goals." },
      { question: "Is CATIA V5 or V6?", answer: "We primarily teach V5 which is widely used. V6 basics are covered." }
    ],
    
    syllabusFile: "/pdfs/catia-syllabus.pdf",
    brochureFile: "/pdfs/prolific-automation-brochure.pdf"
  },
  {
    id: "nx-cad",
    slug: "nx-cad",
    title: "NX CAD",
    category: "Designing",
    subCategory: "Mechanical",
    duration: "3 Months",
    mode: ["Classroom", "Hybrid"],
    fees: {
      original: 40000,
      discounted: 35000,
      currency: "INR"
    },
    thumbnail: "/images/courses/nx-cad.jpg",
    shortDescription: "Siemens NX CAD for advanced 3D product design and manufacturing.",
    
    overview: {
      description: `Siemens NX is a powerful CAD/CAM/CAE solution used by leading manufacturers worldwide. This course covers part modeling, assembly design, drafting, and CAM basics.

NX integrates design, simulation, and manufacturing in one platform. Learn the complete product development workflow used in automotive, aerospace, and industrial machinery.`,
      objectives: [
        "Master NX modeling tools",
        "Create complex part designs",
        "Design assemblies and mechanisms",
        "Generate production drawings",
        "Learn NX CAM basics",
        "Work on industry projects"
      ],
      whoShouldAttend: [
        "Mechanical engineers",
        "Manufacturing engineers",
        "Tool designers",
        "Product designers",
        "CNC programmers"
      ],
      prerequisites: "Basic CAD knowledge helpful",
      certifications: ["ISO 9001-2008 Certified", "Siemens NX Certification Prep"],
      tools: ["Siemens NX", "Teamcenter (intro)"]
    },
    
    curriculum: {
      totalModules: 6,
      totalHours: 90,
      modules: [
        { moduleNumber: 1, title: "NX Fundamentals", duration: "15 hours", topics: ["Interface", "Sketching", "Constraints", "Expressions", "Navigation"] },
        { moduleNumber: 2, title: "Part Modeling", duration: "20 hours", topics: ["Feature modeling", "Freeform", "Synchronous technology", "Direct modeling", "Part families"] },
        { moduleNumber: 3, title: "Surfacing", duration: "15 hours", topics: ["Surface creation", "Surface operations", "Hybrid modeling", "Quality analysis", "Reverse engineering"] },
        { moduleNumber: 4, title: "Assembly Design", duration: "15 hours", topics: ["Assembly structure", "Constraints", "Motion", "Arrangements", "Interference"] },
        { moduleNumber: 5, title: "Drafting & NX CAM Intro", duration: "15 hours", topics: ["Drawing views", "Annotations", "PMI", "CAM overview", "Toolpath basics"] },
        { moduleNumber: 6, title: "Projects", duration: "10 hours", topics: ["Industrial projects", "Portfolio", "Certification prep", "Interview preparation", "Placement support"] }
      ]
    },
    
    instructor: {
      name: "Er. Sunil Kumar",
      designation: "NX Specialist",
      experience: "13+ years",
      photo: "/images/instructors/sunil.jpg",
      bio: "Former Siemens PLM certified trainer with experience in tool design and manufacturing."
    },
    
    batchDetails: {
      upcomingBatches: [
        { date: "2026-01-28", timing: "10:00 AM - 1:00 PM", mode: "Classroom", seats: 12 },
        { date: "2026-02-20", timing: "6:00 PM - 9:00 PM", mode: "Hybrid", seats: 15 }
      ],
      batchSize: "Max 12 students per batch"
    },
    
    careerOpportunities: ["NX Designer", "CAD/CAM Engineer", "Tool Designer", "Manufacturing Engineer", "Product Engineer"],
    
    placementStats: {
      averagePackage: "4 - 8 LPA",
      hiringCompanies: ["Siemens", "GE", "L&T", "Godrej", "John Deere", "Cummins"]
    },
    
    relatedCourses: ["solidworks", "catia", "creo"],
    
    faqs: [
      { question: "Is NX CAM included?", answer: "NX CAM basics are covered. Full CAM training is available as a separate advanced course." }
    ],
    
    syllabusFile: "/pdfs/nx-cad-syllabus.pdf",
    brochureFile: "/pdfs/prolific-automation-brochure.pdf"
  },
  {
    id: "creo",
    slug: "creo",
    title: "Creo (Pro/ENGINEER)",
    category: "Designing",
    subCategory: "Mechanical",
    duration: "2-3 Months",
    mode: ["Classroom"],
    fees: {
      original: 35000,
      discounted: 30000,
      currency: "INR"
    },
    thumbnail: "/images/courses/creo.jpg",
    shortDescription: "PTC Creo parametric 3D CAD for product design and development.",
    
    overview: {
      description: `PTC Creo (formerly Pro/ENGINEER) is a powerful parametric CAD system used in consumer products, industrial machinery, and medical devices. Learn 3D modeling, assembly, and simulation.`,
      objectives: [
        "Master parametric modeling in Creo",
        "Create complex assemblies",
        "Generate detailed drawings",
        "Use sheet metal and weldments",
        "Perform basic simulations",
        "Work on industry projects"
      ],
      whoShouldAttend: [
        "Mechanical engineers",
        "Product designers",
        "Industrial designers",
        "Manufacturing engineers"
      ],
      prerequisites: "Basic engineering drawing knowledge",
      certifications: ["ISO 9001-2008 Certified"],
      tools: ["PTC Creo Parametric", "Creo Simulate (intro)"]
    },
    
    curriculum: {
      totalModules: 5,
      totalHours: 75,
      modules: [
        { moduleNumber: 1, title: "Creo Basics", duration: "15 hours", topics: ["Interface", "Sketching", "Datum features", "Basic features", "Modifying features"] },
        { moduleNumber: 2, title: "Advanced Modeling", duration: "20 hours", topics: ["Advanced features", "Patterns", "Surfaces", "Family tables", "Top-down design"] },
        { moduleNumber: 3, title: "Assemblies", duration: "15 hours", topics: ["Component assembly", "Constraints", "Mechanisms", "Exploded views", "BOM"] },
        { moduleNumber: 4, title: "Detailing", duration: "12 hours", topics: ["Drawing setup", "Views", "Dimensions", "Annotations", "Drawing standards"] },
        { moduleNumber: 5, title: "Advanced & Projects", duration: "13 hours", topics: ["Sheet metal", "Simulation intro", "Industry projects", "Portfolio", "Placement prep"] }
      ]
    },
    
    instructor: {
      name: "Er. Arun Patel",
      designation: "CAD Expert",
      experience: "11+ years",
      photo: "/images/instructors/arun.jpg",
      bio: "Creo certified professional with experience in industrial machinery design."
    },
    
    batchDetails: {
      upcomingBatches: [
        { date: "2026-02-05", timing: "10:00 AM - 1:00 PM", mode: "Classroom", seats: 12 },
        { date: "2026-03-01", timing: "10:00 AM - 1:00 PM", mode: "Classroom", seats: 12 }
      ],
      batchSize: "Max 12 students per batch"
    },
    
    careerOpportunities: ["Creo Designer", "Product Engineer", "Design Engineer", "CAD Developer"],
    
    placementStats: {
      averagePackage: "3.5 - 7 LPA",
      hiringCompanies: ["John Deere", "Thermax", "Kirloskar", "Cummins", "BHEL"]
    },
    
    relatedCourses: ["solidworks", "catia", "nx-cad"],
    
    faqs: [
      { question: "Is this Pro/E or Creo?", answer: "Creo is the new name for Pro/ENGINEER. We teach the latest Creo version." }
    ],
    
    syllabusFile: "/pdfs/creo-syllabus.pdf",
    brochureFile: "/pdfs/prolific-automation-brochure.pdf"
  },
  {
    id: "3ds-max",
    slug: "3ds-max",
    title: "3ds Max",
    category: "Designing",
    subCategory: "Civil",
    duration: "2-3 Months",
    mode: ["Classroom", "Online"],
    fees: {
      original: 30000,
      discounted: 25000,
      currency: "INR"
    },
    thumbnail: "/images/courses/3dsmax.jpg",
    shortDescription: "3D modeling, rendering, and animation for architecture and visualization.",
    
    overview: {
      description: `3ds Max is the industry standard for 3D modeling and visualization. Learn to create stunning architectural renders, product visualizations, and animations.

This course covers modeling, materials, lighting, and rendering with V-Ray. Perfect for architects, interior designers, and visualization artists.`,
      objectives: [
        "Create 3D models from scratch",
        "Apply materials and textures",
        "Set up professional lighting",
        "Render photorealistic images",
        "Create walkthrough animations",
        "Use V-Ray rendering"
      ],
      whoShouldAttend: [
        "Architects",
        "Interior designers",
        "Visualization artists",
        "Product designers",
        "Film/gaming aspirants"
      ],
      prerequisites: "Basic computer skills",
      certifications: ["ISO 9001-2008 Certified"],
      tools: ["3ds Max", "V-Ray", "Corona Renderer", "Photoshop"]
    },
    
    curriculum: {
      totalModules: 5,
      totalHours: 75,
      modules: [
        { moduleNumber: 1, title: "3ds Max Basics", duration: "15 hours", topics: ["Interface", "Object creation", "Modifiers", "Editable poly", "Splines"] },
        { moduleNumber: 2, title: "Modeling", duration: "18 hours", topics: ["Architectural modeling", "Furniture", "Interiors", "Exteriors", "Modeling techniques"] },
        { moduleNumber: 3, title: "Materials & Textures", duration: "15 hours", topics: ["Material editor", "V-Ray materials", "UV mapping", "Texture creation", "Realistic materials"] },
        { moduleNumber: 4, title: "Lighting & Rendering", duration: "15 hours", topics: ["Light types", "V-Ray lighting", "HDRI", "Render settings", "Post-processing"] },
        { moduleNumber: 5, title: "Animation & Projects", duration: "12 hours", topics: ["Camera animation", "Walkthroughs", "Project work", "Portfolio", "Placement support"] }
      ]
    },
    
    instructor: {
      name: "Mr. Vikash Gupta",
      designation: "Visualization Artist",
      experience: "10+ years",
      photo: "/images/instructors/vikash.jpg",
      bio: "Senior visualizer with experience in architectural visualization studios."
    },
    
    batchDetails: {
      upcomingBatches: [
        { date: "2026-01-25", timing: "10:00 AM - 1:00 PM", mode: "Classroom", seats: 15 },
        { date: "2026-02-10", timing: "6:00 PM - 9:00 PM", mode: "Online", seats: 20 }
      ],
      batchSize: "Max 15 students per batch"
    },
    
    careerOpportunities: ["3D Visualizer", "Architectural Renderer", "Interior Visualizer", "Product Visualizer", "3D Artist"],
    
    placementStats: {
      averagePackage: "3 - 7 LPA",
      hiringCompanies: ["Visualization studios", "Architecture firms", "Interior design companies", "Real estate developers"]
    },
    
    relatedCourses: ["revit", "sketchup", "autocad"],
    
    faqs: [
      { question: "V-Ray or Corona?", answer: "We primarily teach V-Ray which is industry standard. Corona basics are also covered." }
    ],
    
    syllabusFile: "/pdfs/3dsmax-syllabus.pdf",
    brochureFile: "/pdfs/prolific-automation-brochure.pdf"
  },
  {
    id: "sketchup",
    slug: "sketchup",
    title: "Google SketchUp",
    category: "Designing",
    subCategory: "Civil",
    duration: "1-2 Months",
    mode: ["Classroom", "Online"],
    fees: {
      original: 15000,
      discounted: 12000,
      currency: "INR"
    },
    thumbnail: "/images/courses/sketchup.jpg",
    shortDescription: "Easy-to-learn 3D modeling for architecture, interiors, and landscape design.",
    
    overview: {
      description: `SketchUp is an intuitive 3D modeling tool perfect for quick conceptual design. Learn to create architectural models, interior layouts, and landscape designs quickly.

Combined with V-Ray or Lumion, SketchUp produces stunning visualizations. This course is ideal for architects and designers who want fast 3D modeling capability.`,
      objectives: [
        "Create 3D models quickly",
        "Use components and groups",
        "Apply materials and textures",
        "Generate layouts and scenes",
        "Render with V-Ray/Lumion",
        "Create presentations"
      ],
      whoShouldAttend: [
        "Architects",
        "Interior designers",
        "Landscape designers",
        "Students",
        "Hobbyists"
      ],
      prerequisites: "Basic computer skills",
      certifications: ["ISO 9001-2008 Certified"],
      tools: ["SketchUp Pro", "V-Ray for SketchUp", "Lumion (intro)"]
    },
    
    curriculum: {
      totalModules: 4,
      totalHours: 40,
      modules: [
        { moduleNumber: 1, title: "SketchUp Basics", duration: "10 hours", topics: ["Interface", "Drawing tools", "Push/Pull", "Groups/Components", "Navigation"] },
        { moduleNumber: 2, title: "Modeling Techniques", duration: "12 hours", topics: ["Building modeling", "Interior layouts", "Furniture", "Landscaping", "Follow Me tool"] },
        { moduleNumber: 3, title: "Materials & Scenes", duration: "10 hours", topics: ["Materials", "Textures", "Scenes", "Styles", "Sections"] },
        { moduleNumber: 4, title: "Rendering & Output", duration: "8 hours", topics: ["V-Ray basics", "Lumion intro", "Layout", "Presentations", "Portfolio"] }
      ]
    },
    
    instructor: {
      name: "Ar. Meera Shah",
      designation: "Interior Designer",
      experience: "8+ years",
      photo: "/images/instructors/meera.jpg",
      bio: "Practicing interior designer using SketchUp for all her projects."
    },
    
    batchDetails: {
      upcomingBatches: [
        { date: "2026-01-20", timing: "10:00 AM - 12:00 PM", mode: "Classroom", seats: 20 },
        { date: "2026-02-01", timing: "6:00 PM - 8:00 PM", mode: "Online", seats: 30 }
      ],
      batchSize: "Max 20 students per batch"
    },
    
    careerOpportunities: ["3D Modeler", "Interior Designer", "Landscape Designer", "Architectural Assistant"],
    
    placementStats: {
      averagePackage: "2.5 - 5 LPA",
      hiringCompanies: ["Interior design studios", "Architecture firms", "Real estate companies"]
    },
    
    relatedCourses: ["revit", "3ds-max", "autocad"],
    
    faqs: [
      { question: "Is SketchUp free?", answer: "SketchUp Free (web) is available, but we teach SketchUp Pro which has full features." }
    ],
    
    syllabusFile: "/pdfs/sketchup-syllabus.pdf",
    brochureFile: "/pdfs/prolific-automation-brochure.pdf"
  },
  {
    id: "electrical-design",
    slug: "electrical-design",
    title: "Electrical Design (EPLAN/AutoCAD)",
    category: "Designing",
    subCategory: "Electrical",
    duration: "2 Months",
    mode: ["Classroom"],
    fees: {
      original: 30000,
      discounted: 25000,
      currency: "INR"
    },
    thumbnail: "/images/courses/electrical-design.jpg",
    shortDescription: "Electrical panel design, schematics, and documentation using EPLAN and AutoCAD Electrical.",
    
    overview: {
      description: `Learn electrical design and documentation for industrial control panels. This course covers schematic design, panel layout, and bill of materials using EPLAN and AutoCAD Electrical.

Electrical designers are in high demand in the automation and panel building industry. This practical course prepares you for immediate job readiness.`,
      objectives: [
        "Create electrical schematics",
        "Design panel layouts",
        "Generate BOMs and wire lists",
        "Use EPLAN Electric P8",
        "Work with AutoCAD Electrical",
        "Follow IEC standards"
      ],
      whoShouldAttend: [
        "Electrical engineers",
        "Panel designers",
        "Automation engineers",
        "Electricians seeking design roles"
      ],
      prerequisites: "Basic electrical knowledge",
      certifications: ["ISO 9001-2008 Certified"],
      tools: ["EPLAN Electric P8", "AutoCAD Electrical", "SEE Electrical"]
    },
    
    curriculum: {
      totalModules: 5,
      totalHours: 60,
      modules: [
        { moduleNumber: 1, title: "Electrical Design Basics", duration: "10 hours", topics: ["Symbol standards", "IEC symbols", "Schematic conventions", "Drawing organization", "Project structure"] },
        { moduleNumber: 2, title: "AutoCAD Electrical", duration: "15 hours", topics: ["Interface", "Schematic drawing", "Panel layout", "Wire numbering", "Reports"] },
        { moduleNumber: 3, title: "EPLAN Electric P8", duration: "18 hours", topics: ["EPLAN interface", "Schematic design", "Macros", "Connections", "Documentation"] },
        { moduleNumber: 4, title: "Panel Design", duration: "10 hours", topics: ["Panel layout", "Component placement", "Wiring diagram", "Cable scheduling", "Terminal design"] },
        { moduleNumber: 5, title: "Projects", duration: "7 hours", topics: ["Control panel project", "MCC design", "Documentation", "Portfolio", "Interview prep"] }
      ]
    },
    
    instructor: {
      name: "Er. Vinod Sharma",
      designation: "Electrical Design Engineer",
      experience: "14+ years",
      photo: "/images/instructors/vinod.jpg",
      bio: "Electrical design specialist with experience at Siemens and L&T."
    },
    
    batchDetails: {
      upcomingBatches: [
        { date: "2026-02-01", timing: "10:00 AM - 1:00 PM", mode: "Classroom", seats: 12 },
        { date: "2026-03-01", timing: "10:00 AM - 1:00 PM", mode: "Classroom", seats: 12 }
      ],
      batchSize: "Max 12 students per batch"
    },
    
    careerOpportunities: ["Electrical Design Engineer", "Panel Designer", "Electrical Draftsman", "EPLAN Designer"],
    
    placementStats: {
      averagePackage: "3 - 6 LPA",
      hiringCompanies: ["Siemens", "ABB", "L&T Electrical", "Schneider", "Panel builders"]
    },
    
    relatedCourses: ["electrical-engineering", "plc-scada-training", "autocad"],
    
    faqs: [
      { question: "EPLAN or AutoCAD Electrical?", answer: "Both are covered. EPLAN is preferred in Europe, AutoCAD Electrical in India/US." }
    ],
    
    syllabusFile: "/pdfs/electrical-design-syllabus.pdf",
    brochureFile: "/pdfs/prolific-automation-brochure.pdf"
  }
];
