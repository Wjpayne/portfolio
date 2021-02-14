
import React from "react";
import Carousel from "react-material-ui-carousel";
import TicketLogin from "./Images/TicketLogin.jpg"
import TicketDashboard from "./Images/TicketDashboard.png"
import TicketAdd from './Images/TicketAdd.png';
import TicketConvo from './Images/TicketConvo.png';
import TicketList from './Images/TicketList.png';



export default function ProjectThreeCarousel() {
  const items = [
    {
      image: TicketLogin,
    },
    {
      image: TicketDashboard,
    },
    {
      image: TicketAdd,
    },
    {
        image: TicketConvo,
      },
      {
        image: TicketList,
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