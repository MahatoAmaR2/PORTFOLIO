import React from "react";

const Socials = ({ iconType }) => {
  return (
    <>
      <span className=" h-10 w-10 flex justify-center items-center rounded-full p-1 border-[1.5px] border-orange-500  hover:bg-orange-400 shadow-2xl shadow-orange-400 cursor-pointer text-base text-orange-400 font-bold hover:text-white">
        {iconType}
      </span>
    </>
  );
};

export default Socials;
