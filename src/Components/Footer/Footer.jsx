import React from "react";
import "./Footer.css";
import Logo from "../LOGO/Logo";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import union from "../../assets/Western-union.png";
import pay from "../../assets/Paypal.png";
import master from "../../assets/Group 19.png";
import visa from "../../assets/Shape 327.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Footer = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [inView, controls]);

  return (
    <div>
      <motion.footer
        ref={ref}
        animate={controls}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
      >
        <div className="footcont">
          <div className="headcont">
            <div className="lilabout">
              <Logo />
              <p className=" w-[221px] mt-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever.Since the 1500s, when an unknown printer.
              </p>
            </div>
            <div className="follow">
              <h2>Follow Us</h2>
              <p className=" w-[198px] mt-[19.27px]">
                Since the 1500s, when an unknown printer took a galley of type
                and scrambled.
              </p>
              <div className="socials flex gap-[39px] mt-[22px]">
                <img src={facebook} alt="facebook" />
                <img src={twitter} alt="twitter" />
              </div>
            </div>
            <div className="contact">
              <h2>Contact Us</h2>
              <h3 className=" w-[148.11px] mt-[19.27px]">
                E-Comm , 4578 Marmora Road, Glasgow D04 89GR
              </h3>
            </div>
          </div>
          <div className="mid">
            <div className="firs">
              <h4>Information</h4>
              <ul className="quicklinks">
                <li>
                  <a href="">About Us</a>
                </li>
                <li>
                  <a href="">Information</a>
                </li>
                <li>
                  <a href="">Privacy Policy</a>
                </li>
                <li>
                  <a href="">Terms & Conditions</a>
                </li>
              </ul>
            </div>
            <div className="firs">
              <h4>Service</h4>
              <ul className="quicklinks">
                <li>
                  <a href="">About Us</a>
                </li>
                <li>
                  <a href="">Information</a>
                </li>
                <li>
                  <a href="">Privacy Policy</a>
                </li>
                <li>
                  <a href="">Terms & Conditions</a>
                </li>
              </ul>
            </div>
            <div className="firs">
              <h4>My Account</h4>
              <ul className="quicklinks">
                <li>
                  <a href="">About Us</a>
                </li>
                <li>
                  <a href="">Information</a>
                </li>
                <li>
                  <a href="">Privacy Policy</a>
                </li>
                <li>
                  <a href="">Terms & Conditions</a>
                </li>
              </ul>
            </div>
            <div className="firs">
              <h4>Our Offers</h4>
              <ul className="quicklinks">
                <li>
                  <a href="">About Us</a>
                </li>
                <li>
                  <a href="">Information</a>
                </li>
                <li>
                  <a href="">Privacy Policy</a>
                </li>
                <li>
                  <a href="">Terms & Conditions</a>
                </li>
              </ul>
            </div>
          </div>
          <span className="stline"></span>
          <div className="last">
            <p>© 2018 Ecommerce theme by www.bisenbaev.com</p>
            <div className="rands">
              <img src={union} alt="" />
              <img src={master} alt="" />
              <img src={pay} alt="" />
              <img src={visa} alt="" />
            </div>
          </div>
        </div>
      </motion.footer>
    </div>
  );
};

export default Footer;
