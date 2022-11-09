import styles from "../styles/Card.module.css";

export default function Card({ item }) {
  const { title, brief, description, price, images } = item.attributes;
  return <div className={styles.container}></div>;
}
