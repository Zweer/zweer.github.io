'use-client';

import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@heroui/react';
import { signIn } from 'next-auth/react';
import React from 'react';
import { IconType } from 'react-icons';
import { FcGoogle } from 'react-icons/fc';

export function Login() {
  const providers: { name: string; icon: IconType }[] = [{ name: 'google', icon: FcGoogle }];

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button>Sign in</Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Dynamic Actions" items={providers}>
        {(provider) => (
          <DropdownItem key={provider.name}>
            <Button
              isIconOnly
              aria-label={provider.name}
              onPress={() => signIn(provider.name) as unknown as void}
            >
              <provider.icon />
            </Button>
          </DropdownItem>
        )}
      </DropdownMenu>
    </Dropdown>
  );
}
