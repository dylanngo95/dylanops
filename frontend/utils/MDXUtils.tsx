import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { serialize } from "next-mdx-remote/serialize"

//Copied and modified from https://github.com/leerob/leerob.io/blob/main/lib/mdx.js

const root = process.cwd()

export async function getFiles(type) {
  return fs.readdirSync(path.join(root, "data", type))
}

//If slug is given, use it as file name, otherwise use type as fileName
export async function getFileBySlug(type, slug) {
  const source = slug
    ? fs.readFileSync(path.join(root, "data", type, `${slug}.mdx`), "utf8")
    : fs.readFileSync(path.join(root, "data", `${type}.mdx`), "utf8")

  const { data, content } = matter(source)
  const mdxSource = await serialize(content)

  return {
    data,
    source: mdxSource,
  }
}

export async function getAllFilesAndParseMatter(type) {
  const files = fs.readdirSync(path.join(root, "data", type))

  return files.reduce((allPosts, postSlug) => {
    const source = fs.readFileSync(
      path.join(root, "data", type, postSlug),
      "utf8",
    )
    const { data } = matter(source)

    return [
      {
        ...data,
        slug: postSlug.replace(".mdx", ""),
      },
      ...allPosts,
    ]
  }, [])
}
