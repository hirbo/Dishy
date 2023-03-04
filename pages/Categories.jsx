import React from "react";
import { ScrollView, View, Text } from "react-native";
import CategoryCard from "../components/CategoryCard";
import logo from "./logo.png";
function Categories() {
  return (
    <ScrollView
      showHorizontallScrollIndicator={false}
      horizontal
      contentContainerStyle={{
        paddingTop: 16,
        paddingHorizontal: 16,
      }}
    >
      <CategoryCard Title="category 1" imgUrl={logo} />
      <CategoryCard Title="category 1" imgUrl={logo} />
      <CategoryCard Title="category 1" imgUrl={logo} />
      <CategoryCard Title="category 1" imgUrl={logo} />
      <CategoryCard Title="category 1" imgUrl={logo} />
      <CategoryCard Title="category 1" imgUrl={logo} />
      <CategoryCard Title="category 1" imgUrl={logo} />
    </ScrollView>
  );
}

export default Categories;
