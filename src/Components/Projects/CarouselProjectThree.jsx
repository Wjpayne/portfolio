
import React from "react";
import Carousel from "react-material-ui-carousel";
import Recipe from "./Images/recipeapp.png"
import Login from "./Images/longinrecipe.png"
import Search from "./Images/searchrecipe.png"
import Ingredients from "./Images/ingredients.png"

export default function ProjectThreeCarousel() {
  const items = [
    {
      image: Recipe,
    },
    {
      image: Login,
    },
    {
      image: Search,
    },
    {
        image: Ingredients,
      },

  ];

  return (
    <Carousel autoPlay={false} swipe={true}>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return <img alt = "screen show of project" src={props.item.image} />;
}