import React from "react";
import Header from "../../Components/Header/Header";
import Crumbs from "../../Components/Crumbs/Crumbs";
import "./Hot.css";
import advertpic from "../../assets/advertshoe.png";
import { useState } from "react";
import { Range } from "react-range";
import { FaCaretDown } from "react-icons/fa";
import ProductCard from "../../Components/ProductCard/ProductCard";
import Footer from "../../Components/Footer/Footer"
import image1 from "../../assets/image1.png"
import shoe from "../../assets/image Product (7).png"
import cream from "../../assets/creambag.png"
import wine from "../../assets/winebag.png";
import Colored from "../../Components/Coloredbtn/Colored";
import yellow from "../../assets/yellow.png"
import down from "../../assets/down.png"
import backside from "../../assets/backside.png"
import { FiFilter } from "react-icons/fi";


const Hot = () => {
  const MIN = 0;
  const MAX = 100;
  const [values, setValues] = useState([13.99, 25.99]);




  const colors = ["blue", "red", "black", "yellow", "magenta", "pink"];
  const [selectedColor, setSelectedColor] = useState("blue");

  return (
    <div className="container">
      <Header />
      <Crumbs text="Hot Deal" />
      <div className="deal">
        <div className="sidebar">
          <div className="selections">
            <h2>Hot Deals</h2>
            <div className="cats">
              <div className="fashion-brands">
                <h4>Nike</h4>
                <p>2</p>
              </div>
              <div className="fashion-brands">
                <h4>Airmax</h4>
                <p>48</p>
              </div>
              <div className="fashion-brands">
                <h4>Nike</h4>
                <p>14</p>
              </div>
              <div className="fashion-brands">
                <h4>Adidas</h4>
                <p>15</p>
              </div>
              <div className="fashion-brands">
                <h4>Vans</h4>
                <p>23</p>
              </div>
              <div className="fashion-brands">
                <h4>All Stars</h4>
                <p>1</p>
              </div>
              <div className="fashion-brands">
                <h4>Adidas</h4>
                <p>95</p>
              </div>
            </div>
          </div>
          <div className="slider-container">
            <h3>PRICES</h3>
            <h4>
              <p>Range:</p> ${values[0].toFixed(2)} - ${values[1].toFixed(2)}
            </h4>
            <Range
              step={0.01}
              min={MIN}
              max={MAX}
              values={values}
              onChange={setValues}
              renderTrack={({ props, children }) => (
                <div {...props} className="track">
                  {children}
                </div>
              )}
              renderThumb={({ props }) => <div {...props} className="thumb" />}
            />
          </div>

          <div className="colors">
            <h1>COLOR</h1>
            <div className="colors">
              <div>
                <span className="blue"></span>
              </div>
            </div>
          </div>
          <div className="brands">
            <h1>BRAND</h1>
            <div className="brandlist">
              <div className="brand">
                <h4>Nike</h4> <p>99</p>
              </div>
              <div className="brand">
                <h4>Nike</h4> <p>99</p>
              </div>
              <div className="brand">
                <h4>Adidas</h4> <p>99</p>
              </div>
              <div className="brand">
                <h4>Siemens</h4> <p>99</p>
              </div>
            </div>
          </div>
          <button>MORE</button>
        </div>
        <div className="product-side">
          <div className="secondAdvert">
            <div className="texts">
              <h1>Adidas Men Running Sneakers</h1>
              <p>Performance and design. Taken right to the edge.</p>
              <button>SHOP NOW</button>
            </div>

            <img
              src={advertpic}
              alt=""
              className="adpic"
            />
          </div>
          <div className="bar">
            <div className="leftbar">
              <p>13 Items</p>
              <div className="sort">
                <p>Sort By</p>
                <div className="options">
                  <p>Name</p>
                  <FaCaretDown />
                </div>
              </div>
              <div className="show">
                <p>Show</p>
                <div className="options">
                  <p>12</p>
                  <FaCaretDown />
                </div>
              </div>
            </div>
              <FiFilter  className="filtericon hidden"/>
            <div className="rightbar">
              <div className="grid">
                <svg
                  width="23"
                  height="20"
                  viewBox="0 0 23 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4.42101 0H0V4H4.42101V0Z" fill="#40BFFF" />
                  <path d="M4.42101 8H0V12H4.42101V8Z" fill="#40BFFF" />
                  <path d="M4.42101 16H0V20H4.42101V16Z" fill="#40BFFF" />
                  <path d="M13.2633 0H8.84229V4H13.2633V0Z" fill="#40BFFF" />
                  <path d="M13.2633 8H8.84229V12H13.2633V8Z" fill="#40BFFF" />
                  <path d="M8.84229 16H13.2633V20H8.84229V16Z" fill="#40BFFF" />
                  <path d="M22.1051 0H17.6841V4H22.1051V0Z" fill="#40BFFF" />
                  <path d="M22.1051 8H17.6841V12H22.1051V8Z" fill="#40BFFF" />
                  <path d="M22.1051 16H17.6841V20H22.1051V16Z" fill="#40BFFF" />
                </svg>
              </div>
              <div className="flexed">
                <svg
                  width="20"
                  height="16"
                  viewBox="0 0 20 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19.8945 0H0V2H19.8945V0Z" fill="#C1C8CE" />
                  <path d="M19.8945 7H0V9H19.8945V7Z" fill="#C1C8CE" />
                  <path d="M19.8945 14H0V16H19.8945V14Z" fill="#C1C8CE" />
                </svg>
              </div>
            </div>
          </div>
          <section className="hotgrid">
             <ProductCard image={image1} title= 'Nike Air Max 270 React' price={"534,33"} originalPrice={"299,43"} isHot={'True'} rating={4}/>
          <ProductCard image={wine} title= 'Nike Air Max 270 React' price={"534,33"} originalPrice={"299,43"} isHot={true} rating={4}/>
          <ProductCard image={cream} title= 'Nike Air Max 270 React' price={"534,33"} originalPrice={"299,43"} isHot={true} rating={4}/>
          <ProductCard image={down} title= 'Nike Air Max 270 React' price={"534,33"} originalPrice={"299,43"} isHot={true} rating={4}/>
          <ProductCard image={yellow} title= 'Nike Air Max 270 React' price={"534,33"} originalPrice={"299,43"} isHot={true} rating={4}/>
          <ProductCard image={backside} title= 'Nike Air Max 270 React' price={"534,33"} originalPrice={"299,43"} isHot={true} rating={4}/>
          <ProductCard image={shoe} title= 'Nike Air Max 270 React' price={"534,33"} originalPrice={"299,43"} isHot={true} rating={4}/>
          <ProductCard image={shoe} title= 'Nike Air Max 270 React' price={"534,33"} originalPrice={"299,43"} isHot={true} rating={4}/>
          <ProductCard image={wine} title= 'Nike Air Max 270 React' price={"534,33"} originalPrice={"299,43"} isHot={true} rating={4}/>
          </section>
          <div className="numbers flex justify-center">
            <div className="setnumb flex">
           <Colored label={1}/>
           <Colored label={2}/>
           <Colored label={3}/>
           <Colored label={4}/>
           <Colored label={5}/>
            </div>
          </div>
        </div>
      </div>
        <Footer/>
    </div>
  );
};

export default Hot;
