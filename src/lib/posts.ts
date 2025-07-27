
import postsData from '@/data/posts.json';

export type Post = {
    slug: string;
    title: string;
    description: string;
    date: string;
    content: string;
  };
  
  export const posts: Post[] = postsData;
  
