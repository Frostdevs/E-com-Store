
import featuredpic from "../../assets/featured.png";
import StarRating from "../../Components/Starrating/Rating";
import Footer from "../../Components/Footer/Footer";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Search from "../../Components/Search-input/Search";
import Header from "../../Components/Header/Header";
import ProductGrid from "../../Components/ProductGrid/ProductGrid";
import Advert from "../../Components/Advert/Advert";

import "./Landingpage.css";
import Whyus from "../../Components/Whyus/Whyus";
import News from "../../Components/News/News";

const Landingpage = () => {
  //  const [count, setCount] = useState(0);

  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.4, triggerOnce: false });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [inView, controls]);

  return (
    <div className="container">
      <main className=" font-poppins">
        <Header />

        {/* The hero section */}

        <motion.div
          className="Hero"
          ref={ref}
          animate={controls}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          <div className="display">
            <h1>Super Flash Sale 50% Off</h1>
          </div>
          <section className="product-section">
            <div className="products">
              <div className="product-card">
                <div className="over-lay"></div>
                <h4>FS - QUILTED MAXI CROSS BAG</h4>
                <div className="price">
                  {" "}
                  <del className=" text-gray-600">$534.55</del>
                  <span className="discount text-red-500 ">24% off</span>
                </div>
                <h3 className="dols">$299,43</h3>
              </div>
              <div className="product-card second">
                <div className="over-lay"></div>
                <div className="second-head">
                  <h4 className="">FS - Nike Air Max 270 React...</h4>
                  <h3>$299,43</h3>
                </div>
                <div className="price second">
                  {" "}
                  <del className=" text-gray-600">$534.55</del>
                  <span className="discount  text-red-500 ">24% off</span>
                </div>
              </div>
              <div className="product-card third">
                <div className="over-lay"></div>
                <h4 className="">FS - Nike Air Max 270 React...</h4>
                <div className="price third">
                  {" "}
                  <del className=" text-gray-600">$534.55</del>
                  <span className="discount text-red-500 ">24% off</span>
                </div>
                <h3 className="nikeprice">$299,43</h3>
              </div>
            </div>
          </section>
        </motion.div>

        {/* Product grid section */}

        <section className="fashion">
          <h1>BEST SELLER</h1>
          <ProductGrid />
        </section>

        {/* Advert section */}

        <Advert />

        {/* //whyUs section */}

        <Whyus />

        {/* latest News */}

        <News />

        {/* Featured Product Section */}

        <section className="featured">
          <div className="featured-cont">
            <h1>FEATURED PRODUCTS</h1>
            <div className="featuredproduct">
              <div className="contF">
                <img src={featuredpic} alt="" />
                <div className="feat">
                  <h2>Blue Swade Nike Sneakers</h2>
                  <StarRating rating={4} />
                  <div className="tag">
                    <p>$499</p>
                    <span className="old">$599</span>
                  </div>
                </div>
              </div>
              <div className="contF">
                <img src={featuredpic} alt="" />
                <div className="feat">
                  <h2>Blue Swade Nike Sneakers</h2>
                  <StarRating rating={4} />
                  <div className="tag">
                    <p>$499</p>
                    <span className="old">$599</span>
                  </div>
                </div>
              </div>
              <div className="contF">
                <img src={featuredpic} alt="" />
                <div className="feat">
                  <h2>Blue Swade Nike Sneakers</h2>
                  <StarRating rating={4} />
                  <div className="tag">
                    <p>$499</p>
                    <span className="old">$599</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* search */}

        <Search />

        {/* Footer */}

        <Footer />
      </main>
    </div>
  );
};

export default Landingpage;
