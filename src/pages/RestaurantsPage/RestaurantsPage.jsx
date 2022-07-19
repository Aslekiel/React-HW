import React from "react";
import { Layout } from "../../components/Layout/Layout";
import { Restaurant } from "../../components/Layout/Restaurant/Restaurant";
import { Tabs } from "../../components/Tabs/Tabs";
import styles from "./styles.module.css";

export const RestaurantsPage = ({ restaurants, ...props }) => {
  return (
    <Layout>
      <div className={styles.container}>
        <Tabs />
        <Restaurant restaurant={restaurants[0]} />
      </div>
    </Layout>
  );
};
