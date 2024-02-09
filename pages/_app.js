import { DefaultSeo } from "next-seo";
import { NextSeo } from "next-seo";
import Head from "next/head";
import Layout from "@/components/common/Layout";
import { useRouter } from "next/router";

import SEO from "@/next-seo.config";

import "@/styles/main.scss";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <DefaultSeo {...SEO} />
      <NextSeo
        canonical={`https://www.hozon.io${router.pathname}`}
        openGraph={{
          url: `https://www.hozon.io${router.pathname}`,
        }}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
