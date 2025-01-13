import {
  Avatar,
  Button,
  Form,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  NavbarContent,
  NavbarItem,
  useDisclosure,
} from '@nextui-org/react';
import { signIn } from 'next-auth/react';
import React from 'react';
import { FcGoogle } from 'react-icons/fc';

import { ThemeSwitcher } from './ThemeSwitcher';

import { User } from '@/models/user';

export function Profile({ user }: { user: User | null }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <NavbarContent justify="end">
      <NavbarItem>
        {user ? (
          <Button>
            <Avatar />
          </Button>
        ) : (
          <>
            <Button onPress={onOpen}>Sign in</Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className="flex flex-col gap-1">Sign in</ModalHeader>
                    <ModalBody>
                      <Form action={() => signIn('google') as Promise<void>}>
                        <Button type="submit">
                          <FcGoogle />
                        </Button>
                      </Form>
                    </ModalBody>
                    <ModalFooter>
                      <Button color="danger" variant="flat" onPress={onClose}>
                        Close
                      </Button>
                    </ModalFooter>
                  </>
                )}
              </ModalContent>
            </Modal>
          </>
        )}
      </NavbarItem>

      <NavbarItem>
        <ThemeSwitcher />
      </NavbarItem>
    </NavbarContent>
  );
}
