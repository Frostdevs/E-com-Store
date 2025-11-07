import React from "react";
import Header from "../../Components/Header/Header";
import Crumbs from "../../Components/Crumbs/Crumbs";
import red from "../../assets/red.png";
import back from "../../assets/backside.png";
import down from "../../assets/down.png";
import yellow from "../../assets/yellow.png";
import wine from "../../assets/winebag.png";
import StarRating from "../../Components/Starrating/Rating";
import "./Product.css";
import { FaCaretDown } from "react-icons/fa";
import image1 from "../../assets/image1.png";
import ProductCard from "../../Components/ProductCard/ProductCard";
import Footer from "../../Components/Footer/Footer";
import shoe from "../../assets/image Product (7).png";
import cream from "../../assets/creambag.png";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Product = () => {
  const [count, setCount] = useState(0);
  const handleCount = () => {
    if (count === 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  };

  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="container">
      <Header />
      <Crumbs text="Hot Deal" secondText="/ Nike Air Force" color="#33A0FF" />
      <div className="productdetails">
        <div className="info">
          <div className="realsec">
            <div className="imgsection">

              {/* product image */}

              <div className="images">
                <img
                  src={red}
                  alt=""
                  style={{ width: 375, height: 271.7, marginBottom: 134 }}
                />
              </div>

              {/* images showcased */}

              <div className="imgGlide">
                <img src={down} alt="" />
                <img src={yellow} alt="" />
                <img src={red} alt="" />
                <img src={back} alt="" />
              </div>
            </div>
            <div className="detailed">

              {/* review container */}

              <div className="reviewcont">
                <h1>Nike Airmax 270 React</h1>
                <div className="review">
                  <StarRating rating={4} />
                  <p>0 reviews</p>
                  <NavLink to="/contact">Submit a review</NavLink>
                </div>
              </div>

              {/* product prices */}

              <div className="productprice">
                <div className="prodprice">
                  <h1>$299,43</h1>
                  <p>$534,33</p>
                  <span>24% Off</span>
                </div>

                {/* asset */}

                <div className="asset">
                  <div className="availability">
                    Availability: <p>In stock</p>
                  </div>
                  <div className="accessories">
                    Category: <p>Accessories</p>
                  </div>
                  <p>Free shipping</p>
                </div>
              </div>

              {/* colors */}

              <div className="colorsect">
                <div className="color">
                  <p>Select Color:</p>
                  <div className="col">
                    <div className="dot blue"></div>
                    <div className="dot red"></div>
                    <div className="dot black"></div>
                    <div className="dot yellow"></div>
                  </div>
                </div>

                {/* sizes */}

                <div className="sizes">
                  <p>Size</p>
                  <div className="xs">
                    <p>XS</p>
                    <FaCaretDown />
                  </div>
                </div>
              </div>

              {/* quantity of products */}

              <div className="count">
                <div className="quantity">
                  <p onClick={handleCount}>-</p>
                  <h4>{count}</h4>
                  <p onClick={() => setCount(count + 1)}>+</p>
                </div>

                {/* actions */}

                <div className="act">
                  <button className="addToCart">
                    <svg
                      width="17"
                      height="18"
                      viewBox="0 0 17 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.7743 11.6966C14.2644 11.6958 14.739 11.5249 15.1173 11.2131C15.4956 10.9013 15.7541 10.468 15.8487 9.98684L16.9115 4.67018C16.973 4.36203 16.9656 4.04404 16.8896 3.73912C16.8137 3.4342 16.6712 3.14992 16.4723 2.9067C16.2734 2.66348 16.0231 2.46733 15.7395 2.33246C15.4558 2.19759 15.1458 2.12732 14.8317 2.12666H4.251V1.06333C4.251 0.781318 4.13902 0.510871 3.93971 0.311458C3.74041 0.112045 3.47011 0 3.18825 0H1.07233C0.790474 0 0.520144 0.112045 0.32084 0.311458C0.121537 0.510871 0.00958636 0.781318 0.00958636 1.06333C0.00958636 1.34534 0.121537 1.61579 0.32084 1.8152C0.520144 2.01462 0.790474 2.12666 1.07233 2.12666H2.13508V12.76C1.71429 12.7581 1.30241 12.8812 0.951618 13.1137C0.600827 13.3463 0.326889 13.6777 0.164548 14.0662C0.00220743 14.4546 -0.0412456 14.8825 0.0396836 15.2956C0.120613 15.7088 0.322283 16.0886 0.619154 16.387C0.916024 16.6854 1.29473 16.8889 1.70729 16.9717C2.11986 17.0545 2.54774 17.013 2.93668 16.8523C3.32562 16.6917 3.65813 16.4191 3.8921 16.0691C4.12608 15.7192 4.251 15.3077 4.251 14.8866H11.6573C11.6589 15.3052 11.7845 15.7139 12.0182 16.0611C12.2518 16.4083 12.583 16.6785 12.97 16.8375C13.357 16.9965 13.7823 17.0372 14.1924 16.9546C14.6025 16.8719 14.9789 16.6694 15.2742 16.3729C15.5694 16.0763 15.7702 15.6989 15.8512 15.2882C15.9322 14.8776 15.8897 14.4521 15.7293 14.0656C15.5688 13.679 15.2975 13.3487 14.9495 13.1163C14.6016 12.884 14.1926 12.76 13.7743 12.76H4.251V11.6966H13.7743ZM14.837 4.25332L13.7743 9.56998H4.251V4.25332H14.8317H14.837Z"
                        fill="#33A0FF"
                      />
                    </svg>
                    <p>Add To Cart</p>
                  </button>
                  <button className="fav">
                    <svg
                      width="17"
                      height="15"
                      viewBox="0 0 17 15"
                      fill="none"
                      onClick={toggleLike}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11.6587 2.12667C12.2725 2.12769 12.873 2.30598 13.388 2.6401C13.903 2.97423 14.3107 3.45 14.5621 4.01029C14.8134 4.57057 14.8978 5.19153 14.805 5.79862C14.7123 6.40572 14.4464 6.97311 14.0393 7.43269C13.4548 8.09196 8.47054 12.76 8.47054 12.76C8.47054 12.76 3.47568 8.09195 2.89118 7.42205C2.37558 6.84232 2.09179 6.0927 2.09413 5.31667C2.09413 4.47063 2.43001 3.65922 3.02791 3.06098C3.62582 2.46274 4.43677 2.12667 5.28233 2.12667C6.1279 2.12667 6.93885 2.46274 7.53675 3.06098C8.13466 3.65922 8.47054 4.47063 8.47054 5.31667C8.47054 4.47063 8.80642 3.65922 9.40432 3.06098C10.0022 2.46274 10.8132 2.12667 11.6587 2.12667ZM11.6587 8.67073e-06C10.5087 -0.00207447 9.38933 0.371252 8.47054 1.06334C7.41805 0.285571 6.11578 -0.0763236 4.81317 0.0469967C3.51056 0.170317 2.29919 0.770207 1.41117 1.73169C0.52316 2.69317 0.0209117 3.94867 0.00063843 5.25768C-0.0196349 6.56668 0.443547 7.83711 1.30136 8.82565C1.89862 9.51044 5.82965 13.1938 7.01991 14.3061C7.41365 14.6744 7.93252 14.8794 8.47157 14.8794C9.01062 14.8794 9.52957 14.6744 9.9233 14.3061C11.1093 13.1949 15.0244 9.52106 15.6291 8.83734C16.306 8.07102 16.7475 7.12566 16.9009 6.11456C17.0543 5.10346 16.913 4.06956 16.494 3.13679C16.0749 2.20402 15.3959 1.41196 14.5383 0.855594C13.6806 0.299227 12.6808 0.00218201 11.6587 8.67073e-06Z"
                        fill={isLiked ? "#FF0000" : "#33A0FF"}
                        style={{
                          transition: "fill 0.3s ease-in-out",
                        }}
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* sharing on socials */}

              <div className="social flex gap-2.5 pt-5">
                <button className="fb flex items-center gap-3">
                  <svg
                    width="9"
                    height="17"
                    viewBox="0 0 9 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.262499 8.56832H2.02452V15.8287C2.02452 15.8976 2.05185 15.9635 2.10048 16.0122C2.14911 16.0609 2.21506 16.0882 2.28383 16.0882H5.27226C5.34103 16.0882 5.40698 16.0609 5.45561 16.0122C5.50424 15.9635 5.53157 15.8976 5.53157 15.8287V8.60235H7.55821C7.62176 8.60225 7.68307 8.5788 7.73048 8.53646C7.77789 8.49412 7.80811 8.43583 7.8154 8.37267L8.12359 5.69945C8.12778 5.66315 8.12427 5.62636 8.11326 5.59151C8.10225 5.55666 8.08401 5.52453 8.05973 5.49722C8.03545 5.46991 8.00567 5.44805 7.97236 5.43306C7.93904 5.41807 7.90293 5.41029 7.8664 5.41023H5.52838V3.73548C5.52838 3.2304 5.80045 2.97414 6.33607 2.97414H7.86215C7.93093 2.97414 7.99688 2.9468 8.04551 2.89814C8.09414 2.84949 8.12147 2.78349 8.12147 2.71468V0.261579C8.12204 0.193131 8.09555 0.127231 8.04778 0.078236C8.00001 0.0292405 7.93481 0.00111976 7.8664 0L5.76113 0H5.66441C4.69496 0.00342293 3.75923 0.356404 3.02882 0.994214C2.68415 1.29558 2.4197 1.6779 2.25925 2.10683C2.09879 2.53575 2.04735 2.99784 2.10954 3.45157V5.41129H0.259304C0.190531 5.41129 0.124578 5.43863 0.0759483 5.48728C0.0273185 5.53594 7.41304e-10 5.60193 7.41304e-10 5.67074V8.30887C-2.59363e-06 8.34321 0.00680464 8.37721 0.020035 8.4089C0.0332654 8.44059 0.0526576 8.46933 0.0770753 8.49347C0.101493 8.5176 0.130453 8.53664 0.162283 8.54949C0.194113 8.56234 0.228179 8.56874 0.262499 8.56832Z"
                      fill="white"
                    />
                  </svg>
                  <p>Share on Facebook</p>
                </button>
                <button className="twit flex items-center gap-3.5">
                  <svg
                    width="18"
                    height="13"
                    viewBox="0 0 18 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.2826 1.49908C16.6327 1.75441 15.9454 1.92415 15.2417 2.00309C15.9836 1.60704 16.5383 0.979753 16.8007 0.240098C16.107 0.610526 15.3481 0.871603 14.5567 1.01207C14.0711 0.544166 13.4403 0.218679 12.7464 0.0779647C12.0524 -0.0627495 11.3276 -0.0121773 10.666 0.223102C10.0045 0.458381 9.43688 0.867474 9.03711 1.39715C8.63735 1.92683 8.42392 2.55257 8.42458 3.19296C8.42199 3.43741 8.44972 3.68135 8.50726 3.92027C7.09779 3.85797 5.7188 3.52856 4.46043 2.95358C3.20206 2.3786 2.09264 1.57099 1.20469 0.583554C0.748677 1.28524 0.607438 2.1172 0.809827 2.90948C1.01222 3.70177 1.54296 4.39459 2.29364 4.84643C1.73297 4.83303 1.18409 4.69846 0.693289 4.45406V4.48915C0.694048 5.22526 0.976242 5.93869 1.49244 6.50955C2.00864 7.0804 2.72738 7.47388 3.52786 7.62383C3.22464 7.69624 2.91206 7.732 2.59836 7.73017C2.37323 7.73385 2.14831 7.71567 1.92751 7.67594C2.15617 8.30857 2.59688 8.86191 3.18906 9.25986C3.78124 9.65781 4.4958 9.88085 5.23451 9.89829C3.98186 10.7795 2.43768 11.2578 0.848009 11.2572C0.564595 11.259 0.281345 11.2444 0 11.2136C1.61944 12.1531 3.50643 12.6502 5.43293 12.6449C6.75956 12.6532 8.07481 12.4241 9.30229 11.971C10.5298 11.5178 11.645 10.8496 12.5832 10.0051C13.5214 9.16065 14.2639 8.15675 14.7675 7.05176C15.2711 5.94676 15.5259 4.76269 15.5169 3.56831C15.5169 3.42689 15.5169 3.29078 15.5039 3.15574C16.2039 2.70557 16.8066 2.14415 17.2826 1.49908Z"
                      fill="white"
                    />
                  </svg>
                  <p>Share on Twitter</p>
                </button>
              </div>
            </div>
          </div>

          {/* product information */}

          <div className="information">
            <ul className="head">
              <li>Product Infomation</li>
              <li>
                Reviews <span>0</span>
              </li>
              <li>Another tab</li>
            </ul>
            <div className="divi">
              <span className="filled"></span>
            </div>
            <div className="para">
              <div className="para1">
                <p>
                  air max are always very comfortable fit, clean and just
                  perfect in every way. just the box was too small and scrunched
                  the sneakers up a little bit, not sure if the box was always
                  this small but the 90s are and will always be one of my
                  favorites.
                </p>
              </div>
              <div className="para1">
                <p>
                  air max are always very comfortable fit, clean and just
                  perfect in every way. just the box was too small and scrunched
                  the sneakers up a little bit, not sure if the box was always
                  this small but the 90s are and will always be one of my
                  favorites.
                </p>
              </div>
              <div className="para1">
                <p>
                  air max are always very comfortable fit, clean and just
                  perfect in every way. just the box was too small and scrunched
                  the sneakers up a little bit, not sure if the box was always
                  this small but the 90s are and will always be one of my
                  favorites.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* best product */}

        <div className="best">
          <h1>BEST SELLER</h1>
          <div className="bestprod">
            <img src={image1} alt="" />
            <div className="pricing">
              <StarRating rating={4} />
              <div className="spanedprice">
                <p>$499</p>
                <span className=" ">$599</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* related product */}
      
      <section className="related">
        <h1>RELATED PRODUCTS</h1>
        <div className="relatedproducts flex gap-[33px]">
          <ProductCard
            image={image1}
            title="Nike Air Max 270 React"
            price={"534,33"}
            originalPrice={"299,43"}
            isHot={"True"}
            rating={4}
          />
          <ProductCard
            image={wine}
            title="Nike Air Max 270 React"
            price={"534,33"}
            originalPrice={"299,43"}
            isHot={false}
            rating={4}
          />
          <ProductCard
            image={cream}
            title="Nike Air Max 270 React"
            price={"534,33"}
            originalPrice={"299,43"}
            isHot={false}
            rating={4}
          />
          <ProductCard
            image={shoe}
            title="Nike Air Max 270 React"
            price={"534,33"}
            originalPrice={"299,43"}
            isHot={false}
            rating={4}
          />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Product;
