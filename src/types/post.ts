export interface Post {
  ID: string;
  modified: string;
  content: string;
  title: string;
  excerpt: string;
  featured_image: string;
  author: {
    name: string;
    avatar_URL: string;
  };
}
