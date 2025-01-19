'use client';

import { VisuallyHidden, useSwitch } from '@heroui/react';
import { useTheme } from 'next-themes';
import React, { ChangeEvent } from 'react';
import { CiDark, CiLight } from 'react-icons/ci';

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = (
    event?: ChangeEvent<HTMLInputElement> | React.MouseEvent | React.KeyboardEvent,
  ) => {
    event?.preventDefault();
    event?.stopPropagation();

    const newTheme = theme === 'light' ? 'dark' : 'light';

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
          {isSelected ? <CiLight /> : <CiDark />}
        </div>
      </Component>
    </div>
  );
}
