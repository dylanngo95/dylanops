import Head from "next/head"
import { siteMetaAuthor, siteMetaKeywords, siteMetaTitle, siteMetaDescription, MAIN_URL } from "../config"

export default function Layout({ children }) {
  return (
    <div className="pageLayout">
      <Head>
        <meta property="og:title" content={siteMetaTitle} />
        <meta name="keywords" content={siteMetaKeywords} />
        <meta name="description" content={siteMetaDescription}></meta>
        <meta property="og:description" content={siteMetaDescription} key="ogdesc"></meta>
        <meta property="og:type" content="website" />
        <meta property="og:url" content={MAIN_URL} />
        <meta property="og:image" content={`${MAIN_URL}/static/logo/logo.png`} />
        <meta name="author" content={siteMetaAuthor}></meta>
      </Head>
      <main>{children}</main>
    </div>
  )
}
