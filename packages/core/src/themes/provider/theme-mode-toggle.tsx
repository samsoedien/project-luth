'use client'

import { useTheme } from 'next-themes'

import { MoonIcon, SunIcon } from '@project-luth/icons'

import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../../components'

export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <SunIcon className="luth-h-[1.2rem] luth-w-[1.2rem] luth-rotate-0 luth-scale-100 luth-transition-all dark:-luth-rotate-90 dark:luth-scale-0" />
          <MoonIcon className="luth-absolute luth-h-[1.2rem] luth-w-[1.2rem] luth-rotate-90 luth-scale-0 luth-transition-all dark:luth-rotate-0 dark:luth-scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme('light')}>Light</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>Dark</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>System</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
