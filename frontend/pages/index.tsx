import Head from "next/head"
import { ButtonSize } from "../components/Button"
import { IconName } from "../components/Icon"
import Layout from "../components/Layout"
import NavItem from "../components/NavItem"
import { EMAIL_URL, GITHUB_URL, LINKEDIN_URL, siteTitle } from "../config"


const contactLinks = [
  {
    href: `mailto:${EMAIL_URL}`,
    label: "Email",
    icon: "email" as IconName,
    local: false,
  },
  {
    href: GITHUB_URL,
    label: "Github",
    icon: "github" as IconName,
    local: false,
  },
  {
    href: LINKEDIN_URL,
    label: "LinkedIn",
    icon: "linkedin" as IconName,
    local: false,
  },
]

export default function index() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="home textCenter">
        <div>
          <p className="intro_line">
            hello, i'm par!
          </p>
          <p className="occupation">
            i'm a software engineer at
            <NavItem
              href="https://www.soundhound.com/about"
              label="SoundHound"
              iconSize={ButtonSize.Small}
              rel="noopener noreferrer"
              target="_blank"
            />
          </p>
          <p>
            this space on the web shares projects i create, <br />
            photography, art, and things i'm passionate about.
          </p>
        </div>
        <div className="home_links">
          {contactLinks.map(({ href, label, icon }, i) => (
            <NavItem
              key={`footeritem-${i}`}
              href={href}
              label={label}
              icon={icon}
              iconSize={ButtonSize.Small}
              rel="noopener noreferrer"
              target="_blank"
            />
          ))}
        </div>
      </div>
    </Layout>
  )
}
