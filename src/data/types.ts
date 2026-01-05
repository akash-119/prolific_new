export interface CourseModule {
  moduleNumber: number;
  title: string;
  duration: string;
  topics: string[];
}

export interface CourseCurriculum {
  totalModules: number;
  totalHours: number;
  modules: CourseModule[];
}

export interface CourseInstructor {
  name: string;
  designation: string;
  experience: string;
  photo: string;
  bio: string;
}

export interface BatchInfo {
  date: string;
  timing: string;
  mode: string;
  seats: number;
}

export interface BatchDetails {
  upcomingBatches: BatchInfo[];
  batchSize: string;
}

export interface CourseFees {
  original: number;
  discounted: number;
  currency: string;
}

export interface CourseOverview {
  description: string;
  objectives: string[];
  whoShouldAttend: string[];
  prerequisites: string;
  certifications: string[];
  tools: string[];
}

export interface PlacementStats {
  averagePackage: string;
  hiringCompanies: string[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  category: string;
  subCategory: string;
  duration: string;
  mode: string[];
  fees: CourseFees;
  thumbnail: string;
  shortDescription: string;
  overview: CourseOverview;
  curriculum: CourseCurriculum;
  instructor: CourseInstructor;
  batchDetails: BatchDetails;
  careerOpportunities: string[];
  placementStats: PlacementStats;
  relatedCourses: string[];
  faqs: FAQ[];
  syllabusFile: string;
  brochureFile: string;
}
