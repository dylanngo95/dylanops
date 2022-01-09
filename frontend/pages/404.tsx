import Layout from "../components/Layout"

export default function Custom404() {
  return (
    <Layout>
      <div className="error">
        <h1>404</h1>
        <h5 className="gray">Sorry, this page doesn't exist</h5>
      </div>
    </Layout>
  )
}
