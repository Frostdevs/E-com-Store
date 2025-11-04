import "./Whyus.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import shipping from "../../assets/shipping.png"
import refund from "../../assets/refund.png";
import support from "../../assets/support.png";

const Whyus = () => {
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
    <div>
      <motion.section
        ref={ref}
        className="whyUs"
        initial={{ opacity: 0, y: -50 }}
        animate={controls}
        transition={{ duration: 0.5 }}
      >
        <h1>WHY CHOOSE US</h1>
        <div className="whycont">
          <div className="services">
            <img src={shipping} alt="" />
            <h4>FREE SHIPPING</h4>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
          <div className="services">
            <img src={refund} alt="" />
            <h4>100% REFUND</h4>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
          <div className="services">
            <img src={support} alt="" />
            <h4>SUPPORT 24/7</h4>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Whyus;
