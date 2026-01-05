import { automationCourses } from './automationCourses';
import { itCourses } from './itCourses';
import { designingCourses } from './designingCourses';
import { Course } from './types';

export const allCourses: Course[] = [
  ...automationCourses,
  ...itCourses,
  ...designingCourses
];

export const getCourseBySlug = (slug: string): Course | undefined => {
  return allCourses.find(course => course.slug === slug);
};

export const getCourseById = (id: string): Course | undefined => {
  return allCourses.find(course => course.id === id);
};

export const getCoursesByCategory = (category: string): Course[] => {
  return allCourses.filter(course => course.category === category);
};

export const getCoursesBySubCategory = (subCategory: string): Course[] => {
  return allCourses.filter(course => course.subCategory === subCategory);
};

export const getRelatedCourses = (courseId: string, limit: number = 3): Course[] => {
  const course = allCourses.find(c => c.id === courseId);
  if (!course) return [];
  
  // First try to get from explicit related courses
  const relatedFromIds = course.relatedCourses
    .map(id => allCourses.find(c => c.id === id))
    .filter((c): c is Course => c !== undefined)
    .slice(0, limit);
  
  if (relatedFromIds.length >= limit) {
    return relatedFromIds;
  }
  
  // Fill remaining with same category courses
  const remaining = limit - relatedFromIds.length;
  const sameCategoryCourses = allCourses
    .filter(c => c.category === course.category && c.id !== courseId && !course.relatedCourses.includes(c.id))
    .slice(0, remaining);
  
  return [...relatedFromIds, ...sameCategoryCourses];
};

export const searchCourses = (query: string): Course[] => {
  const searchTerms = query.toLowerCase().split(' ').filter(Boolean);
  
  return allCourses.filter(course => {
    const searchableText = [
      course.title,
      course.category,
      course.subCategory,
      course.shortDescription,
      ...course.overview.tools,
      ...course.careerOpportunities
    ].join(' ').toLowerCase();
    
    return searchTerms.every(term => searchableText.includes(term));
  });
};

export const getCategories = (): string[] => {
  return [...new Set(allCourses.map(course => course.category))];
};

export const getSubCategories = (category?: string): string[] => {
  const courses = category ? getCoursesByCategory(category) : allCourses;
  return [...new Set(courses.map(course => course.subCategory))];
};

export { automationCourses, itCourses, designingCourses };
export type { Course } from './types';
