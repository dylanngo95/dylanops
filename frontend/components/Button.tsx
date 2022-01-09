import { forwardRef } from "react"
import Icon, { IconName } from "./Icon"

export enum ButtonSize {
  ExtraSmall = 15,
  Small = 30,
  Medium = 40,
  Large = 50,
}

const buttonSizeStyles = (size: ButtonSize) => {
  switch (size) {
    case (ButtonSize.ExtraSmall):
      return "btn btn-primary bts-sm"
    case (ButtonSize.Small):
      return "btn btn-primary btn-sm"
    case (ButtonSize.Medium):
      return "btn btn-primary btn-md"
    case (ButtonSize.Large):
      return "btn btn-primary btn-lg"
    default:
      return "btn btn-primary btn-sm"
  }
}

interface ButtonProps {
  children?: any
  onClick?: any
  icon?: IconName
  label?: string
  fullWidth?: boolean
  href?: string
  rel?: any
  target?: any
  size?: ButtonSize
  dark?: boolean
  // [rest: string]: any
  // rest
}


const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      onClick,
      icon,
      label,
      fullWidth = false,
      href = null,
      rel = null,
      target = null,
      size = ButtonSize.Small,
      dark = false,
      ...rest
    },
    ref: any,
  ) => {
    let parsedStyles = buttonSizeStyles(size)
    if (fullWidth) {
      parsedStyles += " w-full"
    }
    return (
      <button onClick={onClick} {...rest} className={parsedStyles} ref={ref}>
        {icon && <Icon name={icon} />}
        {(label || children) && <span className="button_span">{label ? label : children}</span>}
      </button>
    )
  },
)

export default Button
