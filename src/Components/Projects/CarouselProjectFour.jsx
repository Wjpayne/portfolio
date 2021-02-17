
import React from "react";
import Trello from './Images/Trello.png';
import TrelloArchive from './Images/TrelloArchive.png';
import TrelloDashboard from './Images/TrelloDashboard.png';
import TrelloLogin from './Images/TrelloLogin.png';
import  Carousel  from 'react-material-ui-carousel';


export default function ProjectFourCarousel() {
  const items = [
    {
      image: Trello,
    },
    {
      image: TrelloLogin,
    },
    {
      image: TrelloDashboard,
    },
    {
        image: TrelloArchive,
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
  return <img style = {{height: "225px", width: "225"}} alt = "screen show of project" src={props.item.image} />;
}