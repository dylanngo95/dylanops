import Highlight, { defaultProps } from "prism-react-renderer"
import github from "prism-react-renderer/themes/github"
import vsDark from "prism-react-renderer/themes/vsDark"
import React from "react"
import { Theme } from "../../config"
import { ThemeContext } from "../../context/ThemeContext"

const Code = ({ children, className }) => {
  const language = className.replace(/language-/, "")
  const { theme } = React.useContext(ThemeContext)

  return (
    <Highlight
      {...defaultProps}
      theme={theme === Theme.Light ? github : vsDark}
      code={children.trim()}
      language={language}
    >
      {({ className, tokens, getLineProps, getTokenProps }) => (
        <pre className={`${className} code`}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}

export default Code
