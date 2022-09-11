import Head from "next/head";
import Link from "next/link";
import { useQuery } from "urql";
import { PRODUCTS_QUERY } from "../lib/query";

import Products from "../components/Products";

export default function Home() {
  const [results] = useQuery({ query: PRODUCTS_QUERY });
  const { data, fetching, error } = results;

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
