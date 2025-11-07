
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  // if (!context) {
  //   throw new Error('useCart must be used within CartProvider');
  // }
  // return context;
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [alert, setAlert] = useState({ show: false, message: '', type: '' });
  const shippingFee = 20;

  
  const showAlert = (message, type) => {
    setAlert({ show: true, message, type });
    setTimeout(() => setAlert({ show: false, message: '', type: '' }), 3000);
  };


  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

 
  const getCartId = (product, index) => {
    
    return `${product.title}-${index}`.replace(/\s+/g, '-').toLowerCase();
  };

 
  const addToCart = (product, index) => {
    const cartId = getCartId(product, index);
    const existingItem = cartItems.find(item => item.cartId === cartId);
    
    if (existingItem) {
      setCartItems(prev =>
        prev.map(item =>
          item.cartId === cartId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems(prev => [...prev, { ...product, cartId, quantity: 1 }]);
    }
    
    showAlert(`${product.title} added to cart`, 'success');
  };


  const updateQuantity = (cartId, newQuantity) => {
    if (newQuantity < 1) return;
    
    setCartItems(prev =>
      prev.map(item =>
        item.cartId === cartId ? { ...item, quantity: newQuantity } : item
      )
    );
    showAlert('Cart updated successfully', 'success');
  };

 
  const removeItem = (cartId) => {
    const item = cartItems.find(i => i.cartId === cartId);
    setCartItems(prev => prev.filter(item => item.cartId !== cartId));
    showAlert(`${item.title} removed from cart`, 'error');
  };

 
  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

 
  const calculateTotal = () => {
    return calculateSubtotal() + shippingFee;
  };

  const value = {
    cartItems,
    alert,
    shippingFee,
    getTotalItems,
    addToCart,
    updateQuantity,
    removeItem,
    calculateSubtotal,
    calculateTotal
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};