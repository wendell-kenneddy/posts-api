interface Comment {
  id: string;
  content: string;
  userId: string;
  postId: string;
}

export interface CreateCommentData {
  content: string;
  userId: string;
  postId: string;
}

export interface CommentsRepository {
  create: (data: CreateCommentData) => Promise<void>;

  delete: (id: string) => Promise<void>;

  getComments: () => Promise<Comment[]>;

  getCommentById: (id: string) => Promise<Comment | null>;

  getCommentsByUserAndPost: (
    userId: string,
    postId: string
  ) => Promise<Comment[]>;

  getCommentsByUser: (userId: string) => Promise<Comment[]>;

  getCommentsByPost: (postId: string) => Promise<Comment[]>;
}
