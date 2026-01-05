import { Course } from "./types";

export const automationCourses: Course[] = [
  {
    id: "plc-scada-training",
    slug: "plc-scada-training",
    title: "PLC SCADA Training",
    category: "Automation",
    subCategory: "PLC/SCADA/HMI",
    duration: "3-6 Months",
    mode: ["Classroom", "Online", "Hybrid"],
    fees: {
      original: 75000,
      discounted: 65000,
      currency: "INR"
    },
    thumbnail: "/images/courses/plc-scada.jpg",
    shortDescription: "Master industrial automation with hands-on PLC and SCADA programming. Learn Siemens, Allen Bradley, and other leading platforms.",
    
    overview: {
      description: `The PLC SCADA Training program at Prolific Automation is designed to provide comprehensive knowledge and practical skills in industrial automation. This course covers the fundamentals of Programmable Logic Controllers (PLCs) and Supervisory Control and Data Acquisition (SCADA) systems used across manufacturing, power, and process industries.

Students will gain hands-on experience with industry-leading platforms including Siemens S7-1200/1500, Allen Bradley ControlLogix, Schneider Electric Modicon, and WinCC SCADA systems. Our state-of-the-art labs feature real industrial equipment to ensure practical learning.

The curriculum is designed in consultation with industry experts and aligns with current industrial practices. Upon completion, students will be capable of designing, programming, and troubleshooting PLC-based automation systems and SCADA applications.`,
      objectives: [
        "Understand PLC architecture, hardware configuration, and I/O addressing",
        "Master ladder logic, function block diagram, and structured text programming",
        "Design and implement SCADA systems with real-time data visualization",
        "Configure industrial communication protocols (Profibus, Modbus, Ethernet/IP)",
        "Develop HMI applications for operator interfaces",
        "Troubleshoot and maintain industrial automation systems",
        "Work on live industrial projects and case studies"
      ],
      whoShouldAttend: [
        "Electrical/Electronics Engineering students and graduates",
        "Instrumentation & Control Engineers",
        "Working professionals seeking automation skills",
        "ITI/Diploma holders in relevant trades",
        "Career switchers looking to enter automation industry"
      ],
      prerequisites: "Basic knowledge of electrical systems and computer fundamentals recommended",
      certifications: ["ISO 9001-2008 Certified", "NSDC Approved", "IAO Certified"],
      tools: ["Siemens TIA Portal", "Allen Bradley RSLogix 5000", "Schneider Unity Pro", "WinCC SCADA", "FactoryTalk View", "Siemens S7-1200/1500 PLCs", "AB ControlLogix"]
    },
    
    curriculum: {
      totalModules: 12,
      totalHours: 180,
      modules: [
        {
          moduleNumber: 1,
          title: "Introduction to Industrial Automation",
          duration: "12 hours",
          topics: [
            "Industry 4.0 overview and automation trends",
            "Types of automation systems",
            "PLC basics and architecture",
            "Control system fundamentals",
            "Safety in industrial automation"
          ]
        },
        {
          moduleNumber: 2,
          title: "PLC Hardware & Configuration",
          duration: "15 hours",
          topics: [
            "PLC components and specifications",
            "CPU, memory, and I/O modules",
            "Power supply and grounding",
            "Hardware configuration in TIA Portal",
            "I/O addressing and mapping"
          ]
        },
        {
          moduleNumber: 3,
          title: "Ladder Logic Programming",
          duration: "20 hours",
          topics: [
            "Relay logic fundamentals",
            "Basic instructions (XIC, XIO, OTE, OTL, OTU)",
            "Timer and counter instructions",
            "Comparison and math instructions",
            "Program organization and documentation"
          ]
        },
        {
          moduleNumber: 4,
          title: "Advanced PLC Programming",
          duration: "18 hours",
          topics: [
            "Function Block Diagram (FBD)",
            "Structured Text (ST) programming",
            "Sequential Function Chart (SFC)",
            "Data handling and arrays",
            "PID control implementation"
          ]
        },
        {
          moduleNumber: 5,
          title: "Siemens S7-1500 Programming",
          duration: "20 hours",
          topics: [
            "TIA Portal environment setup",
            "S7-1500 hardware configuration",
            "Programming in LAD, FBD, and SCL",
            "Data blocks and function blocks",
            "Diagnostics and troubleshooting"
          ]
        },
        {
          moduleNumber: 6,
          title: "Allen Bradley ControlLogix",
          duration: "18 hours",
          topics: [
            "RSLogix 5000/Studio 5000 environment",
            "ControlLogix architecture",
            "Tags and data types",
            "Add-On Instructions (AOI)",
            "Motion control basics"
          ]
        },
        {
          moduleNumber: 7,
          title: "Industrial Communication Protocols",
          duration: "15 hours",
          topics: [
            "Profibus DP communication",
            "Modbus RTU and TCP/IP",
            "Ethernet/IP configuration",
            "OPC communication",
            "Network diagnostics"
          ]
        },
        {
          moduleNumber: 8,
          title: "SCADA System Fundamentals",
          duration: "15 hours",
          topics: [
            "SCADA architecture and components",
            "Data acquisition and logging",
            "Real-time monitoring",
            "Alarm management",
            "Historical data trending"
          ]
        },
        {
          moduleNumber: 9,
          title: "WinCC SCADA Development",
          duration: "18 hours",
          topics: [
            "WinCC project setup",
            "Tag management and communication",
            "Graphics development",
            "Script programming",
            "Reports and trends"
          ]
        },
        {
          moduleNumber: 10,
          title: "HMI Development",
          duration: "12 hours",
          topics: [
            "HMI design principles",
            "Screen navigation",
            "Animation and visualization",
            "User management and security",
            "Touch panel configuration"
          ]
        },
        {
          moduleNumber: 11,
          title: "Industrial Projects",
          duration: "20 hours",
          topics: [
            "Conveyor system automation",
            "Water treatment plant automation",
            "Building management system (BMS)",
            "Process tank level control",
            "Packaging line automation"
          ]
        },
        {
          moduleNumber: 12,
          title: "Interview Preparation & Placement",
          duration: "10 hours",
          topics: [
            "Resume building for automation jobs",
            "Technical interview preparation",
            "Mock interviews",
            "Industry case studies",
            "Placement assistance"
          ]
        }
      ]
    },
    
    instructor: {
      name: "Er. Rajesh Kumar",
      designation: "Senior Automation Engineer",
      experience: "15+ years",
      photo: "/images/instructors/rajesh.jpg",
      bio: "Expert in Siemens and Allen Bradley systems with extensive experience in process and manufacturing automation across automotive, pharma, and power sectors."
    },
    
    batchDetails: {
      upcomingBatches: [
        { date: "2026-01-15", timing: "9:00 AM - 12:00 PM", mode: "Classroom", seats: 12 },
        { date: "2026-01-20", timing: "6:00 PM - 9:00 PM", mode: "Online", seats: 25 },
        { date: "2026-02-01", timing: "9:00 AM - 1:00 PM", mode: "Classroom", seats: 15 },
        { date: "2026-02-10", timing: "2:00 PM - 6:00 PM", mode: "Hybrid", seats: 20 }
      ],
      batchSize: "Max 15 students per batch for classroom training"
    },
    
    careerOpportunities: [
      "Automation Engineer",
      "PLC Programmer",
      "SCADA Developer",
      "Control Systems Engineer",
      "Instrumentation Engineer",
      "Maintenance Engineer",
      "Project Engineer - Automation"
    ],
    
    placementStats: {
      averagePackage: "4.5 - 8 LPA",
      hiringCompanies: ["Siemens", "ABB", "Schneider Electric", "L&T", "Honeywell", "Rockwell Automation", "TATA Motors", "Mahindra"]
    },
    
    relatedCourses: ["industrial-automation-robotics", "dcs-training", "hmi-development", "industrial-networking"],
    
    faqs: [
      {
        question: "What is the duration of this course?",
        answer: "The complete course duration is 3-6 months depending on the batch timing you choose, with 180 hours of comprehensive training."
      },
      {
        question: "Do I need prior programming knowledge?",
        answer: "No prior programming experience is required. We start from basics and gradually progress to advanced topics. Basic electrical knowledge is helpful."
      },
      {
        question: "Will I get hands-on practice?",
        answer: "Yes, our training is 70% practical. You'll work on real Siemens and Allen Bradley PLCs in our fully-equipped labs."
      },
      {
        question: "Is placement assistance provided?",
        answer: "Yes, we provide 100% placement assistance with access to 600+ hiring partners. Our placement cell actively helps students secure jobs."
      },
      {
        question: "Can I attend weekend batches?",
        answer: "Yes, we offer flexible batch timings including weekends for working professionals."
      },
      {
        question: "What certification will I receive?",
        answer: "You'll receive an industry-recognized certificate that is ISO 9001-2008 certified and NSDC approved."
      }
    ],
    
    syllabusFile: "/pdfs/plc-scada-syllabus.pdf",
    brochureFile: "/pdfs/prolific-automation-brochure.pdf"
  },
  {
    id: "industrial-automation-robotics",
    slug: "industrial-automation-robotics",
    title: "Industrial Automation & Robotics",
    category: "Automation",
    subCategory: "Robotics",
    duration: "6 Months",
    mode: ["Classroom"],
    fees: {
      original: 95000,
      discounted: 85000,
      currency: "INR"
    },
    thumbnail: "/images/courses/robotics.jpg",
    shortDescription: "Comprehensive training in industrial robots and automation systems including ABB, KUKA, and Fanuc robots.",
    
    overview: {
      description: `The Industrial Automation & Robotics program combines PLC/SCADA training with hands-on robotic programming and integration. Students learn to program and integrate industrial robots from leading manufacturers including ABB, KUKA, and Fanuc.

This course is ideal for engineers looking to specialize in the rapidly growing field of industrial robotics and smart manufacturing. With Industry 4.0 driving demand for automation professionals, this program prepares you for high-paying careers in automotive, electronics, and manufacturing sectors.

Our robotics lab features actual industrial robots allowing students to gain real-world experience in robot programming, simulation, and integration with automated production lines.`,
      objectives: [
        "Understand industrial robot types, kinematics, and applications",
        "Program ABB, KUKA, and Fanuc robots using native languages",
        "Integrate robots with PLCs and vision systems",
        "Implement robot safety systems and risk assessment",
        "Design automated manufacturing cells",
        "Work with collaborative robots (cobots)",
        "Simulate robot programs using offline programming tools"
      ],
      whoShouldAttend: [
        "Mechanical/Electrical/Electronics Engineers",
        "Automation professionals seeking robotics skills",
        "Manufacturing engineers",
        "Maintenance technicians",
        "Fresh graduates in engineering"
      ],
      prerequisites: "Basic understanding of automation concepts recommended. PLC knowledge is helpful but not mandatory.",
      certifications: ["ISO 9001-2008 Certified", "NSDC Approved"],
      tools: ["ABB RobotStudio", "KUKA.Sim", "FANUC ROBOGUIDE", "Siemens TIA Portal", "Vision Systems", "Robot Teach Pendants"]
    },
    
    curriculum: {
      totalModules: 10,
      totalHours: 200,
      modules: [
        {
          moduleNumber: 1,
          title: "Introduction to Industrial Robotics",
          duration: "15 hours",
          topics: [
            "History and evolution of robotics",
            "Robot classifications and types",
            "Robot kinematics and dynamics",
            "Applications in manufacturing",
            "Safety standards (ISO 10218)"
          ]
        },
        {
          moduleNumber: 2,
          title: "Robot Programming Fundamentals",
          duration: "20 hours",
          topics: [
            "Coordinate systems and transformations",
            "Motion types (linear, joint, circular)",
            "Programming basics",
            "I/O configuration",
            "Error handling"
          ]
        },
        {
          moduleNumber: 3,
          title: "ABB Robot Programming",
          duration: "25 hours",
          topics: [
            "RAPID programming language",
            "ABB RobotStudio simulation",
            "Motion instructions",
            "I/O handling",
            "Error recovery"
          ]
        },
        {
          moduleNumber: 4,
          title: "KUKA Robot Programming",
          duration: "20 hours",
          topics: [
            "KRL programming language",
            "KUKA.Sim simulation",
            "WorkVisual configuration",
            "Motion programming",
            "Safety configuration"
          ]
        },
        {
          moduleNumber: 5,
          title: "FANUC Robot Programming",
          duration: "20 hours",
          topics: [
            "KAREL and TP programming",
            "ROBOGUIDE simulation",
            "Motion control",
            "Register programming",
            "Palletizing applications"
          ]
        },
        {
          moduleNumber: 6,
          title: "Robot-PLC Integration",
          duration: "20 hours",
          topics: [
            "Communication protocols",
            "Signal exchange",
            "Handshaking logic",
            "Cell control programming",
            "Troubleshooting"
          ]
        },
        {
          moduleNumber: 7,
          title: "Vision Systems Integration",
          duration: "18 hours",
          topics: [
            "Machine vision fundamentals",
            "Camera selection and setup",
            "Image processing",
            "Vision-guided robotics",
            "Quality inspection"
          ]
        },
        {
          moduleNumber: 8,
          title: "Collaborative Robots",
          duration: "15 hours",
          topics: [
            "Cobot safety standards",
            "Force limiting technology",
            "Human-robot collaboration",
            "Universal Robots programming",
            "Application examples"
          ]
        },
        {
          moduleNumber: 9,
          title: "Industrial Projects",
          duration: "30 hours",
          topics: [
            "Pick and place systems",
            "Welding automation",
            "Assembly line integration",
            "Palletizing systems",
            "Quality inspection cells"
          ]
        },
        {
          moduleNumber: 10,
          title: "Placement Preparation",
          duration: "12 hours",
          topics: [
            "Resume building",
            "Technical interviews",
            "Mock interviews",
            "Industry expectations",
            "Placement support"
          ]
        }
      ]
    },
    
    instructor: {
      name: "Er. Amit Sharma",
      designation: "Robotics Specialist",
      experience: "12+ years",
      photo: "/images/instructors/amit.jpg",
      bio: "Robotics expert with experience in automotive manufacturing at Maruti Suzuki and TATA Motors. Certified in ABB, KUKA, and Fanuc robot programming."
    },
    
    batchDetails: {
      upcomingBatches: [
        { date: "2026-01-20", timing: "9:00 AM - 1:00 PM", mode: "Classroom", seats: 10 },
        { date: "2026-02-15", timing: "2:00 PM - 6:00 PM", mode: "Classroom", seats: 12 }
      ],
      batchSize: "Max 12 students per batch"
    },
    
    careerOpportunities: [
      "Robot Programmer",
      "Automation Engineer",
      "Robotics Engineer",
      "Manufacturing Engineer",
      "Integration Engineer",
      "Application Engineer"
    ],
    
    placementStats: {
      averagePackage: "5 - 10 LPA",
      hiringCompanies: ["ABB", "KUKA", "Maruti Suzuki", "TATA Motors", "Mahindra", "Hero MotoCorp", "L&T"]
    },
    
    relatedCourses: ["plc-scada-training", "dcs-training", "embedded-systems"],
    
    faqs: [
      {
        question: "Do I need prior robotics experience?",
        answer: "No, we start from fundamentals. Basic engineering knowledge is sufficient."
      },
      {
        question: "Which robots will I learn?",
        answer: "You'll learn ABB, KUKA, and FANUC robots - the top 3 industrial robot manufacturers globally."
      },
      {
        question: "Is simulation software included?",
        answer: "Yes, you'll get hands-on experience with RobotStudio, KUKA.Sim, and ROBOGUIDE."
      }
    ],
    
    syllabusFile: "/pdfs/robotics-syllabus.pdf",
    brochureFile: "/pdfs/prolific-automation-brochure.pdf"
  },
  {
    id: "pgdia",
    slug: "pgdia",
    title: "Post Graduate Diploma in Industrial Automation",
    category: "Automation",
    subCategory: "Diploma Programs",
    duration: "12 Months",
    mode: ["Classroom"],
    fees: {
      original: 150000,
      discounted: 135000,
      currency: "INR"
    },
    thumbnail: "/images/courses/pgdia.jpg",
    shortDescription: "Comprehensive 1-year diploma covering PLC, SCADA, DCS, Robotics, and advanced automation technologies.",
    
    overview: {
      description: `The Post Graduate Diploma in Industrial Automation (PGDIA) is our flagship program designed to create industry-ready automation professionals. This comprehensive 12-month program covers all aspects of industrial automation from PLCs to robotics to Industry 4.0 technologies.

Students gain in-depth knowledge of multiple PLC platforms (Siemens, Allen Bradley, Schneider), SCADA systems, DCS, industrial networking, and robotics. The program includes extensive hands-on training, industrial visits, and a capstone project.

Graduates of this program are highly sought after by leading automation companies and have achieved 100% placement rate with competitive salary packages.`,
      objectives: [
        "Master multiple PLC platforms and programming languages",
        "Design and implement SCADA and DCS systems",
        "Program and integrate industrial robots",
        "Configure industrial networks and communication",
        "Implement Industry 4.0 concepts and IIoT",
        "Develop complete automation solutions",
        "Execute capstone projects with industry guidance"
      ],
      whoShouldAttend: [
        "B.E/B.Tech graduates in EEE, ECE, EI, Mechanical",
        "Diploma holders with work experience",
        "Working professionals seeking career advancement",
        "Engineers looking for specialization in automation"
      ],
      prerequisites: "Engineering degree or diploma with basic electrical knowledge",
      certifications: ["ISO 9001-2008 Certified", "NSDC Approved", "IAO Certified", "UGC Recognized"],
      tools: ["Siemens TIA Portal", "RSLogix 5000", "DeltaV DCS", "WinCC", "ABB Robots", "Industrial Networks"]
    },
    
    curriculum: {
      totalModules: 16,
      totalHours: 500,
      modules: [
        {
          moduleNumber: 1,
          title: "Fundamentals of Automation",
          duration: "30 hours",
          topics: [
            "Industrial automation overview",
            "Control system fundamentals",
            "Sensors and actuators",
            "Process instrumentation",
            "Electrical safety"
          ]
        },
        {
          moduleNumber: 2,
          title: "Siemens PLC Programming",
          duration: "40 hours",
          topics: [
            "S7-1200/1500 hardware",
            "TIA Portal programming",
            "Advanced data handling",
            "Function blocks",
            "Safety PLCs"
          ]
        },
        {
          moduleNumber: 3,
          title: "Allen Bradley PLC",
          duration: "35 hours",
          topics: [
            "ControlLogix/CompactLogix",
            "Studio 5000 programming",
            "Add-On Instructions",
            "Motion control",
            "Process control"
          ]
        },
        {
          moduleNumber: 4,
          title: "SCADA Systems",
          duration: "35 hours",
          topics: ["WinCC", "FactoryTalk", "Ignition SCADA", "Alarm management", "Historical trending"]
        },
        {
          moduleNumber: 5,
          title: "DCS Fundamentals",
          duration: "30 hours",
          topics: ["DCS architecture", "DeltaV/Honeywell", "Control strategies", "Batch processing", "Advanced process control"]
        },
        {
          moduleNumber: 6,
          title: "Industrial Robotics",
          duration: "40 hours",
          topics: ["Robot programming", "ABB/KUKA robots", "Vision integration", "Safety systems", "Cell design"]
        },
        {
          moduleNumber: 7,
          title: "Industrial Networking",
          duration: "25 hours",
          topics: ["Profibus/Profinet", "Ethernet/IP", "Modbus", "OPC UA", "Cybersecurity"]
        },
        {
          moduleNumber: 8,
          title: "Drives & Motors",
          duration: "30 hours",
          topics: ["VFD configuration", "Servo drives", "Motion control", "Parameter optimization", "Troubleshooting"]
        },
        {
          moduleNumber: 9,
          title: "HMI Development",
          duration: "25 hours",
          topics: ["HMI design", "Screen navigation", "Scripting", "User management", "Mobile HMI"]
        },
        {
          moduleNumber: 10,
          title: "Industry 4.0 & IIoT",
          duration: "30 hours",
          topics: ["Smart manufacturing", "Cloud connectivity", "Data analytics", "Predictive maintenance", "Digital twin"]
        },
        {
          moduleNumber: 11,
          title: "Electrical Systems",
          duration: "25 hours",
          topics: ["Power distribution", "Motor control centers", "Protection systems", "Panel design", "Switchgear"]
        },
        {
          moduleNumber: 12,
          title: "Process Control",
          duration: "25 hours",
          topics: ["PID tuning", "Advanced control", "Loop optimization", "Control valves", "Instrumentation"]
        },
        {
          moduleNumber: 13,
          title: "Project Management",
          duration: "20 hours",
          topics: ["Project planning", "Documentation", "Commissioning", "FAT/SAT", "Handover"]
        },
        {
          moduleNumber: 14,
          title: "Industrial Visits",
          duration: "40 hours",
          topics: ["Manufacturing plants", "Power plants", "Automotive industry", "Pharma industry", "Oil & gas"]
        },
        {
          moduleNumber: 15,
          title: "Capstone Project",
          duration: "50 hours",
          topics: ["Project selection", "Design", "Implementation", "Testing", "Documentation"]
        },
        {
          moduleNumber: 16,
          title: "Placement Training",
          duration: "20 hours",
          topics: ["Resume building", "Interview preparation", "Mock interviews", "Industry connect", "Job placement"]
        }
      ]
    },
    
    instructor: {
      name: "Er. Vikram Singh",
      designation: "Program Director",
      experience: "20+ years",
      photo: "/images/instructors/vikram.jpg",
      bio: "Former Siemens automation head with expertise in process and manufacturing automation. Led 100+ automation projects globally."
    },
    
    batchDetails: {
      upcomingBatches: [
        { date: "2026-02-01", timing: "9:00 AM - 5:00 PM", mode: "Classroom", seats: 20 },
        { date: "2026-04-01", timing: "9:00 AM - 5:00 PM", mode: "Classroom", seats: 20 }
      ],
      batchSize: "Max 20 students per batch"
    },
    
    careerOpportunities: [
      "Lead Automation Engineer",
      "Project Engineer",
      "Systems Integrator",
      "Control Systems Designer",
      "Automation Consultant",
      "Technical Manager"
    ],
    
    placementStats: {
      averagePackage: "6 - 12 LPA",
      hiringCompanies: ["Siemens", "ABB", "Honeywell", "Schneider Electric", "L&T", "Reliance", "TATA Group"]
    },
    
    relatedCourses: ["plc-scada-training", "industrial-automation-robotics", "dcs-training"],
    
    faqs: [
      {
        question: "What is the batch timing?",
        answer: "Full-time batches run Monday to Friday, 9 AM to 5 PM."
      },
      {
        question: "Is this diploma recognized?",
        answer: "Yes, the diploma is ISO certified, NSDC approved, and industry-recognized."
      },
      {
        question: "What is the placement record?",
        answer: "We have maintained 100% placement for PGDIA graduates with packages ranging from 6-12 LPA."
      }
    ],
    
    syllabusFile: "/pdfs/pgdia-syllabus.pdf",
    brochureFile: "/pdfs/prolific-automation-brochure.pdf"
  },
  {
    id: "dcs-training",
    slug: "dcs-training",
    title: "Certified DCS Application Developer",
    category: "Automation",
    subCategory: "DCS",
    duration: "4 Months",
    mode: ["Classroom", "Hybrid"],
    fees: {
      original: 65000,
      discounted: 55000,
      currency: "INR"
    },
    thumbnail: "/images/courses/dcs.jpg",
    shortDescription: "Learn Distributed Control Systems used in process industries including DeltaV, Honeywell, and Yokogawa platforms.",
    
    overview: {
      description: `The DCS training program focuses on Distributed Control Systems used extensively in process industries like oil & gas, petrochemicals, power generation, and pharmaceuticals. Students learn system architecture, configuration, programming, and maintenance of leading DCS platforms.

This course provides hands-on experience with industry-standard DCS systems and prepares students for roles in process automation and control.`,
      objectives: [
        "Understand DCS architecture and components",
        "Configure and program DeltaV DCS",
        "Implement advanced process control strategies",
        "Design control graphics and operator interfaces",
        "Configure alarms and historical data management",
        "Troubleshoot and maintain DCS systems"
      ],
      whoShouldAttend: [
        "Instrumentation Engineers",
        "Process Engineers",
        "Control System Engineers",
        "Plant operators seeking advancement",
        "Fresh engineering graduates"
      ],
      prerequisites: "Basic understanding of process control and instrumentation",
      certifications: ["ISO 9001-2008 Certified", "NSDC Approved"],
      tools: ["DeltaV DCS", "Honeywell Experion", "Yokogawa Centum VP", "Control Studio", "DeltaV Simulate"]
    },
    
    curriculum: {
      totalModules: 8,
      totalHours: 120,
      modules: [
        { moduleNumber: 1, title: "DCS Fundamentals", duration: "15 hours", topics: ["DCS vs PLC", "Architecture", "Controllers", "I/O systems", "Networks"] },
        { moduleNumber: 2, title: "DeltaV Configuration", duration: "20 hours", topics: ["System setup", "Controller configuration", "I/O assignment", "Module assignment", "Database management"] },
        { moduleNumber: 3, title: "Control Strategies", duration: "18 hours", topics: ["PID control", "Cascade control", "Ratio control", "Feedforward", "Advanced control"] },
        { moduleNumber: 4, title: "Graphics Development", duration: "15 hours", topics: ["Faceplate design", "Detail displays", "Overview displays", "Navigation", "Animation"] },
        { moduleNumber: 5, title: "Alarm Management", duration: "12 hours", topics: ["Alarm philosophy", "Alarm configuration", "Alarm rationalization", "State-based alarming", "Alarm analysis"] },
        { moduleNumber: 6, title: "Batch Processing", duration: "15 hours", topics: ["ISA-88 standards", "Recipe management", "Batch execution", "Batch reporting", "Phase logic"] },
        { moduleNumber: 7, title: "System Maintenance", duration: "12 hours", topics: ["Backup/restore", "System upgrades", "Troubleshooting", "Performance monitoring", "Cybersecurity"] },
        { moduleNumber: 8, title: "Project Work", duration: "13 hours", topics: ["Complete DCS project", "Documentation", "FAT procedures", "Commissioning", "Interview prep"] }
      ]
    },
    
    instructor: {
      name: "Er. Suresh Patil",
      designation: "DCS Specialist",
      experience: "18+ years",
      photo: "/images/instructors/suresh.jpg",
      bio: "DCS expert with experience at ONGC and Reliance. Specialized in DeltaV and Honeywell systems."
    },
    
    batchDetails: {
      upcomingBatches: [
        { date: "2026-01-25", timing: "9:00 AM - 1:00 PM", mode: "Classroom", seats: 12 },
        { date: "2026-02-20", timing: "6:00 PM - 9:00 PM", mode: "Hybrid", seats: 15 }
      ],
      batchSize: "Max 12 students per batch"
    },
    
    careerOpportunities: ["DCS Engineer", "Control Systems Engineer", "Process Control Engineer", "Instrumentation Engineer", "Plant Engineer"],
    
    placementStats: {
      averagePackage: "5 - 9 LPA",
      hiringCompanies: ["ONGC", "Reliance", "IOCL", "BPCL", "NTPC", "Tata Chemicals"]
    },
    
    relatedCourses: ["plc-scada-training", "industrial-networking", "process-instrumentation"],
    
    faqs: [
      { question: "What industries use DCS?", answer: "Oil & gas, petrochemicals, power generation, pharmaceuticals, and chemical processing industries primarily use DCS systems." },
      { question: "Is DCS different from PLC?", answer: "Yes, DCS is designed for large-scale continuous process control while PLCs are typically used for discrete manufacturing. We cover the differences in detail." }
    ],
    
    syllabusFile: "/pdfs/dcs-syllabus.pdf",
    brochureFile: "/pdfs/prolific-automation-brochure.pdf"
  },
  {
    id: "embedded-systems",
    slug: "embedded-systems",
    title: "Certified Embedded System Developer",
    category: "Automation",
    subCategory: "Embedded Technology",
    duration: "4-6 Months",
    mode: ["Classroom", "Hybrid"],
    fees: {
      original: 55000,
      discounted: 48000,
      currency: "INR"
    },
    thumbnail: "/images/courses/embedded.jpg",
    shortDescription: "Learn microcontroller programming, ARM processors, and embedded system design for IoT and automation applications.",
    
    overview: {
      description: `The Embedded Systems Development program teaches students to design and program embedded systems using microcontrollers and processors. Students learn C/C++ programming, hardware interfacing, and real-time operating systems.

This course covers popular platforms including Arduino, ARM Cortex, and ESP32 for IoT applications. Students work on hands-on projects including sensor interfacing, motor control, and wireless communication.`,
      objectives: [
        "Master embedded C programming",
        "Interface sensors and actuators",
        "Program ARM Cortex microcontrollers",
        "Implement RTOS concepts",
        "Design IoT-enabled embedded systems",
        "Develop firmware for real-world applications"
      ],
      whoShouldAttend: [
        "Electronics/ECE engineering students",
        "Hobbyists and makers",
        "Professionals seeking embedded skills",
        "IoT developers",
        "Product designers"
      ],
      prerequisites: "Basic electronics and C programming knowledge helpful",
      certifications: ["ISO 9001-2008 Certified"],
      tools: ["Keil uVision", "Arduino IDE", "STM32CubeIDE", "ESP-IDF", "FreeRTOS", "Logic Analyzers"]
    },
    
    curriculum: {
      totalModules: 8,
      totalHours: 150,
      modules: [
        { moduleNumber: 1, title: "Embedded C Programming", duration: "25 hours", topics: ["C fundamentals", "Pointers", "Structures", "Bit manipulation", "Memory management"] },
        { moduleNumber: 2, title: "Microcontroller Architecture", duration: "20 hours", topics: ["8051 basics", "AVR architecture", "ARM Cortex-M", "Memory organization", "Peripherals"] },
        { moduleNumber: 3, title: "GPIO & Interfacing", duration: "20 hours", topics: ["Digital I/O", "LED interfacing", "Switch interfacing", "7-segment displays", "LCD interfacing"] },
        { moduleNumber: 4, title: "Communication Protocols", duration: "20 hours", topics: ["UART", "SPI", "I2C", "CAN bus", "USB basics"] },
        { moduleNumber: 5, title: "Timers & Interrupts", duration: "15 hours", topics: ["Timer modes", "PWM generation", "Interrupt handling", "Real-time clock", "Watchdog timer"] },
        { moduleNumber: 6, title: "Sensor Interfacing", duration: "18 hours", topics: ["Temperature sensors", "ADC interfacing", "Ultrasonic sensors", "IMU sensors", "Signal conditioning"] },
        { moduleNumber: 7, title: "RTOS & Advanced Topics", duration: "18 hours", topics: ["FreeRTOS basics", "Tasks & scheduling", "Semaphores", "Low power modes", "OTA updates"] },
        { moduleNumber: 8, title: "IoT & Projects", duration: "14 hours", topics: ["WiFi/BLE interfacing", "Cloud connectivity", "MQTT protocol", "Mini projects", "Capstone project"] }
      ]
    },
    
    instructor: {
      name: "Er. Priya Verma",
      designation: "Embedded Systems Engineer",
      experience: "10+ years",
      photo: "/images/instructors/priya.jpg",
      bio: "Embedded systems expert with experience at Samsung and Intel. Specialized in ARM processors and IoT systems."
    },
    
    batchDetails: {
      upcomingBatches: [
        { date: "2026-01-18", timing: "10:00 AM - 1:00 PM", mode: "Classroom", seats: 15 },
        { date: "2026-02-10", timing: "6:00 PM - 9:00 PM", mode: "Hybrid", seats: 20 }
      ],
      batchSize: "Max 15 students per batch"
    },
    
    careerOpportunities: ["Embedded Software Engineer", "Firmware Developer", "IoT Developer", "Hardware Engineer", "Product Engineer"],
    
    placementStats: {
      averagePackage: "4 - 8 LPA",
      hiringCompanies: ["Samsung", "Intel", "Qualcomm", "Bosch", "Continental", "L&T Technology Services"]
    },
    
    relatedCourses: ["vlsi-design", "iot-development", "industrial-automation-robotics"],
    
    faqs: [
      { question: "Do I need electronics background?", answer: "Basic electronics knowledge is helpful but we cover fundamentals in the course." },
      { question: "Which microcontrollers will I learn?", answer: "You'll work with Arduino, STM32 (ARM Cortex-M), ESP32, and 8051 platforms." }
    ],
    
    syllabusFile: "/pdfs/embedded-syllabus.pdf",
    brochureFile: "/pdfs/prolific-automation-brochure.pdf"
  },
  {
    id: "electrical-engineering",
    slug: "electrical-engineering",
    title: "Electrical Engineering Programs",
    category: "Automation",
    subCategory: "Electrical",
    duration: "3-6 Months",
    mode: ["Classroom"],
    fees: {
      original: 45000,
      discounted: 38000,
      currency: "INR"
    },
    thumbnail: "/images/courses/electrical.jpg",
    shortDescription: "Comprehensive electrical engineering training covering power systems, switchgear, drives, and industrial electrical safety.",
    
    overview: {
      description: `The Electrical Engineering program covers essential electrical concepts for industrial applications. Students learn about power distribution, motor control, variable frequency drives, switchgear, and industrial electrical safety.

This program is ideal for electrical technicians and engineers seeking to enhance their skills in industrial electrical systems.`,
      objectives: [
        "Understand power distribution systems",
        "Configure and troubleshoot VFDs",
        "Design motor control circuits",
        "Learn switchgear selection and protection",
        "Implement industrial electrical safety",
        "Read and create electrical schematics"
      ],
      whoShouldAttend: [
        "ITI Electricians",
        "Diploma holders in Electrical",
        "B.E/B.Tech Electrical students",
        "Maintenance technicians",
        "Plant electricians"
      ],
      prerequisites: "Basic electrical knowledge",
      certifications: ["ISO 9001-2008 Certified", "NSDC Approved"],
      tools: ["Siemens VFDs", "Allen Bradley PowerFlex", "AutoCAD Electrical", "Multimeters", "Clamp meters"]
    },
    
    curriculum: {
      totalModules: 6,
      totalHours: 100,
      modules: [
        { moduleNumber: 1, title: "Electrical Fundamentals", duration: "15 hours", topics: ["AC/DC circuits", "Three-phase systems", "Power factor", "Transformers", "Electrical safety"] },
        { moduleNumber: 2, title: "Motors & Starters", duration: "18 hours", topics: ["Motor types", "DOL starters", "Star-delta starters", "Soft starters", "Motor protection"] },
        { moduleNumber: 3, title: "Variable Frequency Drives", duration: "22 hours", topics: ["VFD principles", "Parameter setting", "Troubleshooting", "Energy saving", "Applications"] },
        { moduleNumber: 4, title: "Power Distribution", duration: "15 hours", topics: ["LT panels", "Distribution boards", "Cable sizing", "Earthing systems", "Load balancing"] },
        { moduleNumber: 5, title: "Switchgear & Protection", duration: "18 hours", topics: ["MCB/MCCB", "Relays", "Protection coordination", "Arc flash safety", "Maintenance"] },
        { moduleNumber: 6, title: "Practical & Projects", duration: "12 hours", topics: ["Panel wiring", "VFD installation", "Troubleshooting exercises", "Project work", "Interview prep"] }
      ]
    },
    
    instructor: {
      name: "Er. Ramesh Gupta",
      designation: "Electrical Systems Expert",
      experience: "22+ years",
      photo: "/images/instructors/ramesh.jpg",
      bio: "Former BSES engineer with extensive experience in power distribution and industrial electrical systems."
    },
    
    batchDetails: {
      upcomingBatches: [
        { date: "2026-01-22", timing: "9:00 AM - 12:00 PM", mode: "Classroom", seats: 15 },
        { date: "2026-02-15", timing: "2:00 PM - 5:00 PM", mode: "Classroom", seats: 15 }
      ],
      batchSize: "Max 15 students per batch"
    },
    
    careerOpportunities: ["Electrical Engineer", "Maintenance Engineer", "Drives Engineer", "Panel Design Engineer", "Site Electrician"],
    
    placementStats: {
      averagePackage: "3 - 6 LPA",
      hiringCompanies: ["L&T Electrical", "Siemens", "Schneider Electric", "ABB", "Havells", "Crompton"]
    },
    
    relatedCourses: ["plc-scada-training", "industrial-automation-robotics", "vfd-training"],
    
    faqs: [
      { question: "Is this suitable for ITI pass students?", answer: "Yes, this program is designed for ITI electrical pass-outs and diploma holders." },
      { question: "Will I learn VFD programming?", answer: "Yes, you'll get hands-on experience with Siemens and Allen Bradley VFDs." }
    ],
    
    syllabusFile: "/pdfs/electrical-syllabus.pdf",
    brochureFile: "/pdfs/prolific-automation-brochure.pdf"
  },
  {
    id: "industrial-networking",
    slug: "industrial-networking",
    title: "Industrial Networking (Profibus/Modbus)",
    category: "Automation",
    subCategory: "Industrial Networks",
    duration: "2 Months",
    mode: ["Classroom", "Online"],
    fees: {
      original: 35000,
      discounted: 30000,
      currency: "INR"
    },
    thumbnail: "/images/courses/networking.jpg",
    shortDescription: "Master industrial communication protocols including Profibus, Profinet, Modbus, and Ethernet/IP for automation networks.",
    
    overview: {
      description: `This specialized course covers industrial communication networks essential for modern automation systems. Students learn to configure, troubleshoot, and maintain various industrial protocols connecting PLCs, drives, sensors, and other devices.`,
      objectives: [
        "Configure Profibus DP networks",
        "Implement Profinet communication",
        "Set up Modbus RTU/TCP networks",
        "Work with Ethernet/IP",
        "Troubleshoot network issues",
        "Design industrial network architectures"
      ],
      whoShouldAttend: [
        "Automation engineers",
        "Control system engineers",
        "Maintenance technicians",
        "System integrators",
        "PLC programmers"
      ],
      prerequisites: "Basic PLC knowledge recommended",
      certifications: ["ISO 9001-2008 Certified"],
      tools: ["Profibus tester", "Network analyzers", "Wireshark", "TIA Portal", "RSLinx"]
    },
    
    curriculum: {
      totalModules: 5,
      totalHours: 60,
      modules: [
        { moduleNumber: 1, title: "Industrial Network Fundamentals", duration: "10 hours", topics: ["OSI model", "Network topologies", "Industrial vs IT networks", "Cable types", "Network design"] },
        { moduleNumber: 2, title: "Profibus & Profinet", duration: "15 hours", topics: ["Profibus DP configuration", "GSD files", "Profinet setup", "GSDML files", "Diagnostics"] },
        { moduleNumber: 3, title: "Modbus Protocol", duration: "12 hours", topics: ["Modbus RTU", "Modbus TCP/IP", "Register mapping", "Function codes", "Troubleshooting"] },
        { moduleNumber: 4, title: "Ethernet/IP & OPC", duration: "13 hours", topics: ["Ethernet/IP setup", "CIP protocol", "OPC DA/UA", "Communication drivers", "Security"] },
        { moduleNumber: 5, title: "Practical Projects", duration: "10 hours", topics: ["Multi-protocol systems", "Network troubleshooting", "Performance optimization", "Documentation", "Interview prep"] }
      ]
    },
    
    instructor: {
      name: "Er. Anil Mehta",
      designation: "Network Specialist",
      experience: "14+ years",
      photo: "/images/instructors/anil.jpg",
      bio: "Industrial networking expert with certifications in Profibus and Profinet from PI International."
    },
    
    batchDetails: {
      upcomingBatches: [
        { date: "2026-02-01", timing: "10:00 AM - 1:00 PM", mode: "Classroom", seats: 12 },
        { date: "2026-02-15", timing: "7:00 PM - 9:00 PM", mode: "Online", seats: 20 }
      ],
      batchSize: "Max 12 students per batch"
    },
    
    careerOpportunities: ["Network Engineer", "Control Systems Engineer", "Automation Engineer", "System Integrator"],
    
    placementStats: {
      averagePackage: "5 - 8 LPA",
      hiringCompanies: ["Siemens", "Rockwell", "Phoenix Contact", "HMS Networks", "Moxa"]
    },
    
    relatedCourses: ["plc-scada-training", "dcs-training", "cybersecurity-ot"],
    
    faqs: [
      { question: "Do I need networking background?", answer: "Basic understanding of networks helps but we cover fundamentals from scratch." }
    ],
    
    syllabusFile: "/pdfs/networking-syllabus.pdf",
    brochureFile: "/pdfs/prolific-automation-brochure.pdf"
  }
];
