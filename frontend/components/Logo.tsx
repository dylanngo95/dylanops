import HeaderLogo from "../public/assets/logo/logo.svg"
import Link from "next/link"

const Logo = () => {
  return (
    <Link href={"/"} replace>
      <a>
        <div id="svg_container">
          <HeaderLogo width={120} height={120} />
        </div>
      </a>
    </Link>
  )
}

export default Logo
