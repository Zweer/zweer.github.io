// app/components/ThemeSwitcher.tsx
'use client';

import { VisuallyHidden, useSwitch } from '@nextui-org/react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import React, { ChangeEvent, useEffect, useState } from 'react';

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = (
    event?: ChangeEvent<HTMLInputElement> | React.MouseEvent | React.KeyboardEvent,
  ) => {
    event?.preventDefault();
    event?.stopPropagation();

    console.log(theme);
    const newTheme = theme === 'light' ? 'dark' : 'light';
    console.log(newTheme);

    setTheme(newTheme);
  };

  const { Component, slots, isSelected, getBaseProps, getInputProps, getWrapperProps } = useSwitch({
    isSelected: theme === 'light',
    'aria-label': `Switch to ${theme === 'light' ? 'dark' : 'light'} mode`,
    onChange: handleThemeChange as (event: ChangeEvent<HTMLInputElement>) => void,
  });

  return (
    <div className="flex items-center gap-4">
      <Component {...getBaseProps()}>
        <VisuallyHidden>
          <input {...getInputProps()} />
        </VisuallyHidden>
        <div
          {...getWrapperProps()}
          className={slots.wrapper({
            class: [
              'w-8 h-8',
              'flex items-center justify-center',
              'rounded-lg bg-default-100 hover:bg-default-200',
            ],
          })}
        >
          {isSelected ? <Sun /> : <Moon />}
        </div>
      </Component>
    </div>
  );
}
