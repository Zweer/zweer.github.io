import { Button, NavbarContent, NavbarItem } from '@nextui-org/react';
import React from 'react';

import { ThemeSwitcher } from './ThemeSwitcher';
import { Login } from './Login';
import { Logout } from './Logout';

import { User } from '@/models/user';

export function Profile({ user }: { user: User | null }) {
  return (
    <NavbarContent justify="end">
      <NavbarItem>
        {user ? (
          <Button>
            <Logout user={user} />
          </Button>
        ) : (
          <Login />
        )}
      </NavbarItem>

      <NavbarItem>
        <ThemeSwitcher />
      </NavbarItem>
    </NavbarContent>
  );
}
