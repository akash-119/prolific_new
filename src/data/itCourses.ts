import { Course } from "./types";

export const itCourses: Course[] = [
  {
    id: "machine-learning",
    slug: "machine-learning",
    title: "Machine Learning",
    category: "IT & Data",
    subCategory: "AI/ML",
    duration: "4 Months",
    mode: ["Classroom", "Online", "Hybrid"],
    fees: {
      original: 55000,
      discounted: 48000,
      currency: "INR"
    },
    thumbnail: "/images/courses/ml.jpg",
    shortDescription: "Learn ML algorithms and build predictive models using Python, TensorFlow, and scikit-learn.",
    
    overview: {
      description: `The Machine Learning program provides comprehensive training in ML algorithms, data preprocessing, model building, and deployment. Students learn to solve real-world problems using supervised, unsupervised, and deep learning techniques.

This course covers the complete ML pipeline from data collection to model deployment. Students work on industry projects including recommendation systems, image classification, and predictive analytics.

With hands-on experience in Python, TensorFlow, and scikit-learn, graduates are prepared for careers in data science and AI.`,
      objectives: [
        "Understand ML fundamentals and algorithms",
        "Implement supervised learning (regression, classification)",
        "Apply unsupervised learning (clustering, dimensionality reduction)",
        "Build neural networks and deep learning models",
        "Deploy ML models to production",
        "Work on real-world ML projects"
      ],
      whoShouldAttend: [
        "Engineering graduates",
        "IT professionals",
        "Data analysts seeking ML skills",
        "Research students",
        "Career switchers to AI/ML"
      ],
      prerequisites: "Basic Python programming and mathematics knowledge",
      certifications: ["ISO 9001-2008 Certified"],
      tools: ["Python", "TensorFlow", "scikit-learn", "Pandas", "NumPy", "Jupyter Notebook", "Google Colab"]
    },
    
    curriculum: {
      totalModules: 8,
      totalHours: 120,
      modules: [
        { moduleNumber: 1, title: "Python for ML", duration: "15 hours", topics: ["Python basics", "NumPy", "Pandas", "Matplotlib", "Data manipulation"] },
        { moduleNumber: 2, title: "Statistics & Math", duration: "12 hours", topics: ["Probability", "Statistics", "Linear algebra", "Calculus basics", "Statistical tests"] },
        { moduleNumber: 3, title: "Supervised Learning", duration: "20 hours", topics: ["Linear regression", "Logistic regression", "Decision trees", "Random forests", "SVM"] },
        { moduleNumber: 4, title: "Unsupervised Learning", duration: "15 hours", topics: ["K-means clustering", "Hierarchical clustering", "PCA", "t-SNE", "Anomaly detection"] },
        { moduleNumber: 5, title: "Deep Learning Basics", duration: "18 hours", topics: ["Neural networks", "TensorFlow/Keras", "CNN basics", "RNN basics", "Training techniques"] },
        { moduleNumber: 6, title: "Model Optimization", duration: "12 hours", topics: ["Hyperparameter tuning", "Cross-validation", "Regularization", "Ensemble methods", "Model selection"] },
        { moduleNumber: 7, title: "ML Projects", duration: "20 hours", topics: ["Recommendation system", "Image classification", "Sentiment analysis", "Time series", "Fraud detection"] },
        { moduleNumber: 8, title: "Deployment & Career", duration: "8 hours", topics: ["Model deployment", "Flask API", "Cloud deployment", "Portfolio building", "Interview prep"] }
      ]
    },
    
    instructor: {
      name: "Dr. Neha Sharma",
      designation: "Data Science Lead",
      experience: "12+ years",
      photo: "/images/instructors/neha.jpg",
      bio: "PhD in Machine Learning from IIT Delhi. Former data scientist at Amazon and Microsoft."
    },
    
    batchDetails: {
      upcomingBatches: [
        { date: "2026-01-20", timing: "10:00 AM - 1:00 PM", mode: "Classroom", seats: 20 },
        { date: "2026-02-01", timing: "7:00 PM - 9:30 PM", mode: "Online", seats: 30 },
        { date: "2026-02-15", timing: "9:00 AM - 12:00 PM", mode: "Hybrid", seats: 25 }
      ],
      batchSize: "Max 25 students per batch"
    },
    
    careerOpportunities: ["ML Engineer", "Data Scientist", "AI Developer", "Research Scientist", "Analytics Manager"],
    
    placementStats: {
      averagePackage: "6 - 15 LPA",
      hiringCompanies: ["Amazon", "Microsoft", "Google", "TCS", "Infosys", "Wipro", "Accenture"]
    },
    
    relatedCourses: ["data-science", "data-analytics", "python"],
    
    faqs: [
      { question: "Do I need prior ML experience?", answer: "No, we start from basics. Python knowledge is helpful." },
      { question: "Will I work on real projects?", answer: "Yes, you'll complete 5+ industry projects and a capstone project." },
      { question: "Is online batch effective?", answer: "Yes, our online batches have live sessions with screen sharing and doubt clearing." }
    ],
    
    syllabusFile: "/pdfs/ml-syllabus.pdf",
    brochureFile: "/pdfs/prolific-automation-brochure.pdf"
  },
  {
    id: "data-analytics",
    slug: "data-analytics",
    title: "Data Analytics",
    category: "IT & Data",
    subCategory: "Analytics",
    duration: "3 Months",
    mode: ["Classroom", "Online"],
    fees: {
      original: 40000,
      discounted: 35000,
      currency: "INR"
    },
    thumbnail: "/images/courses/analytics.jpg",
    shortDescription: "Master Excel, SQL, Power BI, and Tableau for data-driven business decisions.",
    
    overview: {
      description: `The Data Analytics program teaches essential tools and techniques for analyzing business data. Students learn to collect, clean, analyze, and visualize data using industry-standard tools.

This practical course focuses on skills that are immediately applicable in any business setting. From Excel to Power BI, students gain proficiency in the complete analytics toolkit.`,
      objectives: [
        "Master Advanced Excel for data analysis",
        "Write complex SQL queries",
        "Build interactive Power BI dashboards",
        "Create Tableau visualizations",
        "Apply statistical analysis techniques",
        "Present data-driven insights"
      ],
      whoShouldAttend: [
        "Business analysts",
        "Marketing professionals",
        "Finance professionals",
        "Operations managers",
        "Fresh graduates",
        "Career switchers"
      ],
      prerequisites: "Basic computer skills",
      certifications: ["ISO 9001-2008 Certified"],
      tools: ["Microsoft Excel", "SQL Server", "Power BI", "Tableau", "Python (basics)"]
    },
    
    curriculum: {
      totalModules: 6,
      totalHours: 90,
      modules: [
        { moduleNumber: 1, title: "Advanced Excel", duration: "18 hours", topics: ["Pivot tables", "VLOOKUP/XLOOKUP", "Power Query", "Macros", "Data modeling"] },
        { moduleNumber: 2, title: "SQL for Analytics", duration: "18 hours", topics: ["SQL basics", "Joins", "Aggregations", "Window functions", "Subqueries"] },
        { moduleNumber: 3, title: "Power BI", duration: "20 hours", topics: ["Data import", "Data modeling", "DAX formulas", "Visualizations", "Dashboard design"] },
        { moduleNumber: 4, title: "Tableau", duration: "15 hours", topics: ["Tableau basics", "Chart types", "Calculations", "Dashboards", "Story telling"] },
        { moduleNumber: 5, title: "Statistics & Python", duration: "12 hours", topics: ["Descriptive statistics", "Python pandas", "Data visualization", "Basic ML", "Hypothesis testing"] },
        { moduleNumber: 6, title: "Capstone Project", duration: "7 hours", topics: ["End-to-end project", "Data analysis", "Dashboard creation", "Presentation", "Interview prep"] }
      ]
    },
    
    instructor: {
      name: "Mr. Rahul Khanna",
      designation: "Business Analytics Consultant",
      experience: "15+ years",
      photo: "/images/instructors/rahul.jpg",
      bio: "Analytics consultant with experience at Deloitte and EY. Microsoft certified in Power BI."
    },
    
    batchDetails: {
      upcomingBatches: [
        { date: "2026-01-18", timing: "10:00 AM - 1:00 PM", mode: "Classroom", seats: 25 },
        { date: "2026-01-25", timing: "7:00 PM - 9:30 PM", mode: "Online", seats: 40 }
      ],
      batchSize: "Max 25 students per batch"
    },
    
    careerOpportunities: ["Data Analyst", "Business Analyst", "BI Developer", "Analytics Consultant", "MIS Executive"],
    
    placementStats: {
      averagePackage: "4 - 10 LPA",
      hiringCompanies: ["Deloitte", "EY", "KPMG", "Accenture", "TCS", "Genpact", "WNS"]
    },
    
    relatedCourses: ["machine-learning", "power-bi", "sql", "python"],
    
    faqs: [
      { question: "Is this suitable for non-technical background?", answer: "Yes, this course is designed for beginners with no prior technical experience." },
      { question: "Will I get hands-on practice?", answer: "Yes, you'll work on real datasets and complete multiple projects." }
    ],
    
    syllabusFile: "/pdfs/analytics-syllabus.pdf",
    brochureFile: "/pdfs/prolific-automation-brochure.pdf"
  },
  {
    id: "data-science",
    slug: "data-science",
    title: "Data Science",
    category: "IT & Data",
    subCategory: "Data Science",
    duration: "6 Months",
    mode: ["Classroom", "Hybrid"],
    fees: {
      original: 75000,
      discounted: 65000,
      currency: "INR"
    },
    thumbnail: "/images/courses/datascience.jpg",
    shortDescription: "Complete data science program with Python, Statistics, ML, and real-world projects.",
    
    overview: {
      description: `The Data Science program is a comprehensive course covering the entire data science lifecycle. From data collection and cleaning to advanced machine learning and deployment, students gain end-to-end skills.

This intensive program includes statistics, Python programming, machine learning, deep learning, and practical projects. Graduates are prepared for data scientist roles at top companies.`,
      objectives: [
        "Master Python for data science",
        "Apply statistical analysis and hypothesis testing",
        "Build and evaluate ML models",
        "Work with big data tools",
        "Deploy ML solutions",
        "Complete industry projects"
      ],
      whoShouldAttend: [
        "Engineering/Science graduates",
        "IT professionals",
        "Analytics professionals",
        "Research scholars",
        "Career changers to data science"
      ],
      prerequisites: "Basic programming and mathematics",
      certifications: ["ISO 9001-2008 Certified", "NSDC Approved"],
      tools: ["Python", "R", "SQL", "TensorFlow", "Spark", "AWS", "MongoDB"]
    },
    
    curriculum: {
      totalModules: 10,
      totalHours: 180,
      modules: [
        { moduleNumber: 1, title: "Python Programming", duration: "20 hours", topics: ["Python basics", "OOP", "Libraries", "Data structures", "File handling"] },
        { moduleNumber: 2, title: "Statistics & Probability", duration: "18 hours", topics: ["Descriptive stats", "Probability", "Distributions", "Inference", "Hypothesis testing"] },
        { moduleNumber: 3, title: "Data Manipulation", duration: "18 hours", topics: ["NumPy", "Pandas", "Data cleaning", "EDA", "Feature engineering"] },
        { moduleNumber: 4, title: "Data Visualization", duration: "12 hours", topics: ["Matplotlib", "Seaborn", "Plotly", "Storytelling", "Dashboard basics"] },
        { moduleNumber: 5, title: "SQL & Databases", duration: "15 hours", topics: ["SQL advanced", "NoSQL basics", "MongoDB", "Data warehousing", "ETL"] },
        { moduleNumber: 6, title: "Machine Learning", duration: "25 hours", topics: ["Supervised learning", "Unsupervised learning", "Model evaluation", "Feature selection", "Ensemble methods"] },
        { moduleNumber: 7, title: "Deep Learning", duration: "20 hours", topics: ["Neural networks", "CNN", "RNN/LSTM", "NLP basics", "Transfer learning"] },
        { moduleNumber: 8, title: "Big Data & Cloud", duration: "15 hours", topics: ["Spark basics", "AWS services", "Cloud deployment", "Data pipelines", "MLOps intro"] },
        { moduleNumber: 9, title: "Capstone Projects", duration: "25 hours", topics: ["End-to-end projects", "Kaggle competitions", "Portfolio building", "Documentation", "Presentation"] },
        { moduleNumber: 10, title: "Career Preparation", duration: "12 hours", topics: ["Resume building", "GitHub portfolio", "Interview prep", "Mock interviews", "Placement support"] }
      ]
    },
    
    instructor: {
      name: "Dr. Amit Gupta",
      designation: "Chief Data Scientist",
      experience: "18+ years",
      photo: "/images/instructors/amit-gupta.jpg",
      bio: "Former Lead Data Scientist at IBM. PhD from IISc Bangalore. Published researcher in ML/AI."
    },
    
    batchDetails: {
      upcomingBatches: [
        { date: "2026-02-01", timing: "9:00 AM - 1:00 PM", mode: "Classroom", seats: 20 },
        { date: "2026-02-15", timing: "6:00 PM - 10:00 PM", mode: "Hybrid", seats: 25 }
      ],
      batchSize: "Max 20 students per batch"
    },
    
    careerOpportunities: ["Data Scientist", "ML Engineer", "AI Specialist", "Research Scientist", "Analytics Lead"],
    
    placementStats: {
      averagePackage: "8 - 20 LPA",
      hiringCompanies: ["Google", "Amazon", "Microsoft", "IBM", "Flipkart", "Swiggy", "Ola"]
    },
    
    relatedCourses: ["machine-learning", "data-analytics", "python"],
    
    faqs: [
      { question: "What is the difference from Data Analytics?", answer: "Data Science is more advanced, covering ML, deep learning, and programming. Analytics focuses on business tools like Excel and Power BI." },
      { question: "Do I need prior coding experience?", answer: "Basic programming knowledge is helpful. We provide a Python foundation module." }
    ],
    
    syllabusFile: "/pdfs/datascience-syllabus.pdf",
    brochureFile: "/pdfs/prolific-automation-brochure.pdf"
  },
  {
    id: "python",
    slug: "python",
    title: "Python Programming",
    category: "IT & Data",
    subCategory: "Programming",
    duration: "2 Months",
    mode: ["Classroom", "Online"],
    fees: {
      original: 25000,
      discounted: 20000,
      currency: "INR"
    },
    thumbnail: "/images/courses/python.jpg",
    shortDescription: "Learn Python programming from basics to advanced concepts for data science and automation.",
    
    overview: {
      description: `This Python programming course takes you from beginner to proficient Python developer. Learn core Python concepts, libraries, and practical applications in data analysis, automation, and web development.`,
      objectives: [
        "Master Python syntax and core concepts",
        "Work with data structures and OOP",
        "Use popular libraries (NumPy, Pandas)",
        "Build automation scripts",
        "Create simple web applications",
        "Prepare for data science journey"
      ],
      whoShouldAttend: [
        "Complete beginners",
        "Students",
        "Professionals learning programming",
        "Data aspirants",
        "Automation enthusiasts"
      ],
      prerequisites: "Basic computer knowledge",
      certifications: ["ISO 9001-2008 Certified"],
      tools: ["Python 3", "PyCharm", "Jupyter Notebook", "VS Code", "Git"]
    },
    
    curriculum: {
      totalModules: 6,
      totalHours: 60,
      modules: [
        { moduleNumber: 1, title: "Python Basics", duration: "12 hours", topics: ["Variables", "Data types", "Operators", "Control flow", "Functions"] },
        { moduleNumber: 2, title: "Data Structures", duration: "10 hours", topics: ["Lists", "Tuples", "Dictionaries", "Sets", "Comprehensions"] },
        { moduleNumber: 3, title: "OOP in Python", duration: "10 hours", topics: ["Classes", "Objects", "Inheritance", "Polymorphism", "Modules"] },
        { moduleNumber: 4, title: "File Handling & Libraries", duration: "10 hours", topics: ["File I/O", "Exception handling", "NumPy basics", "Pandas basics", "pip packages"] },
        { moduleNumber: 5, title: "Practical Applications", duration: "12 hours", topics: ["Automation scripts", "Data processing", "API consumption", "Web scraping", "Mini projects"] },
        { moduleNumber: 6, title: "Project & Assessment", duration: "6 hours", topics: ["Final project", "Code review", "Best practices", "Career guidance", "Certification"] }
      ]
    },
    
    instructor: {
      name: "Mr. Sanjay Kumar",
      designation: "Python Developer",
      experience: "8+ years",
      photo: "/images/instructors/sanjay.jpg",
      bio: "Full-stack Python developer with experience at startups and enterprises."
    },
    
    batchDetails: {
      upcomingBatches: [
        { date: "2026-01-15", timing: "10:00 AM - 12:00 PM", mode: "Classroom", seats: 25 },
        { date: "2026-01-20", timing: "7:00 PM - 9:00 PM", mode: "Online", seats: 50 }
      ],
      batchSize: "Max 25 students per batch"
    },
    
    careerOpportunities: ["Python Developer", "Automation Engineer", "Junior Data Analyst", "Backend Developer", "QA Automation"],
    
    placementStats: {
      averagePackage: "3 - 8 LPA",
      hiringCompanies: ["TCS", "Infosys", "Wipro", "Tech Mahindra", "Startups"]
    },
    
    relatedCourses: ["machine-learning", "data-analytics", "data-science"],
    
    faqs: [
      { question: "Is this for complete beginners?", answer: "Yes, no prior programming experience required." }
    ],
    
    syllabusFile: "/pdfs/python-syllabus.pdf",
    brochureFile: "/pdfs/prolific-automation-brochure.pdf"
  },
  {
    id: "power-bi",
    slug: "power-bi",
    title: "Power BI",
    category: "IT & Data",
    subCategory: "BI Tools",
    duration: "1 Month",
    mode: ["Classroom", "Online"],
    fees: {
      original: 18000,
      discounted: 15000,
      currency: "INR"
    },
    thumbnail: "/images/courses/powerbi.jpg",
    shortDescription: "Business intelligence and data visualization with Microsoft Power BI.",
    
    overview: {
      description: `This focused Power BI course teaches you to create stunning interactive dashboards and reports. Learn data modeling, DAX calculations, and visualization best practices.`,
      objectives: [
        "Connect to various data sources",
        "Transform and model data",
        "Write DAX formulas",
        "Design interactive dashboards",
        "Publish and share reports",
        "Implement row-level security"
      ],
      whoShouldAttend: [
        "Business analysts",
        "Report creators",
        "Excel users",
        "Managers",
        "Anyone needing BI skills"
      ],
      prerequisites: "Basic Excel knowledge",
      certifications: ["ISO 9001-2008 Certified"],
      tools: ["Power BI Desktop", "Power BI Service", "Power Query", "DAX Studio"]
    },
    
    curriculum: {
      totalModules: 4,
      totalHours: 30,
      modules: [
        { moduleNumber: 1, title: "Power BI Fundamentals", duration: "8 hours", topics: ["Installation", "Interface", "Data connections", "Power Query", "Data types"] },
        { moduleNumber: 2, title: "Data Modeling & DAX", duration: "10 hours", topics: ["Relationships", "Star schema", "DAX basics", "Calculated columns", "Measures"] },
        { moduleNumber: 3, title: "Visualizations", duration: "8 hours", topics: ["Chart types", "Maps", "Tables/Matrix", "Formatting", "Interactivity"] },
        { moduleNumber: 4, title: "Publishing & Projects", duration: "4 hours", topics: ["Power BI Service", "Sharing", "Security", "Project work", "Certification prep"] }
      ]
    },
    
    instructor: {
      name: "Ms. Priya Singh",
      designation: "BI Consultant",
      experience: "10+ years",
      photo: "/images/instructors/priya-singh.jpg",
      bio: "Microsoft certified Power BI expert. Former BI consultant at Cognizant."
    },
    
    batchDetails: {
      upcomingBatches: [
        { date: "2026-01-22", timing: "10:00 AM - 12:00 PM", mode: "Classroom", seats: 20 },
        { date: "2026-02-01", timing: "7:00 PM - 9:00 PM", mode: "Online", seats: 30 }
      ],
      batchSize: "Max 20 students per batch"
    },
    
    careerOpportunities: ["Power BI Developer", "BI Analyst", "Report Developer", "Data Analyst"],
    
    placementStats: {
      averagePackage: "4 - 8 LPA",
      hiringCompanies: ["Cognizant", "Accenture", "Capgemini", "Deloitte", "KPMG"]
    },
    
    relatedCourses: ["data-analytics", "sql", "tableau"],
    
    faqs: [
      { question: "Do I need SQL knowledge?", answer: "SQL knowledge helps but is not required. We teach necessary concepts." }
    ],
    
    syllabusFile: "/pdfs/powerbi-syllabus.pdf",
    brochureFile: "/pdfs/prolific-automation-brochure.pdf"
  },
  {
    id: "sql",
    slug: "sql",
    title: "SQL",
    category: "IT & Data",
    subCategory: "Database",
    duration: "1 Month",
    mode: ["Classroom", "Online"],
    fees: {
      original: 15000,
      discounted: 12000,
      currency: "INR"
    },
    thumbnail: "/images/courses/sql.jpg",
    shortDescription: "Master SQL for data analysis, reporting, and database management.",
    
    overview: {
      description: `Learn SQL from basics to advanced concepts. This course covers data querying, manipulation, and database design using industry-standard SQL Server and MySQL.`,
      objectives: [
        "Write complex SQL queries",
        "Use JOINs and subqueries",
        "Apply aggregate functions",
        "Create views and stored procedures",
        "Optimize query performance",
        "Design database schemas"
      ],
      whoShouldAttend: [
        "Data analysts",
        "Developers",
        "Business analysts",
        "Students",
        "Anyone working with data"
      ],
      prerequisites: "Basic computer knowledge",
      certifications: ["ISO 9001-2008 Certified"],
      tools: ["SQL Server", "MySQL", "SSMS", "MySQL Workbench"]
    },
    
    curriculum: {
      totalModules: 4,
      totalHours: 30,
      modules: [
        { moduleNumber: 1, title: "SQL Basics", duration: "8 hours", topics: ["SELECT", "WHERE", "ORDER BY", "DISTINCT", "LIMIT"] },
        { moduleNumber: 2, title: "Joins & Relationships", duration: "8 hours", topics: ["INNER JOIN", "LEFT/RIGHT JOIN", "FULL JOIN", "Self joins", "Subqueries"] },
        { moduleNumber: 3, title: "Aggregations & Analytics", duration: "8 hours", topics: ["GROUP BY", "HAVING", "Window functions", "CTEs", "Analytics queries"] },
        { moduleNumber: 4, title: "Advanced Topics", duration: "6 hours", topics: ["Views", "Stored procedures", "Indexing", "Performance", "Project work"] }
      ]
    },
    
    instructor: {
      name: "Mr. Vivek Sharma",
      designation: "Database Administrator",
      experience: "12+ years",
      photo: "/images/instructors/vivek.jpg",
      bio: "Senior DBA with experience at Oracle and IBM. Expert in SQL optimization."
    },
    
    batchDetails: {
      upcomingBatches: [
        { date: "2026-01-18", timing: "10:00 AM - 12:00 PM", mode: "Classroom", seats: 25 },
        { date: "2026-01-25", timing: "7:00 PM - 9:00 PM", mode: "Online", seats: 40 }
      ],
      batchSize: "Max 25 students per batch"
    },
    
    careerOpportunities: ["SQL Developer", "Data Analyst", "Database Administrator", "BI Developer"],
    
    placementStats: {
      averagePackage: "3 - 7 LPA",
      hiringCompanies: ["TCS", "Infosys", "Wipro", "Capgemini", "IBM"]
    },
    
    relatedCourses: ["data-analytics", "power-bi", "python"],
    
    faqs: [
      { question: "Which SQL version will I learn?", answer: "We teach standard SQL applicable to all databases, with examples in SQL Server and MySQL." }
    ],
    
    syllabusFile: "/pdfs/sql-syllabus.pdf",
    brochureFile: "/pdfs/prolific-automation-brochure.pdf"
  },
  {
    id: "tableau",
    slug: "tableau",
    title: "Tableau",
    category: "IT & Data",
    subCategory: "BI Tools",
    duration: "1 Month",
    mode: ["Classroom", "Online"],
    fees: {
      original: 18000,
      discounted: 15000,
      currency: "INR"
    },
    thumbnail: "/images/courses/tableau.jpg",
    shortDescription: "Create stunning data visualizations and interactive dashboards with Tableau.",
    
    overview: {
      description: `Master Tableau Desktop and Tableau Public for creating powerful data visualizations. Learn to build interactive dashboards that tell compelling data stories.`,
      objectives: [
        "Connect to various data sources",
        "Create different chart types",
        "Build calculated fields",
        "Design interactive dashboards",
        "Create data stories",
        "Publish and share visualizations"
      ],
      whoShouldAttend: [
        "Business analysts",
        "Data analysts",
        "Report creators",
        "Marketing professionals",
        "Anyone interested in data viz"
      ],
      prerequisites: "Basic Excel knowledge",
      certifications: ["ISO 9001-2008 Certified"],
      tools: ["Tableau Desktop", "Tableau Public", "Tableau Server (basics)"]
    },
    
    curriculum: {
      totalModules: 4,
      totalHours: 30,
      modules: [
        { moduleNumber: 1, title: "Tableau Basics", duration: "8 hours", topics: ["Interface", "Data connections", "Dimensions vs Measures", "Basic charts", "Filters"] },
        { moduleNumber: 2, title: "Advanced Visualizations", duration: "10 hours", topics: ["Maps", "Dual axis", "Table calculations", "LOD expressions", "Parameters"] },
        { moduleNumber: 3, title: "Dashboard Design", duration: "8 hours", topics: ["Dashboard creation", "Actions", "Formatting", "Best practices", "Mobile design"] },
        { moduleNumber: 4, title: "Publishing & Projects", duration: "4 hours", topics: ["Tableau Public", "Story points", "Project work", "Certification prep", "Portfolio"] }
      ]
    },
    
    instructor: {
      name: "Ms. Kavita Reddy",
      designation: "Data Visualization Expert",
      experience: "9+ years",
      photo: "/images/instructors/kavita.jpg",
      bio: "Tableau certified professional. Former analytics lead at Flipkart."
    },
    
    batchDetails: {
      upcomingBatches: [
        { date: "2026-01-25", timing: "10:00 AM - 12:00 PM", mode: "Classroom", seats: 20 },
        { date: "2026-02-05", timing: "7:00 PM - 9:00 PM", mode: "Online", seats: 30 }
      ],
      batchSize: "Max 20 students per batch"
    },
    
    careerOpportunities: ["Tableau Developer", "Data Visualization Analyst", "BI Analyst", "Analytics Consultant"],
    
    placementStats: {
      averagePackage: "4 - 9 LPA",
      hiringCompanies: ["Flipkart", "Amazon", "Deloitte", "Accenture", "McKinsey"]
    },
    
    relatedCourses: ["data-analytics", "power-bi", "sql"],
    
    faqs: [
      { question: "Power BI or Tableau?", answer: "Both are excellent. Tableau is known for visualization, Power BI for Microsoft integration. We recommend learning both." }
    ],
    
    syllabusFile: "/pdfs/tableau-syllabus.pdf",
    brochureFile: "/pdfs/prolific-automation-brochure.pdf"
  },
  {
    id: "excel",
    slug: "excel",
    title: "Advanced Excel",
    category: "IT & Data",
    subCategory: "Analytics",
    duration: "1 Month",
    mode: ["Classroom", "Online"],
    fees: {
      original: 12000,
      discounted: 10000,
      currency: "INR"
    },
    thumbnail: "/images/courses/excel.jpg",
    shortDescription: "Master Advanced Excel including pivot tables, VLOOKUP, macros, and Power Query.",
    
    overview: {
      description: `This Advanced Excel course takes you beyond basics to power-user level. Learn pivot tables, advanced formulas, data analysis tools, and VBA macros.`,
      objectives: [
        "Create complex formulas",
        "Master pivot tables",
        "Use Power Query for data transformation",
        "Build macros with VBA",
        "Create dynamic dashboards",
        "Automate repetitive tasks"
      ],
      whoShouldAttend: [
        "Office professionals",
        "Finance professionals",
        "Analysts",
        "Managers",
        "Anyone using Excel regularly"
      ],
      prerequisites: "Basic Excel knowledge",
      certifications: ["ISO 9001-2008 Certified"],
      tools: ["Microsoft Excel 2019/365", "Power Query", "VBA Editor"]
    },
    
    curriculum: {
      totalModules: 4,
      totalHours: 24,
      modules: [
        { moduleNumber: 1, title: "Advanced Formulas", duration: "6 hours", topics: ["VLOOKUP/XLOOKUP", "INDEX-MATCH", "IF functions", "Array formulas", "Text functions"] },
        { moduleNumber: 2, title: "Pivot Tables & Charts", duration: "6 hours", topics: ["Pivot tables", "Pivot charts", "Slicers", "Calculated fields", "Grouping"] },
        { moduleNumber: 3, title: "Power Query & Data", duration: "6 hours", topics: ["Power Query basics", "Data transformation", "Combining data", "Data validation", "Conditional formatting"] },
        { moduleNumber: 4, title: "Macros & VBA", duration: "6 hours", topics: ["Recording macros", "VBA basics", "Form controls", "Dashboard creation", "Project work"] }
      ]
    },
    
    instructor: {
      name: "Mr. Ashok Verma",
      designation: "Excel Expert",
      experience: "15+ years",
      photo: "/images/instructors/ashok.jpg",
      bio: "Microsoft certified Excel expert. Former finance manager at multinational corporations."
    },
    
    batchDetails: {
      upcomingBatches: [
        { date: "2026-01-20", timing: "10:00 AM - 12:00 PM", mode: "Classroom", seats: 25 },
        { date: "2026-01-28", timing: "7:00 PM - 9:00 PM", mode: "Online", seats: 50 }
      ],
      batchSize: "Max 25 students per batch"
    },
    
    careerOpportunities: ["MIS Executive", "Data Analyst", "Finance Analyst", "Operations Analyst", "Business Analyst"],
    
    placementStats: {
      averagePackage: "3 - 6 LPA",
      hiringCompanies: ["Any industry - Excel skills are universal"]
    },
    
    relatedCourses: ["data-analytics", "power-bi", "sql"],
    
    faqs: [
      { question: "I know basic Excel. Is this for me?", answer: "Yes! This course covers advanced topics beyond basics like pivot tables and macros." }
    ],
    
    syllabusFile: "/pdfs/excel-syllabus.pdf",
    brochureFile: "/pdfs/prolific-automation-brochure.pdf"
  }
];
