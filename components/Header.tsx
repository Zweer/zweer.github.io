'use client';

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from '@nextui-org/react';
import { kebabCase } from 'change-case';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

import { ThemeSwitcher } from './ThemeSwitcher';

import { logo } from '@/app/images';

export function Header({ user }: { user: { id: number; role: string } | null }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { name: 'Blog', auth: false },
    { name: 'Manga', auth: true },
    { name: 'PH', auth: true },
    { name: 'Log Out', auth: true, color: 'danger' },
  ]
    .map((item) => {
      const itemPathname = `/${kebabCase(item.name)}`;
      const isActive = pathname.startsWith(itemPathname);
      const color = (item.color ?? isActive) ? 'primary' : 'foreground';

      return {
        ...item,
        color: color as
          | 'danger'
          | 'primary'
          | 'foreground'
          | 'secondary'
          | 'success'
          | 'warning'
          | undefined,
        isActive,
        pathname: itemPathname,
      };
    })
    .filter(({ auth }) => user || !auth);

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
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

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item) => (
          <NavbarItem key={item.name} isActive={item.isActive}>
            <Link
              aria-current={item.isActive ? 'page' : false}
              color="foreground"
              href={item.pathname}
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item) => (
          <NavbarMenuItem key={item.name}>
            <Link className="w-full" color={item.color} href="#" size="lg">
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
