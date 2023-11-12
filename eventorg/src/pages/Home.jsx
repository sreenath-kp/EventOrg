import React from "react";
import Hero from "../components/Hero";
import { EventTile } from "../components/EventTile";

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
    </div>
  );
};
