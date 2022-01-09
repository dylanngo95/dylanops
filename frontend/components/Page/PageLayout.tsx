import Head from "next/head"
import Layout from "../Layout"
import { siteTitle } from "../../config"
import PageHeader from "./PageHeader"

export default function PageLayout({ pageTitle, description = "", children }) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="Description" content={description}></meta>
        <title>
          {siteTitle} - {pageTitle}
        </title>
      </Head>
      {/* <PageHeader title={pageTitle} /> */}
      <div>{children}</div>
    </Layout>
  )
}
