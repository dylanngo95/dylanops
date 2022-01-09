import Code from "./Code"
import Paragraph from "./Paragraph"
const MDX = {
  p: Paragraph,
  //   code: (props) => <pre style={{ color: "tomato" }} {...props} />,
  code: Code,
  //   inlineCode: Code,
}

export default MDX
