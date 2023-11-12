import React from "react";
import Hero from "../components/Hero";
import { EventTile } from "../components/EventTile";
import { EventScroll } from "../components/EventScroll";

export const Home = () => {
  return (
    <div>
      <Hero />
      <EventTile
        image="https://atneventstaffing.com/wp-content/uploads/2018/08/2018_Lipton_Cherry-Fest_Travese-City-MI_Brand-Ambassadors-.jpg.webp"
        title="Event 1"
        date="12/12/12"
        time="12:12"
        location="Location 1"
      />
      <h3>Upcoming Events</h3>
      <EventScroll />
      <h3>Past Events</h3>
      <EventScroll />
    </div>
  );
};
