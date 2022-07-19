import React from "react";
import styles from "./styles.module.css";
import { Menu } from "../../Menu/Menu";
import { Reviews } from "../../Reviews/Reviews";

export const Restaurant = ({ restaurant }) => {
  return (
    <div className={styles.container}>
      <div>{restaurant.name}</div>
      <div className={styles.menu}>
        <Menu products={restaurant.menu} />
      </div>
      <div>
        <h2>Reviews</h2>
        <Reviews reviews={restaurant.reviews} />
      </div>
    </div>
  );
};
