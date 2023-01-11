import "../styles/globals.css";
import "@code-hike/mdx/dist/index.css";

import Layout from "../components/Layout";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout >

      <Component {...pageProps} />
    </Layout>
  );
}
