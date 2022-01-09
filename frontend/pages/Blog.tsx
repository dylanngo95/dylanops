import PageLayout from "../components/Page/PageLayout"
import { getAllFilesAndParseMatter } from "../utils/MDXUtils"
import Link from "next/link"

export default function Blog({ posts }) {
  return (
    <PageLayout pageTitle={"blog"}>
      <div className="blogPosts">
        <div className="empty">
          When I have something worth sharing, you'll find it here.
        </div>

        {/* {posts.map((post, i) => (
          <Link
            href={`/Blog/${post.slug}`}
            key={`/Blog/${post.slug}-${i}`}
            replace
          >
            <a className="blogPost">
              <div>{post.title}</div>
              <div>{post.summary}</div>
            </a>
          </Link>
        ))} */}
      </div>
    </PageLayout>
  )
}


// import PageLayout from "../components/Page/PageLayout"
// import { getAllFilesAndParseMatter } from "../utils/MDXUtils"
// import Link from "next/link"

// export default function Blog({ posts }) {
//   return (
//     <PageLayout pageTitle={"Blog"}>
//       <div className="blogPosts">
//         {posts.map((post, i) => (
//           <Link
//             href={`/Blog/${post.slug}`}
//             key={`/Blog/${post.slug}-${i}`}
//             replace
//           >
//             <a className="blogPost">
//               <div>{post.title}</div>
//               <div>{post.summary}</div>
//             </a>
//           </Link>
//         ))}
//       </div>
//     </PageLayout>
//   )
// }

// export async function getStaticProps() {
//   const posts = await getAllFilesAndParseMatter("blog")

//   return { props: { posts } }
// }
