import React from "react"
import { Theme } from "../config"

const defaultTheme = Theme.Light

interface ThemeContextType {
  theme: Theme
  setTheme: (Theme: Theme) => void
}

const ThemeContext = React.createContext<ThemeContextType>({
  theme: defaultTheme,
  setTheme: (theme) => console.warn("no theme provider"),
})

const getInitialTheme = (): Theme => {
  if (typeof window !== "undefined" && window.localStorage) {
    const storedPrefs = window.localStorage.getItem("color-theme")
    if (typeof storedPrefs === "string") {
      return Theme[storedPrefs]
    }

    //if we wanted to detect user's system themes, (macos theme), ios (theme), we would enable the following check
    // const userMedia = window.matchMedia("(prefers-color-scheme: dark)")
    // if (userMedia.matches) {
    //   return Theme.Dark
    // }
  }
  // return DEFAULT theme
  return defaultTheme
}

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = React.useState<Theme>(getInitialTheme)
  const [mounted, setMounted] = React.useState(false)
  const handleTheme = (rawTheme: Theme, window) => {
    const root = window.document.documentElement
    const isDark = rawTheme === Theme.Dark
    root.classList.remove(isDark ? Theme.Light : Theme.Dark)
    root.classList.add(rawTheme)
    localStorage.setItem("color-theme", rawTheme)
    setMounted(true)
  }
  // if (initialTheme) {
  //   handleTheme(initialTheme, window)
  // }
  React.useEffect(() => {
    handleTheme(theme, window)
  }, [theme])

  //only render once theme has been "handled", otherwise we will get client server mismatches
  return mounted ? (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  ) : null
}

export { ThemeContext, ThemeProvider }
