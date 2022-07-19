import React from "react";
import { RestaurantsPage } from "./pages/RestaurantsPage/RestaurantsPage";
import { BasketPage } from "./pages/BasketPage/BasketPage";
import { restaurants } from "./components/constants/fixtures";

export const App = () => {
  return <RestaurantsPage restaurants={restaurants} />;
};
