const title = `Hozon | Maximize Your Online Presence with Our Expert Digital Marketing Services`;
const description = `Transform your business with our comprehensive digital marketing solutions. From SEO and PPC to social media management and content marketing, Hozon helps you reach your target audience and achieve your business goals.`;

export default {
  themeColor: "#845aff",
  title: title,
  description: description,

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.hozon.io/",
    siteName: "Hozon",
    title: title,
    description: description,
    // images: [
    //   {
    //     url: "https://www.atalaso.com/social/hozon-share-preview.jpg",
    //     width: 1024,
    //     height: 630,
    //     alt: "Hozon",
    //   },
    // ],
  },
  // twitter: {
  //   handle: '@hozon_ofc',
  //   site: '@hozon_ofc',
  //   creator: '@hozon_ofc',
  //   cardType: 'summary_large_image',
  // },
  additionalLinkTags: [
    {
      rel: "preconnect",
      href: "https://www.googletagmanager.com",
    },
    {
      rel: "preconnect",
      href: "https://www.google-analytics.com",
    },
    {
      httpEquiv: "x-ua-compatible",
      content: "IE=edge; chrome=1",
    },
    {
      rel: "icon",
      type: "image/png",
      href: "/favicon.ico",
      sizes: "16x16",
    },
    {
      rel: "icon",
      type: "image/png",
      href: "/favicon-32x32.png",
      sizes: "32x32",
    },
    {
      rel: "apple-touch-icon",
      href: "/apple-touch-icon.png",
      sizes: "180x180",
    },
    {
      rel: "manifest",
      href: "/manifest.json",
    },
    {
      rel: "manifest",
      href: "/site.webmanifest",
    },
  ],
};
