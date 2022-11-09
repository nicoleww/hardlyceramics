import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

import Products from "../components/Products";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hardly Ceramics</title>
        <meta name="description" content="A project by Nicole Witherall" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <main>
        <h1>hardly ready yet</h1>
        <Products />
      </main>
    </div>
  );
}
