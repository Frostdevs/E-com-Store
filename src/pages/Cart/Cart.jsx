import React, { useState } from "react";
import "./Cart.css";
import Header from "../../Components/Header/Header";
import Crumbs from "../../Components/Crumbs/Crumbs";
import { ShoppingCart, X, Plus, Minus } from "lucide-react";
import { useCart } from "../../Components/Carts-context/CartContext";

const Cart = () => {

  return (
    <div className="cart-page">
      <Header />
      <Crumbs text="Hot Deal" secondText="/ Nike Air Force" color="#33A0FF" />
    </div>
  );
};

export default Cart;
