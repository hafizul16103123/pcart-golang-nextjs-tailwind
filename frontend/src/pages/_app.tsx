import Layout from "@/components/layout/layout";
import "@/styles/globals.css";
// import "@/js/index.jsx";
import type { AppProps } from "next/app";
// import Font Awesome CSS
import "@fortawesome/fontawesome-svg-core/styles.css"; 

import { config } from "@fortawesome/fontawesome-svg-core";
// Tell Font Awesome to skip adding the CSS automatically 
// since it's already imported above
config.autoAddCss = false;

import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

export default function App({ Component, pageProps }: AppProps) {
  return (
    
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
