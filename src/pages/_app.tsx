import type { AppProps } from "next/app";
import Head from "next/head";
import { Figtree, JetBrains_Mono, Outfit } from "next/font/google";
import { MotionConfig } from "framer-motion";
import { ThemeProvider } from "next-themes";
import Layout from "../layout";
import "../styles/index.css";

/** Geometric display sans (Poppins-like) for headings. */
const heading = Outfit({
  subsets: ["latin"],
  display: "swap",
});

/** Friendly geometric sans for body copy. */
const body = Figtree({
  subsets: ["latin"],
  display: "swap",
});

/** Monospace for labels, dates and metadata. */
const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-heading: ${heading.style.fontFamily};
          --font-body: ${body.style.fontFamily};
          --font-mono: ${mono.style.fontFamily};
        }
      `}</style>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
      </Head>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        <MotionConfig reducedMotion="user">
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </MotionConfig>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
