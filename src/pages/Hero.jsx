import React from "react";
import Socials from "../components/socials/Socials";
import { FaGithub, FaWhatsapp } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io";
import myImg from "../assets/myimg.jpg";
import TypewriterEffect from "./Typewritereffect";

const Hero = () => {
  return (
    <>
      <section className="hero lg:flex-row lg:justify-between flex flex-col justify-center lg:items-center lg:h-[90vh] lg:px-30 sm:px-30 px-6">
        <div className="left w-full flex lg:block  justify-center flex-col mt-10 lg:m-0">
          <p className="lg:text-3xl rounded-sm w-fit text-white font-medium border border-orange-400 px-4 py-2 relative md:inline-block inline">
            <span className="absolute -left-1 -top-1  h-2 w-2 rounded-full bg-orange-400 "></span>
            <span className="absolute -right-1 -top-1  h-2 w-2 rounded-full bg-orange-400 "></span>
            <span className="absolute -right-1 -bottom-1  h-2 w-2 rounded-full bg-orange-400 "></span>
            <span className="absolute -left-1 -bottom-1  h-2 w-2 rounded-full bg-orange-400 "></span>
            Hello !
          </p>
          <h1 className="text-5xl lg:mt-4 mt-2 text-white font-bold">Amar Mahato</h1>
          <p className="lg:text-3xl text-white font-medium">
            And I'm a{" "}
            <span className="font-medium text-orange-400 lg:text-3xl">
              <TypewriterEffect />
            </span>
          </p>

          <div className="text-gray-300 lg:text-base md:text-base text-xs leading-5 mt-5">
            <p>
              I'm a web Developer with extensive experience for over 2 years,
            </p>
            <p>expertise is to create and frontend design, backend, and </p>
            <p>many more....</p>
          </div>
          <div className="socials mt-6 flex gap-4">
            <Socials iconType={<FaGithub />} />
            <Socials iconType={<TiSocialFacebook />} />
            <Socials iconType={<IoLogoInstagram />} />
            <Socials iconType={<FaWhatsapp />} />
          </div>
          <button className="bg-orange-400  w-[100px] lg:w-auto hover:bg-orange-500 text-white lg:px-4 px-2 py-2 font-semibold rounded text-base mt-8 cursor-pointer">
            Hire Me
          </button>
        </div>
        <div className="right w-full flex lg:justify-end justify-center lg:my-0 my-10">
          <div className=" lg:h-[300px] lg:w-[300px] h-48 w-48  shadow-2xl shadow-orange-400 ring-3 ring-orange-400 border rounded-full  ">
            <img
              src={myImg}
              alt="MyImage"
              className="bg-cover bg-left h-full w-full rounded-full hover:scale-105 transition-all hover:ring-1 hover:ring-orange-400"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
