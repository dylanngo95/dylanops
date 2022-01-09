import "../styles/main.sass"
import Router, { useRouter } from "next/router"
import NProgress from "nprogress"
import React from "react"
import { ThemeProvider } from "../context/ThemeContext"
import MDXStyledComponents from "../components/MDX"
import { MDXProvider } from "@mdx-js/react"
import Layout from "../components/Layout"
import Button from "../components/Button"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Script from 'next/script'
import { GTAG } from "../config"
const GTAG_PROD = process.env.GTAG_PROD
const GTAG_IN_USE = GTAG_PROD ? GTAG_PROD : GTAG

const handleRouteChange = () => NProgress.start()
const handleRouteComplete = () => NProgress.done()

Router.events.on("routeChangeStart", handleRouteChange)
Router.events.on("routeChangeComplete", handleRouteComplete)
Router.events.on("routeChangeError", handleRouteComplete)

const customComponentsWithMdx = {
  Layout,
  Button,
}

function App({ Component, pageProps }) {
  const router = useRouter()
  const isIndex = router.pathname === "/"
  const flexGrowComponent = isIndex ? "" : "flex-grow-component"
  return (
    <ThemeProvider>
      <MDXProvider
        components={{ ...MDXStyledComponents, ...customComponentsWithMdx }}
      >
        <div className="app">
          <Navbar />
          <div className={`component ${flexGrowComponent}`}>
            <Script
              strategy="lazyOnload"
              src={`https://www.googletagmanager.com/gtag/js?id=${GTAG_IN_USE}`}
            />

            <Script strategy="lazyOnload">
              {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GTAG_IN_USE}');
        `}
            </Script>

            <Component {...pageProps} />
          </div>
          <Footer />
        </div>
      </MDXProvider>
    </ThemeProvider>
  )
}

export default App
