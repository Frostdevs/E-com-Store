import React from "react";
import logo from "../../assets/icon.png";
import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <NavLink to="/" className=" text-lg flex gap-[7px] items-center">
      <img src={logo} alt="Logo" />
      E-Comm
    </NavLink>
  );
};

export default Logo;
