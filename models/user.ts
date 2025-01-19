import type { User as NextAuthUser } from 'next-auth';

export enum Role {
  User = 1,
  Member = 2,
  Admin = 10,
}

export interface User extends NextAuthUser {
  role: Role;
}
