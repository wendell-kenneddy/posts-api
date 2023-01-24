export interface UserCreateData {
  name: string;
  email: string;
}

interface User {
  id: string;
  name: string;
  email: string;
}

export interface UsersRepository {
  create: (data: UserCreateData) => Promise<void>;

  delete: (id: string) => Promise<void>;

  getUserById: (id: string) => Promise<User | null>;

  getUsers: () => Promise<User[]>;
}
