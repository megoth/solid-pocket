import React from "react";
import { AppProps } from "next/app";
import "../styles/globals.css";
import { SessionProvider } from "@inrupt/solid-ui-react";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Solid Pocket</title>
        <meta name="application-name" content="Solid Pocket" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Solid Pocket" />
        <meta
          name="description"
          content="Solid Pocket - bringing your Pocket into Solid"
        />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta
          name="msapplication-config"
          content="/static/icons/browserconfig.xml"
        />
        <meta name="msapplication-TileColor" content="#ec4055" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#ec4055" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://solidpocket.vercel.app" />
        <meta name="twitter:title" content="Solid Pocket" />
        <meta
          name="twitter:description"
          content="Solid Pocket - bringing your Pocket into Solid"
        />
        <meta name="twitter:creator" content="@megoth" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Solid Pocket" />
        <meta
          property="og:description"
          content="Solid Pocket - bringing your Pocket into Solid"
        />
        <meta property="og:site_name" content="Solid Pocket" />
        <meta property="og:url" content="https://solidpocket.vercel.app" />
      </Head>
      <SessionProvider sessionId="dnd5e-app">
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}
