import { useQuery } from "urql";
import { GET_ALL_QUERY } from "../lib/query";
import styles from "../styles/Products.module.css";

import Card from "./Card";

export default function Products() {
  const [results] = useQuery({ query: GET_ALL_QUERY });
  const { data, fetching, error } = results;

  if (fetching) return <p>Just one second...</p>;
  if (error) return <p>Something went wrong: {error.message}</p>;
  const returnedItems = data.products.data;

  return (
    <div>
      {returnedItems.map((item) => (
        <Card key={item.attributes.slug} item={item} />
      ))}
    </div>
  );
}
