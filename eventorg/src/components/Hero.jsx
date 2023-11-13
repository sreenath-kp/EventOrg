import backgroundImage from "../assets/bg.jpeg";
import { AiOutlineSearch } from "react-icons/ai";
import Navbar from "./Navbar";

function Hero() {
  return (

    <div
      className="bg-cover bg-center h-96"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Navbar />
      <div className="mt-10 font-poppins text-5xl text-white font-semibold text-center">
        <div>
          <p>
            <span className="text-[#E3670C]">Search, Book</span> and{" "}
            <span className="text-[#E3670C]">Add</span> an{" "}
            <span className="text-[#E3670C]">Event</span>
          </p>
          <p> All in one place!</p>
        </div>
        <form className="inline-flex justify-center mt-6">
          <div className="relative">
            <AiOutlineSearch className="absolute top-3 bottom-0 w-6 h-6 my-auto text-gray-400 left-2" />
            <input
              //   className="rounded-3xl text-[#000000CC] text-xl py-2 px-4 w-3/5 pl-4 outline-none"
              className="text-xl pl-10 pr-10 p-3 text-[#000000CC] rounded-3xl outline-none "
              type="searchbar"
              placeholder="Search for Events"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Hero;
