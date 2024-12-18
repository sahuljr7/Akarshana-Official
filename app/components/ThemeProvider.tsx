'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'

// Define the type explicitly using React.ComponentProps
type ThemeProviderProps = React.ComponentProps<typeof NextThemesProvider>

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
