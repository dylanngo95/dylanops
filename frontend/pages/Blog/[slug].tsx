import PageLayout from "../../components/Page/PageLayout"
import { getFiles, getFileBySlug } from "../../utils/MDXUtils"
import { MDXRemote } from "next-mdx-remote"
import BlogPage from "../../components/Blog/BlogPage"

export default function Page({ data, source }) {
  return (
    <BlogPage meta={data}>
      <MDXRemote {...source} />
    </BlogPage>
  )
}

export async function getStaticProps({ params }) {
  const post = await getFileBySlug("blog", params.slug)
  return { props: { ...post } }
}

export async function getStaticPaths() {
  const blogs = await getFiles("blog")

  return {
    paths: blogs.map((b) => ({
      params: {
        slug: b.replace(/\.mdx/, ""),
      },
    })),
    fallback: false,
  }
}
