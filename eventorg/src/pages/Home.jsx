import React from "react";
import Hero from "../components/Hero";
import { EventTile } from "../components/EventTile";
import { EventScroll } from "../components/EventScroll";

export const Home = () => {
  return (
    <div>
      <Hero />
      <h3>Upcoming Events</h3>
      <EventScroll />
      <h3>Past Events</h3>
      <EventScroll />
    </div>
  );
};
