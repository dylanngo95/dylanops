import { ButtonSize } from "../components/Button"
import { IconName } from "./Icon"
import LinkItem from "./LinkItem"

interface NavItemProps {
  children?: any
  icon?: IconName
  iconSize?: ButtonSize
  href?: string
  label?: string
  fullWidth?: boolean
  rel?: string
  target?: string
  prefetch?: boolean
  selected?: boolean
}

const NavItem = ({
  children,
  icon,
  iconSize,
  href,
  label,
  fullWidth = false,
  rel,
  target,
  prefetch = true,
  selected = false
}: NavItemProps) => (
  <nav className={fullWidth ? "navbar_item w-full" : "navbar_item"}>
    <LinkItem label={label} href={href} icon={icon} iconSize={iconSize} rel={rel} target={target} prefetch={prefetch} selected={selected} />
    {children}
  </nav>
)

export default NavItem
