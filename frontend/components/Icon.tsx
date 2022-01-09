// const Icon = ({ name }) => <span className={`icon icon_margin`}>{name}</span>
import { ButtonSize } from "../components/Button"
import BlogIcon from "../public/assets/icons/blog.svg"
import BrightnessIcon from "../public/assets/icons/brightness.svg"
import GithubIcon from "../public/assets/icons/github.svg"
import LinkedinIcon from "../public/assets/icons/linkedin.svg"
import PhotosIcon from "../public/assets/icons/photos.svg"
import ProjectsIcon from "../public/assets/icons/projects.svg"
import EmailIcon from "../public/assets/icons/email.svg"
import MuseumIcon from "../public/assets/icons/museum2.svg"
import NextIcon from "../public/assets/icons/next.svg"
import PrevIcon from "../public/assets/icons/prev.svg"
import ArtIcon from "../public/assets/icons/art.svg"
import LinkIcon from "../public/assets/icons/link.svg"

export type IconName =
  "blog"
  | "photos"
  | "projects"
  | "linkedin"
  | "github"
  | "brightness"
  | "email"
  | "museum"
  | "next"
  | "prev"
  | "art"
  | "link"

interface IconProps {
  name: IconName
  size?: ButtonSize
}

const iconSizeStyles = (size: ButtonSize) => {
  switch (size) {
    case (ButtonSize.ExtraSmall):
      return "icon icon_margin icon_ExtraSmall"
    case (ButtonSize.Small):
      return "icon icon_margin icon_Small"
    case (ButtonSize.Medium):
      return "icon icon_margin icon_Medium"
    case (ButtonSize.Large):
      return "icon icon_margin icon_Large"
    default:
      return "icon icon_margin"
  }
}

const IconMapper = ({ name, size }: IconProps) =>
({
  blog: (<BlogIcon width={size} height={size} className={iconSizeStyles(size)} />),
  photos: (
    <PhotosIcon width={size} height={size} className={iconSizeStyles(size)} />
  ),
  projects: (
    <ProjectsIcon width={size} height={size} className={iconSizeStyles(size)} />
  ),
  linkedin: (
    <LinkedinIcon width={size} height={size} className={iconSizeStyles(size)} />
  ),
  github: (
    <GithubIcon width={size} height={size} className={iconSizeStyles(size)} />
  ),
  brightness: (
    <BrightnessIcon width={size} height={size} className={iconSizeStyles(size)} />
  ),
  email: (
    <EmailIcon width={size} height={size} className={iconSizeStyles(size)} />
  ),
  museum: (
    <MuseumIcon width={size} height={size} className={iconSizeStyles(size)} />
  ),
  next: (
    <NextIcon width={size} height={size} className={iconSizeStyles(size)} />
  ),
  prev: (
    <PrevIcon width={size} height={size} className={iconSizeStyles(size)} />
  ),
  art: (
    <ArtIcon width={size} height={size} className={iconSizeStyles(size)} />
  ),
  link: (
    <LinkIcon width={size} height={size} className={iconSizeStyles(size)} />
  ),
}[name])

const Icon = ({ name, size = ButtonSize.Small }: IconProps) => (
  <>{IconMapper({ name, size })}</>
)

export default Icon
