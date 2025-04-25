import React from "react";
import myImg from "../assets/myimg.jpg";
import "../index.css";

const About = () => {
  return (
    <>
      <div className="container lg:px-30 px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8 ">
          About Me
        </h1>

        <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
          {/* Profile Image */}
          <div
            className="w-64 h-64 mb-6   "
          >
            <img
              src={myImg}
              alt="Your Name"
              className="w-full h-full shadow-2xl shadow-orange-400 object-cover  ring-4 ring-orange-400 ring-opacity-50 rounded-bl-[4px] rounded-tr-[4px] 
            rounded-br-[50%] rounded-tl-[50%] overflow-hidden"
            />
          </div>

          {/* About Text */}
          <div className="max-w-2xl text-center md:text-left">
            <p className="text-lg text-gray-700 mb-4">
              Hello! My name is{" "}
              <span className="font-semibold">[Your Name]</span>, and I am a
              passionate web developer with expertise in front-end technologies
              such as React, JavaScript, HTML, and CSS. I love building
              responsive, interactive, and user-friendly websites.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              I have worked on several projects, including [Project 1], [Project
              2], and [Project 3]. These projects have allowed me to expand my
              skill set and knowledge, while also learning best practices in
              software development.
            </p>
            <p className="text-lg text-gray-700">
              When I'm not coding, I enjoy [Hobbies or Interests]. Feel free to
              connect with me through the links below or contact me directly for
              collaboration opportunities.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
