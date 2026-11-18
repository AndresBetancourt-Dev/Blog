import type { AppProps } from "next/app";
import Head from "next/head";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import { MotionConfig } from "framer-motion";
import { ThemeProvider } from "next-themes";
import Layout from "../layout";
import "../styles/index.css";

const heading = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const body = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-heading: ${heading.style.fontFamily};
          --font-body: ${body.style.fontFamily};
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
        defaultTheme="system"
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
