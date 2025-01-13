import { Link, NavbarContent, NavbarItem } from '@nextui-org/react';
import React from 'react';

import { MenuItem } from './items';

export function Menu({ menuItems }: { menuItems: MenuItem[] }) {
  return (
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
  );
}
