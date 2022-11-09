import { useQuery } from "urql";
import { GET_ONE_QUERY } from "../../lib/query";
import { useRouter } from "next/router";

export default function ProductDetails() {
  const { query } = useRouter();
  const [results] = useQuery({
    query: GET_ONE_QUERY,
    variables: { slug: query.slug },
  });
  const { data, fetching, error } = results;
  if (fetching) return <p>Getting that item for you...</p>;
  if (error) return <p>Something went wrong: {error.message}</p>;

  return (
    <div>
      <img src="" alt="" />
      <div>
        <h3>Title</h3>
        <p>Description</p>
      </div>
      <div>
        <button>+</button>
        <p>0</p>
        <button>-</button>
      </div>
      <button>Add to Cart</button>
    </div>
  );
}
