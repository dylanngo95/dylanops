import Link from "next/link"
import Icon, { IconName } from "./Icon"
import { ButtonSize } from "../components/Button"

interface LinkItemProps {
    icon?: IconName
    local?: boolean
    iconSize?: ButtonSize
    href: string
    label: string
    rel?: string
    target?: string
    prefetch?: boolean
    selected?: boolean
}

const LinkItem = ({ label, href, icon, iconSize, rel, target, prefetch = true, selected = false }: LinkItemProps) => (
    <Link href={href} prefetch={prefetch}>
        <a className={`navbar_link ${selected ? "navbar_link_selected" : ""}`} rel={rel} target={target}>
            {icon && <Icon name={icon} size={iconSize} />}
            {label}
        </a>
    </Link>
)

export default LinkItem