export interface Project {
  id: number;
  slug: string;
  title: string;
  year: string | number;
  categories: string[];
  description: string;
  featuredImage: string;
  images: string[];
}