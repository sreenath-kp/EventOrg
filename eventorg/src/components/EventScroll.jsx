import React from "react";
import map from "lodash/map";
import range from "lodash/range";
import { EventTile } from "./EventTile";

export const EventScroll = () => {
  return (
    <div className="">
      <div style={{ width: "100%", overflow: "auto", display: "flex" }}>
        {map(range(10), (_) => (
          <Container />
        ))}
      </div>
    </div>
  );
};

const Container = () => {
  return (
    <div className="mx-6">
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
