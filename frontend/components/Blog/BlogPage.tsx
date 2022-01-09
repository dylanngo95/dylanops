import Layout from "../Layout"
import Head from "next/head"
import BlogHeader from "./BlogHeader"

export default function BlogPost({ children, meta: { description, title } }) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="Description" content={description}></meta>
        <title>{title}</title>
      </Head>
      <article>
        <BlogHeader title={title} description={description} />
        <div>{children}</div>
      </article>
    </Layout>
  )
}
