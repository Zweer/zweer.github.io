import 'server-only';

import { cookies } from 'next/headers';
import { cache } from 'react';

import { decrypt } from '@/lib/session';

export const verifySession = cache(async () => {
  const cookie = (await cookies()).get('session')?.value;
  if (!cookie) {
    return null;
  }

  const session = await decrypt(cookie);

  if (!session?.userId) {
    return null;
  }

  return { isAuth: true, userId: session.userId as number };
});

export const getUser = cache(async () => {
  const session = await verifySession();
  if (!session) {
    return null;
  }

  return { id: session.userId, role: 'admin' };
});
