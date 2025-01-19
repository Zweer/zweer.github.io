import { Avatar, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Link } from '@heroui/react';
import { User } from '@prisma/client';
import { signOut } from 'next-auth/react';
import React from 'react';

export function Logout({ user }: { user: User }) {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Avatar name={user.name!} src={user.image!} />
      </DropdownTrigger>
      <DropdownMenu aria-label="Dynamic Actions">
        <DropdownItem key="logout">
          <Link onPress={() => signOut() as unknown as void}>Log out</Link>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
