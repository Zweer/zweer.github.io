import { Link, NavbarBrand, NavbarContent, NavbarMenuToggle } from '@heroui/react';
import Image from 'next/image';
import React from 'react';

import { logo } from '@/app/images';

export function Home({ isMenuOpen }: { isMenuOpen: boolean }) {
  return (
    <NavbarContent>
      <NavbarMenuToggle
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        className="sm:hidden"
      />
      <NavbarBrand>
        <Link color="foreground" href="/">
          <Image src={logo} width={36} height={36} alt="Zweer" />
        </Link>
      </NavbarBrand>
    </NavbarContent>
  );
}
