const { createSecureHeaders } = require("next-secure-headers")

module.exports = {
  pageExtensions: ["mdx", "tsx", "ts"],
  compress: true,
  env: {
    GTAG_PROD: process.env.NEXT_PUBLIC_GTAG_PRODUCTION,
  },
  async headers() {
    return [{ source: "/(.*)", headers: createSecureHeaders() }]
  },
  // cssLoaderOptions: { url: false },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: { and: [/\.(js|ts)x?$/] },
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            svgo: false,
            //to disable svg className prepend with unique value
          },
        },
      ],
    })

    return config
  },
  images: {
    domains: [],
  },
  async redirects() {
    return [
      {
        source: "/ptrdemo",
        destination: "https://github.com/parbhatia/ptr-app-demo",
        permanent: true,
      },
      {
        source: "/gospace",
        destination: "https://github.com/parbhatia/gospace",
        permanent: true,
      },
      {
        source: "/kix",
        destination: "/Projects/KIX",
        permanent: true,
      },
      {
        source: "/KIX",
        destination: "/Projects/KIX",
        permanent: true,
      },
    ]
  },
}
