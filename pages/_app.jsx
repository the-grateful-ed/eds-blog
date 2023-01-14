import "../styles/globals.css";
import "@code-hike/mdx/dist/index.css";
import { Auth0Provider } from "@auth0/auth0-react";

import Layout from "../components/layout/Layout";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Auth0Provider
        clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID}
        domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN}
      >
        <Component {...pageProps} />
      </Auth0Provider>
    </Layout>
  );
}
