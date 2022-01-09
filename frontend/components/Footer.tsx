import { useContext } from "react"
import { Theme } from "../config"
import { ThemeContext } from "../context/ThemeContext"
import Button, { ButtonSize } from "./Button"

const Footer = () => {
  const { theme, setTheme } = useContext(ThemeContext)
  const DarkModeToggleComponent = (fullWidth = false) => (
    <Button
      icon="brightness"
      onClick={() => setTheme(theme === Theme.Dark ? Theme.Light : Theme.Dark)}
      fullWidth={fullWidth}
      label="dark mode"
      size={ButtonSize.Medium}
    />
  )
  return (
    <footer>
      {DarkModeToggleComponent()}
      <div className="all_rights">
        <span>© Copyright 2021</span>
      </div>
    </footer>
  )
}

export default Footer
