'use client'

import { ThemeImpl } from "./theme-option"

export const theme = () => {
  return (
    <ThemeImpl
      hasBackground="true" 
      appearance="dark" 
      accentColor="indigo" 
      grayColor="auto" 
      panelBackground="translucent" 
      radius="medium" 
      scaling="100%"
    >
      Themed content here
    </ThemeImpl>
  )
}