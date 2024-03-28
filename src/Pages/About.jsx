/* eslint-disable react/no-unescaped-entities */
import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";

import profile1 from "../assets/pic (1).jpg";
import profile2 from "../assets/pic (2).jpg";
import profile3 from "../assets/pic (3).jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="poppins text-center mt-3">
      <div
        className="hero h-[420px] md:h-[350px] rounded-2xl"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1536965764833-5971e0abed7c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      >
        <div className="hero-overlay bg-opacity-60 rounded-2xl"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="border p-5 rounded-2xl">
            <h1 className="mb-5 text-4xl md:text-[44px] font-semibold text-white">
              About Us
            </h1>
            {/* <span className="w-44 h-1 bg-[#23BE0A]"></span> */}
            <p className="md:text-lg md:w-[800px] mx-auto text-white font-light">
              Welcome to <span className="font-semibold">BookVibe!</span> We are
              passionate about literature and love sharing our thoughts on the
              latest reads. Our mission is to provide book enthusiasts with
              insightful reviews, recommendations, and discussions to help them
              discover new reads and enhance their reading experience.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-10 md:mt-14">
        <h2 className="text-2xl md:text-4xl font-semibold mb-4">
          Meet the Team
        </h2>
        <div className="w-40 md:w-48 h-[3px] bg-[#23BE0A] mx-auto mb-5"></div>
        <p className="md:text-lg w-[80%] mx-auto text-[#131313c9] ">
          We're a diverse team of avid readers, writers, and book lovers who are
          dedicated to promoting literacy and fostering a vibrant literary
          community.
        </p>
      </div>
      <div className="grid grid-cols-1 mb-10 md:grid-cols-3 justify-center gap-3 md:gap-9 w-[80%] mx-auto mt-4 md:mt-6">
        <div className="mt-7 flex flex-col items-center  border-2 hover:border-[#23BE0A] duration-200 hover:bg-[#22be0a05] p-9 rounded-xl cursor-pointer">
          <div className="h-52 w-52 mx-auto bg-slate-500 rounded-full mb-3">
            <img className="w-full rounded-full" src={profile1} alt="" />
          </div>
          <h2 className="text-2xl text-[#131313] font-semibold mb-1">
            John Whitelong
          </h2>
          <h3 className="text-xl font-medium text-[#131318b3] mb-3">
            Founder & Editor-in-Chief
          </h3>
          <div className="flex gap-2 ">
            <div className="w-8 h-8 rounded-full flex justify-center items-center cursor-pointer  hover:scale-105 duration-200 text-white bg-[#191919]">
              <FaFacebookF size={18} />
            </div>
            <div className="w-8 h-8  rounded-full flex justify-center items-center cursor-pointer hover:scale-105 duration-200 text-white bg-[#191919]">
              <FaInstagram size={19} />
            </div>
            <div className="w-8 h-8  rounded-full flex justify-center items-center cursor-pointer hover:scale-105 duration-200 text-white bg-[#191919]">
              <FaXTwitter size={18} />
            </div>
          </div>
        </div>
        <div className="mt-7 flex flex-col items-center  border-2 hover:border-[#23BE0A] duration-200 hover:bg-[#22be0a05] p-9 rounded-xl cursor-pointer">
          <div className="h-52 w-52 mx-auto bg-slate-500 rounded-full mb-3">
            <img className="w-full rounded-full" src={profile2} alt="" />
          </div>
          <div className="flex flex-1 flex-col">
            <h2 className="text-2xl text-[#131313] font-semibold mb-1">
              Chris Zimerman
            </h2>
            <h3 className="text-xl font-medium text-[#131318b3] mb-3">
              Content Writer
            </h3>
          </div>
          <div className="flex gap-2">
            <div className="w-8 h-8 rounded-full flex justify-center items-center cursor-pointer  hover:scale-105 duration-200 text-white bg-[#191919]">
              <FaFacebookF size={18} />
            </div>
            <div className="w-8 h-8  rounded-full flex justify-center items-center cursor-pointer hover:scale-105 duration-200 text-white bg-[#191919]">
              <FaInstagram size={19} />
            </div>
            <div className="w-8 h-8  rounded-full flex justify-center items-center cursor-pointer hover:scale-105 duration-200 text-white bg-[#191919]">
              <FaXTwitter size={18} />
            </div>
          </div>
        </div>
        <div className="mt-7 flex flex-col items-center  border-2 hover:border-[#23BE0A] duration-200 hover:bg-[#22be0a05] p-9 rounded-xl cursor-pointer">
          <div className="h-52 w-52 mx-auto bg-slate-500 rounded-full mb-3">
            <img className="w-full rounded-full" src={profile3} alt="" />
          </div>
          <div className="flex flex-1 flex-col">
            <h2 className="text-2xl text-[#131313] font-semibold mb-1">
              Michael Johnson
            </h2>
            <h3 className="text-xl font-medium text-[#131318b3] mb-3">
              Social Media Manager
            </h3>
          </div>
          <div className="flex gap-2 ">
            <div className="w-8 h-8 rounded-full flex justify-center items-center cursor-pointer  hover:scale-105 duration-200 text-white bg-[#191919]">
              <FaFacebookF size={18} />
            </div>
            <div className="w-8 h-8  rounded-full flex justify-center items-center cursor-pointer hover:scale-105 duration-200 text-white bg-[#191919]">
              <FaInstagram size={19} />
            </div>
            <div className="w-8 h-8  rounded-full flex justify-center items-center cursor-pointer hover:scale-105 duration-200 text-white bg-[#191919]">
              <FaXTwitter size={18} />
            </div>
          </div>
        </div>
      </div>
      <hr className="mb-5" />
      <p className="font-semibold text-lg md:text-xl mb-10">
        Have any query?{" "}
        <Link className="italic underline" to={"/contact"}>
          Contact Us
        </Link>
      </p>
    </div>
  );
};

export default About;
