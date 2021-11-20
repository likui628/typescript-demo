export interface User {
  id: number;
  admin: boolean;
}

export interface DB {
  users: User[];
  filterUsers(filter: (this: User) => boolean): User[];
}
