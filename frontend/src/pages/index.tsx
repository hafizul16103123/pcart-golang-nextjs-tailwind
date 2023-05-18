import Head from "next/head";
import HomePage from "@/components/Home/home";

export default function Home() {
  return (
    <>

      <Head>
        <title>pCart Homepage</title>
        <meta name="description" content="pCart  home page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomePage/>
    </>
  );
}
