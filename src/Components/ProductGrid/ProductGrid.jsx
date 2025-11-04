import React, { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductGrid.css";
import pic from "../../assets/image1.png";
import pic1 from "../../assets/winebag.png";
import pic2 from "../../assets/backside.png";
import pic3 from "../../assets/black.png";
import pic4 from "../../assets/blue.png";
import pic5 from "../../assets/Product Picture03.png";
import pic6 from "../../assets/down.png";
import pic7 from "../../assets/creambag.png";
import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

import { useEffect } from "react";

const allProducts = [
  {
    image: pic,
    title: "Nike Air Max 270 React",
    price: 299.43,
    originalPrice: 634.23,
    isHot: true,
    rating: 4,
    category: "Sneakers",
  },
  {
    image: pic1,
    title: "Nike Air Max 270 React",
    price: 299.43,
    originalPrice: 634.23,
    isHot: false,
    rating: 4,
    category: "Bags",
  },
  {
    image: pic7,
    title: "Nike Air Max 270 React",
    price: 299.43,
    originalPrice: 634.23,
    isHot: false,
    rating: 4,
    category: "Bags",
  },
  {
    image: pic4,
    title: "Nike Air Max 270 React",
    price: 299.43,
    originalPrice: 634.23,
    isHot: false,
    rating: 4,
    category: "Sneakers",
  },
  {
    image: pic6,
    title: "Nike Air Max 270 React",
    price: 299.43,
    originalPrice: 634.23,
    isHot: false,
    rating: 4,
    category: "Sneakers",
  },
  {
    image: pic5,
    title: "Nike Air Max 270 React",
    price: 299.43,
    originalPrice: 634.23,
    isHot: false,
    rating: 4,
    category: "Sneakers",
  },
  {
    image: pic2,
    title: "Nike Air Max 270 React",
    price: 299.43,
    originalPrice: 634.23,
    isHot: false,
    rating: 4,
    category: "Sneakers",
  },
  {
    image: pic4,
    title: "Nike Air Max 270 React",
    price: 299.43,
    originalPrice: 634.23,
    isHot: false,
    rating: 4,
    category: "Sneakers",
  },
  {
    image: pic3,
    title: "Nike Air Max 270 React",
    price: 299.43,
    originalPrice: 634.23,
    isHot: false,
    rating: 4,
    category: "Bags",
  },
  {
    image: pic7,
    title: "Nike Air Max 270 React",
    price: 299.43,
    originalPrice: 634.23,
    isHot: false,
    rating: 4,
    category: "Bags",
  },
];

const categories = ["All", "Bags", "Sneakers", "Belt", "Sunglasses"];

const ProductGrid = ({display, gridset, value}) => {
  const [visibleCount, setVisibleCount] = useState(8);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = allProducts.filter(
    (product) =>
      selectedCategory === "All" || product.category === selectedCategory
  );

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [inView, controls]);

  return (
    <div>
      <div className="category-buttons" style={{display: display}}>
        {categories.map((cat) => (
          <button
            key={cat}
            className={selectedCategory === cat ? "active" : ""}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div
        className="product-grid"
        ref={ref}
        animate={controls}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        style={{gridTemplateColumns: gridset, width: value}}
      >
        {filteredProducts.slice(0, visibleCount).map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </motion.div>

      {visibleCount < filteredProducts.length && (
        <div className="load-more-container"  style={{display: display}}>
          <button onClick={handleLoadMore} className="load-more-button">
            LOAD MORE
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;
