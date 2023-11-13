import React from "react";
import Hero from "../components/Hero";
import { EventScroll } from "../components/EventScroll";

export const Home = () => {
  return (
    <div>
      <Hero />
      <div className="mt-4 mx-8">
        <span className="text-black text-3xl font-normal font-Poppins">
          Events{" "}
        </span>
        <span className="text-orange-600 text-3xl font-normal font-Poppins">
          Near You
        </span>
      </div>
      <EventScroll />
      <div className="mt-4 mx-8">
        <span className="text-black text-3xl font-normal font-Poppins">
          Popular{" "}
        </span>
        <span className="text-orange-600 text-3xl font-normal font-Poppins">
          Events
        </span>
      </div>
      <EventScroll />
    </div>
  );
};
