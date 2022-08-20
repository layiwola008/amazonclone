import React from "react";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <div className="home_container">
        <div className="home_row">
          <Product
            className="home_product"
            id="1"
            cat="men's bag"
            title="Amazon Basics Golf Duffel Bag"
            price={56}
            image="https://m.media-amazon.com/images/I/91duiwhsLkL._AC_SX522_.jpg"
            rating={4}
            desc="Handy accessory pockets; separate shoe storage with small holes for breathability"
          />
          <Product
            className="home_product"
            id="2"
            cat="men's cloth"
            title="Golf Shirt Quick Dry Short Sleeve Athletic Workout T-Shirts"
            price={34}
            image="https://m.media-amazon.com/images/I/61SIwxvyUpL._AC_UX342_.jpg"
            rating={4}
            desc="Quick Dry & Sun Protection: Ultral soft and comfy , light weight, high sweat absorption and UPF 50+ technology which moves sweat away from your skin freely cool during sport activity."
          />
          <Product
            className="home_product"
            id="3"
            cat="men's cloth"
            title="Flannel Shirt Jacket with Hood Long Sleeve Shirts"
            price={64}
            image="https://m.media-amazon.com/images/I/814-GTS2d9L._AC_UX466_.jpg"
            rating={4}
            desc="Windproof: Padded with quilted polyester to keep wind out and create extra warmth while also creating breathability, it is a very classic flannel shirt jacket."
          />
          <Product
            className="home_product"
            id="4"
            cat="men's cloth"
            title="Long Sleeve Dress Shirt Solid Slim Fit Casual Business Shirts"
            price={53}
            image="https://m.media-amazon.com/images/I/61DHYW4RBhL._AC_SX342._SX._UX._SY._UY_.jpg"
            rating={5}
            desc="Formal Dress Shirt for Men/Various Colors/Fitted/Please note that body builds vary by person, therefore, detailed size information should be reviewed."
          />
        </div>
        <img
          src="https://links.papareact.com/dyz"
          alt=""
          className="promoBanner"
        />
        <div className="home_row">
          <Product
            className="home_product"
            id="6"
            cat="jewelry"
            title="AnuClub Eternity Moissanite Ring"
            price={64}
            image="https://m.media-amazon.com/images/I/61m9fBN1kxL._AC_UX466_.jpg"
            rating={5}
            desc="Classic minimalist band design, Eternity Moissanite ring, excellent eight hearts and arrows, round brilliant cut is the best shape to reflect lights in and out."
          />
          <Product
            className="home_product"
            id="5"
            cat="jewelry"
            title="John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet"
            price={89}
            image="https://m.media-amazon.com/images/I/7192GlcVjeL._AC_UY500_.jpg"
            rating={4}
            desc="From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl."
          />
          <Product
            className="home_product"
            id="7"
            cat="jewelry"
            title="Sterling Silver Tree of Life Necklace for Women"
            price={35}
            image="https://m.media-amazon.com/images/I/61rtob9bN3L._AC_UX522_.jpg"
            rating={5}
            desc="Meaningful Jewelry for Women Girls: Tree of life is a symbol of connection to all things."
          />
        </div>
        <div className="home_row">
          <Product
            className="home_product"
            id="8"
            cat="electronics"
            title="SAMSUNG 49-inch Odyssey G9 Gaming Monitor"
            price={1255}
            image="https://m.media-amazon.com/images/I/61SQz8S+fEL._AC_SX569_.jpg"
            rating={5}
            desc="From deepest blacks to vivid colors, Samsung QLED ensures pixel perfect picture quality with every frame."
          />
        </div>
        <div className="home_row">
          <Product
            className="home_product"
            id="9"
            cat="electronics"
            title="Potensic T25 Drone with 2K Camera for Adults"
            price={135}
            image="https://m.media-amazon.com/images/I/61z0YTen2hL._AC_SX679_.jpg"
            rating={3}
            desc="Follow Me Mode & Dual GPS free your hands, while GPS drone automatically follow you, simultaneously capturing all the videos & photos."
          />
          <Product
            className="home_product"
            id="10"
            cat="electronics"
            title="Echo Dot (4th Gen) Smart speaker with clock and Alexa "
            price={59}
            image="https://m.media-amazon.com/images/I/51MzOVciT3L._AC_SX569_.jpg"
            rating={5}
            desc="Control your smart home - Use your voice to turn on lights, adjust thermostats, and lock doors with compatible devices."
          />

          <Product
            className="home_product"
            id="11"
            cat="electronics"
            title="Seagate Game Drive 4TB External Hard Drive Portable HDD"
            price={108}
            image="https://m.media-amazon.com/images/I/81F9CMDhmaL._AC_SX569_.jpg"
            rating={5}
            desc="Experience no lag gaming and full throttle performance with an external hard drive"
          />
          <Product
            className="home_product"
            id="12"
            cat="electronics"
            title="SAMSUNG 34-Inch Ultrawide QHD Computer Monitor"
            price={558}
            image="https://m.media-amazon.com/images/I/71mzADnWWrL._AC_SX569_.jpg"
            rating={4}
            desc="Connect via HDMI, DisplayPort, or USB Type-C to streamline connectivity and transmit transmit power, data and digital display with just one port."
          />
        </div>
        <div className="home_row">
          <Product
            className="home_product"
            id="13"
            cat="women's clothing"
            title="Long Sleeve Striped Drawstring Striped Hoodie Top"
            price={35}
            image="https://m.media-amazon.com/images/I/518UKJ1QZjL._AC_UX522_.jpg"
            rating={3}
            desc="Women's hoodie sweatshirt in stretchy soft fabric for fall and winter evenings"
          />
          <Product
            className="home_product"
            id="14"
            cat="women's clothing"
            title="Doublju Lightweight Thin Zip-Up Hoodie Jacket "
            price={45}
            image="https://m.media-amazon.com/images/I/811CU8IzD5L._AC_UY500_.jpg"
            rating={2}
            desc="Premium Casual Hoodie, We are used high quality color & fabric an essential closet"
          />
          <Product
            className="home_product"
            id="15"
            cat="women's clothing"
            title="Long Sleeve Formal Notch Lapel Button Down Blazer"
            price={46}
            image="https://m.media-amazon.com/images/I/71ECx-jrsuL._AC_SY500._SX._UX._SY._UY_.jpg"
            rating={5}
            desc="Womens work outfits are highly versatile and customizable, making them easily"
          />
          <Product
            className="home_product"
            id="16"
            cat="women's clothing"
            title="Long Sleeve Blazer Open Front Cardigan Jacket"
            price={45}
            image="https://m.media-amazon.com/images/I/61wJcRE1juL._AC_UY500_.jpg"
            rating={4}
            desc="Classic Design: Open front with a single front button, long sleeve, solid color"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
