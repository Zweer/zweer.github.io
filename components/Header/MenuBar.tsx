import { Link, NavbarMenu, NavbarMenuItem } from '@heroui/react';
import React from 'react';

import { MenuItem } from './items';

export function MenuBar({ menuItems }: { menuItems: MenuItem[] }) {
  return (
    <NavbarMenu>
      {menuItems.map((item) => (
        <NavbarMenuItem key={item.name}>
          <Link className="w-full" color={item.color} href="#" size="lg">
            {item.name}
          </Link>
        </NavbarMenuItem>
      ))}
    </NavbarMenu>
  );
}
