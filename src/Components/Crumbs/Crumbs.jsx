import React from "react";
import { NavLink } from "react-router-dom";

const Crumbs = ({text, secondText, color}) => {
  return (
    <ul className=" w-full justify-center flex gap-2 bg-[#F6F7F8] font-[Proxima Nova] font-lg font-normal" style={{paddingBlock: 8}}>
      <NavLink className=" text-[#33A0FF]" to="/">Home</NavLink>/<NavLink style={{color}} to="/hot">{text}</NavLink><li >{secondText}</li>
    </ul>
  );
};

export default Crumbs;
