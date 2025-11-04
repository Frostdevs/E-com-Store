import React from "react";
import "./News.css";
import nikelogo from "../../assets/nikelogo.png";
import figma from "../../assets/figma.png";
import kronos from "../../assets/kronos.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const News = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: false });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [inView, controls]);

  return (
    <motion.section
      className="news"
      ref={ref}
      initial={{ opacity: 0, y: -50 }}
      animate={controls}
      transition={{ duration: 0.5 }}
    >
      <div className="newscont">
        <h1>LATEST NEWS</h1>
        <div className="contain">
          <div className="newcard">
            <img src={nikelogo} alt="" />
            <div className="newstext">
              <p>01 Jan, 2015</p>
              <h3>Fashion Industry</h3>
              <h4>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </h4>
            </div>
          </div>
          <div className="newcard">
            <img src={figma} alt="" />
            <div className="newstext">
              <p>01 Jan, 2015</p>
              <h3>Best Design Tools</h3>
              <h4>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </h4>
            </div>
          </div>
          <div className="newcard">
            <img src={kronos} alt="" />
            <div className="newstext">
              <p>01 Jan, 2015</p>
              <h3>HR Community</h3>
              <h4>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default News;
