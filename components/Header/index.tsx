'use client';

import { Navbar } from '@heroui/react';
import { User } from '@prisma/client';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

import { Home } from './Home';
import { Menu } from './Menu';
import { MenuBar } from './MenuBar';
import { calculateItems } from './items';
import { Profile } from './Profile';

export function Header({ user }: { user: User | undefined }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = calculateItems(user, pathname);

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <Home isMenuOpen={isMenuOpen} />
      <Menu menuItems={menuItems} />
      <Profile user={user} />
      <MenuBar menuItems={menuItems} />
    </Navbar>
  );
}
