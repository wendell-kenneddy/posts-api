import { Post } from '@prisma/client';

export interface PostCreateData {
  authorId: string;
  title: string;
  content: string;
}

export interface PostsRepository {
  create: (data: PostCreateData) => Promise<void>;

  delete: (id: string) => Promise<void>;

  getPosts: () => Promise<Post[]>;

  getPostById: (id: string) => Promise<Post | null>;

  getPostsByAuthor: (authorId: string) => Promise<Post[]>;

  getPostsByTitle: (title: string) => Promise<Post[]>;
}
