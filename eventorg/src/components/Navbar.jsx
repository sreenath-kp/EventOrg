import React from "react";
import Avatar from "../assets/avatar.png";

function Navbar() {
  return (
    <nav className="flex justify-between items-center pt-4 px-4">
      <div className="flex justify-center gap-4 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="43"
          height="43"
          viewBox="0 0 43 43"
          fill="none"
        >
          <path
            d="M30.1773 29.8003C30.53 27.9995 29.9671 26.1488 28.6685 24.852L17.8967 14.0808C16.5981 12.7823 14.749 12.2229 12.9481 12.5703C11.1471 12.923 9.64725 14.1449 8.93471 15.8353L0.373565 36.1629C-0.376382 37.9495 0.0226395 39.9855 1.39249 41.3553C2.30276 42.2655 3.50873 42.7464 4.73786 42.7464C5.35955 42.7464 5.98659 42.6253 6.58512 42.3724L26.9121 33.8135C28.6026 33.1028 29.8228 31.6012 30.1773 29.8003ZM24.8403 28.8865L5.87614 36.8719L13.8601 17.9087L14.1184 17.8588L24.9348 28.7725C24.9187 28.8563 24.8689 28.8758 24.8403 28.8865ZM22.8755 1.00106C23.7983 -0.135375 25.446 -0.331313 26.5914 0.575344C28.086 1.75453 30.5424 4.8735 30.2752 9.07725C30.1434 11.1364 29.3632 13.1207 27.9559 14.975C27.4304 15.6697 26.6324 16.033 25.8254 16.033C25.2625 16.033 24.6943 15.8549 24.2115 15.4898C23.0358 14.5973 22.8061 12.9212 23.6985 11.7456C24.4591 10.7427 24.8778 9.72919 24.9419 8.73703C25.0969 6.31453 23.3298 4.81294 23.255 4.75059C22.1327 3.81544 21.9546 2.1375 22.8755 1.00284V1.00106ZM42.2619 20.7266C43.1116 21.9325 42.823 23.5998 41.6171 24.4494C41.1486 24.7808 40.6124 24.9375 40.0798 24.9375C39.2568 24.9375 38.4463 24.5581 37.9261 23.8509C37.8656 23.7761 37.3365 23.1563 36.5153 23.1563C36.0967 23.1563 35.7458 23.2667 35.4429 23.4947C34.2655 24.3818 32.5892 24.1484 31.7003 22.971C30.8114 21.7936 31.0448 20.1174 32.2222 19.2286C33.4514 18.3006 34.9352 17.8107 36.5135 17.8107C40.1029 17.8107 42.0499 20.4256 42.2601 20.7248L42.2619 20.7266ZM37.406 2.67188C37.406 1.197 38.603 0 40.078 0C41.5529 0 42.75 1.197 42.75 2.67188C42.75 4.14675 41.5529 5.34375 40.078 5.34375C38.603 5.34375 37.406 4.14675 37.406 2.67188ZM33.8433 11.5781C33.8433 10.1033 35.0403 8.90625 36.5153 8.90625C37.9902 8.90625 39.1873 10.1033 39.1873 11.5781C39.1873 13.053 37.9902 14.25 36.5153 14.25C35.0403 14.25 33.8433 13.053 33.8433 11.5781ZM14.2485 4.45312C14.2485 2.97825 15.4455 1.78125 16.9205 1.78125C18.3954 1.78125 19.5925 2.97825 19.5925 4.45312C19.5925 5.928 18.3954 7.125 16.9205 7.125C15.4455 7.125 14.2485 5.928 14.2485 4.45312ZM40.9687 32.9531C40.9687 34.428 39.7716 35.625 38.2966 35.625C36.8217 35.625 35.6246 34.428 35.6246 32.9531C35.6246 31.4783 36.8217 30.2812 38.2966 30.2812C39.7716 30.2812 40.9687 31.4783 40.9687 32.9531ZM1.77905 6.23438C1.77905 4.7595 2.97611 3.5625 4.45107 3.5625C5.92602 3.5625 7.12308 4.7595 7.12308 6.23438C7.12308 7.70925 5.92602 8.90625 4.45107 8.90625C2.97611 8.90625 1.77905 7.70925 1.77905 6.23438ZM32.0619 40.0781C32.0619 41.553 30.8649 42.75 29.3899 42.75C27.915 42.75 26.7179 41.553 26.7179 40.0781C26.7179 38.6033 27.915 37.4063 29.3899 37.4063C30.8649 37.4063 32.0619 38.6033 32.0619 40.0781Z"
            fill="#E3670C"
          />
        </svg>
        <p className="text-black font-Poppins text-4xl font-normal">
          Event<span className="text-[#E3670C]">Org</span>
        </p>
      </div>
      <div className="flex justify-center gap-8 items-center">
        <button className="bg-[#E3670C] flex justify-center items-center rounded-xl px-4 py-1">
          <p className="text-white font-Poppins text-lg font-medium">
            Add Event
          </p>
        </button>
        <button className="flex justify-center gap-2 items-center rounded-xl px-4 py-1">
          <p className="text-black font-Poppins text-lg font-medium">
            John George
          </p>
          <img src={Avatar} className="w-8 h-8 rounded-full" alt="login" />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
