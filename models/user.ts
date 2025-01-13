import { User as AuthUser } from 'next-auth';

export enum Role {
  User = 1,
  Member = 2,
  Admin = 10,
}

export interface User extends AuthUser {
  role: Role;
}
