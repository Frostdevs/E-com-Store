import React from "react";
import "./Advert.css";
import advertpic from "../../assets/advertshoe.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Advert = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3 });
  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [inView, controls]);
  return (
    <div>
      <motion.section
        className="Advert"
          ref={ref}
        animate={controls}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
      >
        <div className="Advertcont">
          <h1>Adidas Men Running Sneakers</h1>
          <p>Performance and design. Taken right to the edge.</p>
          <button className="shop">
            <h4>SHOP NOW</h4>
            <span class="line"></span>
          </button>
        </div>
        <img src={advertpic} alt="" className="advertpic" />
      </motion.section>
    </div>
  );
};

export default Advert;
