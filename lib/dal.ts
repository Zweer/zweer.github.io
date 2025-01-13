import 'server-only';

import { cookies } from 'next/headers';
import { cache } from 'react';

import { decrypt } from '@/lib/session';
import { Role, User } from '@/models/user';

interface Session {
  userId: string;
}

export const verifySession = cache(async (): Promise<Session | null> => {
  const cookie = (await cookies()).get('session')?.value;
  if (!cookie) {
    return null;
  }

  const session = await decrypt(cookie);

  if (!session?.userId) {
    return null;
  }

  return { userId: session.userId as string };
});

export const getUser = cache(async (): Promise<User | null> => {
  const session = await verifySession();
  if (!session) {
    return null;
  }

  return { id: session.userId, role: Role.Admin };
});
