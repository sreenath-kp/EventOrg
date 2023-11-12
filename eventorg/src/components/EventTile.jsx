import React from "react";

export const EventTile = ({ image, title, date, time, location }) => {
  return (
    <div class="w-[315px] h-[332px] relative rounded-lg shadow m-5">
      <img
        src={image}
        alt="event"
        class="w-[315px] h-[210px] rounded-lg object-cover"
      />
      <div class="left-[20px] absolute p-2">
        <div class="text-black text-[22px] font-medium font-Poppins">
          {title}
        </div>
        <div class="text-black text-opacity-60 text-sm font-medium font-Poppins">
          {location}
        </div>
        <div class="text-black text-opacity-60 text-sm font-medium font-Poppins">
          {date}
        </div>
        <div class="text-black text-opacity-60 text-sm font-medium font-Poppins">
          {time}
        </div>
      </div>
    </div>
  );
};
