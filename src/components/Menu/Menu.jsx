import { Product } from "../Product/Product";
import styles from "./styles.module.css";

export const Menu = ({ products, className, isTouch }) => {
  if (products.length === 0) {
    return null;
  }
  return (
    <div className={isTouch ? styles.rootTouch : styles.root}>
      {products.map((product) => (
        <Product name={product.name} className={styles.product} />
      ))}
    </div>
  );
};
