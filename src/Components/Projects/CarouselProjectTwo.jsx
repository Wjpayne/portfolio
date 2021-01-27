
import React from "react";
import Carousel from "react-material-ui-carousel";
import Tutorial from "./Images/tutorial.png"
import Tutorial2 from "./Images/tutorial2.png"
import Map from "./Images/map.png"
import Map2 from "./Images/map2.png"
import Map3 from "./Images/map3.png"

export default function ProjectTwoCarousel() {
  const items = [
    {
      image: Tutorial,
    },
    {
      image: Tutorial2,
    },
    {
      image: Map,
    },
    {
        image: Map2,
      },
      {
        image: Map3,
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