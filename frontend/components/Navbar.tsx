import React from "react"
import Logo from "../components/Logo"
import { ButtonSize } from "../components/Button"
import { IconName } from "./Icon"
import { useRouter } from 'next/router'
import NavItem from "./NavItem"

const navItems = [
  {
    label: "Blog",
    href: "/Blog",
    icon: "blog" as IconName,
    prefetch: false
  },
  {
    label: "Projects",
    href: "/Projects",
    icon: "projects" as IconName,
    prefetch: true
  },
  {
    label: "Photos",
    href: "/Photos",
    icon: "photos" as IconName,
    prefetch: true
  },
  {
    label: "Art",
    href: "/Art",
    icon: "art" as IconName,
    prefetch: true
  },
]

const Navbar = () => {
  const router = useRouter()
  console.log(router)
  return (
    <div>
      <div className="navbar_logo">
        <Logo />
      </div>
      <header>
        <div className="navbar_items">
          {navItems.map(({ label, icon, href, prefetch }, i) => (
            <NavItem
              key={label}
              icon={icon}
              label={label}
              href={href}
              selected={href === router.pathname || router.pathname.includes(href)}
              prefetch={prefetch}
              children={null}
              iconSize={ButtonSize.Small}
            />
          ))}
        </div>
      </header>
    </div>
  )
}

export default Navbar
