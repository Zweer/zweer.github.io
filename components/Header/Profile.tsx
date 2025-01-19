import { NavbarContent, NavbarItem } from '@nextui-org/react';
import React from 'react';

import { ThemeSwitcher } from './ThemeSwitcher';
import { Login } from './Login';
import { Logout } from './Logout';

import { User } from '@/models/user';

export function Profile({ user }: { user: User | undefined }) {
  return (
    <NavbarContent justify="end">
      <NavbarItem>{user ? <Logout user={user} /> : <Login />}</NavbarItem>

      <NavbarItem>
        <ThemeSwitcher />
      </NavbarItem>
    </NavbarContent>
  );
}
