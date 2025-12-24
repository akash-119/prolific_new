export const coursesData = {
  "CS/IT": [
    { id: "advance-java", name: "Advance Java", description: "Master enterprise Java development", icon: "Code2" },
    { id: "core-java", name: "Core Java", description: "Foundation of Java programming", icon: "Coffee" },
    { id: "ai", name: "Artificial Intelligence", description: "Build intelligent systems", icon: "Brain" },
    { id: "aws", name: "AWS Cloud", description: "Amazon Web Services certification", icon: "Cloud" },
    { id: "angular", name: "Angular JS", description: "Modern web applications", icon: "Globe" },
    { id: "data-science", name: "Data Science", description: "Analytics and insights", icon: "BarChart3" },
    { id: "ml", name: "Machine Learning", description: "Predictive modeling", icon: "Cpu" },
    { id: "python", name: "Python", description: "Versatile programming language", icon: "Terminal" },
    { id: "nodejs", name: "Node JS", description: "Server-side JavaScript", icon: "Server" },
    { id: "fullstack", name: "Full Stack Developer", description: "End-to-end development", icon: "Layers" },
  ],
  "EC/EE/IC": [
    { id: "plc-scada", name: "PLC SCADA", description: "Industrial control systems", icon: "Settings" },
    { id: "robotics", name: "Industrial Automation Robotics", description: "Robotics and automation", icon: "Bot" },
  ],
  "Mech/Civil": [
    { id: "autocad", name: "AutoCAD", description: "Computer-aided design", icon: "PenTool" },
    { id: "solidworks", name: "SolidWorks", description: "3D CAD modeling", icon: "Box" },
    { id: "revit", name: "Revit Architecture", description: "BIM software", icon: "Building2" },
    { id: "mechanical", name: "Mechanical Designing", description: "Engineering design", icon: "Cog" },
  ],
};

export const allCourses = Object.values(coursesData).flat();

export const testimonials = [
  {
    id: 1,
    name: "Pratham Arora",
    position: "Automation Engineer",
    company: "Siemens India",
    image: "",
    rating: 5,
    text: "Prolific's PLC SCADA training was exceptional. The hands-on approach and industry-relevant curriculum helped me land my dream job at Siemens.",
  },
  {
    id: 2,
    name: "Harsh Dubey",
    position: "Full Stack Developer",
    company: "TCS",
    image: "",
    rating: 5,
    text: "The Full Stack Development course at Prolific gave me practical skills that employers actually look for. Got placed within 2 months of completion!",
  },
  {
    id: 3,
    name: "Mohit Gupta",
    position: "Data Scientist",
    company: "Infosys",
    image: "",
    rating: 5,
    text: "Excellent faculty and comprehensive curriculum. The Data Science program covered everything from Python to advanced ML algorithms.",
  },
  {
    id: 4,
    name: "Amit Rai",
    position: "Cloud Architect",
    company: "Amazon",
    image: "",
    rating: 5,
    text: "AWS training at Prolific was top-notch. The certification preparation and practical labs made all the difference in my career.",
  },
  {
    id: 5,
    name: "Ritik",
    position: "Java Developer",
    company: "Wipro",
    image: "",
    rating: 5,
    text: "From Core Java to Advanced concepts, the structured learning path and placement assistance helped me kickstart my IT career.",
  },
  {
    id: 6,
    name: "Shoeb",
    position: "CAD Designer",
    company: "L&T Construction",
    image: "",
    rating: 5,
    text: "AutoCAD and SolidWorks training at Prolific opened doors to the design industry. Highly recommend for engineering graduates!",
  },
  {
    id: 7,
    name: "Abhishek Kumar",
    position: "AI Engineer",
    company: "Microsoft",
    image: "",
    rating: 5,
    text: "The AI and Machine Learning program at Prolific is world-class. Real projects and industry mentorship made learning effective.",
  },
];

export const stats = [
  { value: 30, suffix: "+", label: "Branches", icon: "MapPin" },
  { value: 1.2, suffix: " Lakh+", label: "Students Trained", icon: "GraduationCap", isDecimal: true },
  { value: 600, suffix: "+", label: "Corporate Clients", icon: "Building2" },
  { value: 23, suffix: "+", label: "Years of Excellence", icon: "Award" },
];

export const whyChooseUs = [
  { title: "Industry Expert Trainers", description: "Learn from professionals with 10+ years of experience", icon: "Users" },
  { title: "Hands-on Training", description: "80% practical, 20% theory approach", icon: "Wrench" },
  { title: "100% Placement Assistance", description: "Dedicated placement cell with 600+ hiring partners", icon: "Briefcase" },
  { title: "State-of-the-art Labs", description: "Latest equipment and software", icon: "Monitor" },
  { title: "Industry Certifications", description: "ISO 9001, IAO & NSDC approved", icon: "BadgeCheck" },
  { title: "Flexible Timings", description: "Weekend and weekday batches available", icon: "Clock" },
];

export const aboutPoints = [
  "Pioneer in industrial automation training since 1997",
  "Trained over 10,500 students/professionals yearly",
  "500+ in-plant training programs with 50+ Fortune 1000 companies",
  "30 branches across India",
  "One-stop shop for Industrial Automation, Mechanical, Embedded Systems, Electrical training",
  "Strategic investor: Aref Group (Kuwait)",
  "ISO 9001-2008 certified, IAO Certified, NSDC Approved",
  "Executing UDAAN Program (MHA & NSDC sponsored) - ₹60 crore",
  "Strong placement network with 120+ colleges and institutions",
];
