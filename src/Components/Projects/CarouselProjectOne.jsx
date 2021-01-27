
import React from "react";
import FrontPage from "./Images/frontPage.png";
import Carousel from "react-material-ui-carousel";
import Articles from "./Images/articles.png"
import Login from "./Images/login.png"
import Records from "./Images/records.png"
import Favorites from "./Images/favorites.png"
export default function ProjectOneCarousel() {
  const items = [
    {
      image: FrontPage,
    },
    {
      image: Articles,
    },
    {
      image: Login,
    },
    {
        image: Records,
      },
      {
        image: Favorites,
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
