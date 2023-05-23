'use client'

import React from 'react'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'

export function ToggleModeButton() {
  const { systemTheme, theme, setTheme } = useTheme()
  // eslint-disable-next-line
  const currentTheme = theme === 'system' ? systemTheme : theme

  return (
    <button
      onClick={() => (theme === 'dark' ? setTheme('light') : setTheme('dark'))}
      className="border-none text-2xl text-black transition-all duration-100 hover:text-zinc-600 dark:text-zinc-50 dark:hover:text-zinc-300 md:text-4xl"
    >
      {theme === 'dark' ? <Moon /> : <Sun />}
    </button>
  )
}
