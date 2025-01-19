import { User } from '@prisma/client';
import { kebabCase } from 'change-case';

import { Role } from '@/lib/auth';

interface MenuItemBefore {
  name: string;
  auth: Role | false;
  color?: 'danger' | 'primary' | 'foreground' | 'secondary' | 'success' | 'warning';
}

export interface MenuItem extends MenuItemBefore {
  isActive: boolean;
  pathname: string;
}

const menuItems: MenuItemBefore[] = [
  { name: 'Blog', auth: false },
  { name: 'Manga', auth: Role.Member },
  { name: 'PH', auth: Role.Admin },
  { name: 'Log Out', auth: Role.User, color: 'danger' },
];

export function calculateItems(user: User | undefined, pathname: string): MenuItem[] {
  return menuItems
    .map((item) => {
      const itemPathname = `/${kebabCase(item.name)}`;
      const isActive = pathname.startsWith(itemPathname);
      const color = item.color ?? (isActive ? 'primary' : 'foreground');

      return {
        ...item,
        color,
        isActive,
        pathname: itemPathname,
      };
    })
    .filter(({ auth }) => !auth || (user && user.role >= auth));
}
