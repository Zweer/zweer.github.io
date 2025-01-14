import {
  Avatar,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/react';
import React from 'react';

import { signOut } from '@/lib/auth';
import { User } from '@/models/user';

export function Logout({ user }: { user: User }) {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Avatar name={user.name!} src={user.image!} />
      </DropdownTrigger>
      <DropdownMenu aria-label="Dynamic Actions">
        <DropdownItem key="logout">
          <Button onPress={() => signOut() as unknown as void}>Log out</Button>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
