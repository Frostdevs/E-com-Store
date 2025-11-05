import React, { useState } from "react";
import "./Cart.css";
import Header from "../../Components/Header/Header";
import Crumbs from "../../Components/Crumbs/Crumbs";
import { ShoppingCart, X, Plus, Minus, ArrowLeft } from "lucide-react";
import { useCart } from "../../Components/Carts-context/CartContext";

const Cart = () => {
  const {
    cartItems,
    updateQuantity,
    removeItem,
    calculateSubtotal,
    calculateTotal,
    shippingFee,
  } = useCart();

  const [voucherCode, setVoucherCode] = useState("");
  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <div className="cart-container">
          <div className="empty-cart">
            <ShoppingCart size={64} className="empty-icon" />
            <p className="empty-text">Your cart is empty</p>
            <button
              className="continue-shopping-btn"
              onClick={() => navigate("/")}
            >
              Start Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <Header />
      <Crumbs text="Hot Deal" secondText="/ Nike Air Force" color="#33A0FF" />
      <div className="cart-container">
        <h1 className="cart-title">Shopping Cart</h1>

        <div className="cart-content">
          {/* Table Header */}
          <div className="cart-header">
            <div className="header-product">PRODUCT</div>
            <div className="header-price">PRICE</div>
            <div className="header-qty">QTY</div>
            <div className="header-unit">UNIT PRICE</div>
          </div>

          {/* Cart Items */}
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="item-product">
                <button
                  className="remove-btn"
                  onClick={() => removeItem(item.id)}
                >
                  <X size={20} />
                </button>
                <img src={item.image} alt={item.title} className="item-image" />
                <span className="item-name">{item.title}</span>
              </div>

              <div className="item-price">${item.price * item.quantity}</div>

              <div className="item-qty">
                <button
                  className="qty-btn"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                >
                  <Minus size={16} />
                </button>
                <span className="qty-value">{item.quantity}</span>
                <button
                  className="qty-btn qty-btn-plus"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  <Plus size={16} />
                </button>
              </div>

              <div className="item-unit">${item.price}</div>
            </div>
          ))}

          {/* Checkout Section */}
          <div className="checkout-section">
            <div className="voucher-section">
              <input
                type="text"
                placeholder="Voucher code"
                value={voucherCode}
                onChange={(e) => setVoucherCode(e.target.value)}
                className="voucher-input"
              />
              <button className="redeem-btn">Redeem</button>
            </div>

            <div className="totals-section">
              <div className="total-row">
                <span>Subtotal</span>
                <span className="total-value">${calculateSubtotal()}</span>
              </div>
              <div className="total-row">
                <span>Shipping fee</span>
                <span className="total-value">${shippingFee}</span>
              </div>
              <div className="total-row">
                <span>Coupon</span>
                <span className="total-value">No</span>
              </div>
              <div className="total-row total-final">
                <span className="total-label">TOTAL</span>
                <span className="total-amount">${calculateTotal()}</span>
              </div>
              <button className="checkout-btn">Check out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
