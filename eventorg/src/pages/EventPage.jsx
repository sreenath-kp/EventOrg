import React from "react";
import Navbar from "../components/Navbar";
import { EventScroll } from "../components/EventScroll";

export const EventPage = ({ image, title, date, time, location }) => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-between items-center pt-16 p-10 ">
        <img
          src={image}
          alt="event"
          className="w-[315px] h-[210px] rounded-lg object-cover"
        />
        <div className="p-2">
          <div className="text-black text-[22px] font-medium font-Poppins">
            {title}
          </div>
          <div className="text-black text-opacity-60 text-sm font-medium font-Poppins">
            {location}
          </div>
          <div className="text-black text-opacity-60 text-sm font-medium font-Poppins">
            {date}
          </div>
          <div className="text-black text-opacity-60 text-sm font-medium font-Poppins">
            {time}
          </div>
        </div>
        <button className="bg-[#E3670C] flex justify-center items-center rounded-xl px-4 py-1">
          <p className="text-white font-Poppins text-lg font-medium pl-50">
            Register
          </p>
        </button>
      </div>
      <div className="mx-8">
        <h3 className="text-[25px] font-Poppins font-medium">About the Event</h3>
        <p className=" p-1">
          Lorem ipsum dolor sit amet consectetur. Lobortis ultrices at amet non
          porta cras duis lacus ipsum. Morbi est aliquam cras eget velit eu id
          nisi. Sit congue natoque molestie elementum sit commodo porttitor id.
          Sit arcu faucibus non ac habitant auctor vitae rhoncus. In aliquet
          rhoncus adipiscing enim nunc non turpis. Ut aliquam nisi sodales ut.
        </p>
      </div>
      <h3 className="text-[25px] font-Poppins font-medium mx-8">Similar Events</h3>
      <EventScroll />
    </div>
  );
};
