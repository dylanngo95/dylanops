import { ButtonSize } from "../components/Button"
import { IconName } from "./Icon"
import LinkItem from './LinkItem'

interface ProjectSummaryProps {
    children?: any
    icon: IconName
    href: string
    label: string
    iconLabel: string
    description: string
    fullWidth?: boolean
    local: boolean
    rel?: string
    target?: string
}

const ProjectSummary = ({
    children,
    icon,
    href,
    label,
    iconLabel,
    description,
    fullWidth = false,
    local,
    rel,
    target,
}: ProjectSummaryProps) => (
    <div className={fullWidth ? "project_item w-full" : "project_item"}>
        <div className="project_description">
            <div className="project_name">
                {label}
            </div>
            <div>
                {description}
            </div>
        </div>
        <div className="project_item_links_container">
            <LinkItem label={iconLabel} href={href} local={local} icon={icon} rel={rel} target={target} iconSize={ButtonSize.Small} />
        </div>

        {children}
    </div>
)

export default ProjectSummary
