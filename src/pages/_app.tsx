/// <reference path="../../node_modules/@types/three/index.d.ts" />
import "three";
import Layout from "../layout";
import "../styles/index.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp;
