import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <>
      <div className="home">
        <div className="home_container">
          <img
            className="home_img"
            src="https://wallup.net/wp-content/uploads/2015/12/240611-forest-spruce-dead_trees-landscape-dark-trees-nature-pine_trees.jpg"
            alt=""
          />
          <div className="home_row">
            <Product
              id={1}
              title="The Lean Startup"
              price={29.99}
              image="https://m.media-amazon.com/images/I/61n1hm72dlL._AC_SY400_.jpg"
              rating={5}
            />
            <Product
              id={2}
              title="Dark Fantasy Choco Fills, 300g Want guaranteed delivery by Friday, May 21 ? Order within"
              price={1.99}
              image="https://m.media-amazon.com/images/I/51543pbO1hL._AC_SY200_.jpg"
              rating={4}
            />
          </div>
          <div className="home_row">
            <Product
              id={3}
              title="TP-Link WiFi 6 AX1500 Archer AX10,Smart WiFi,Triple-Core CPU, Gigabit, Dual Band, OFDMA, MU-MIMO, Compatible with Alexa, Wireless Router"
              price={99.99}
              image="https://m.media-amazon.com/images/I/51QmN8uNkgL._AC_UL480_FMwebp_QL65_.jpg"
              rating={4}
            />
            <Product
              id={4}
              title="Mellifluous Premium Reversible Velvet Dual Black Gold Color Bed for Cats & Dogs (Small, Black-Gold)"
              price={39.99}
              image="https://m.media-amazon.com/images/I/81sJVbgq6UL._AC_SY400_.jpg"
              rating={4}
            />
            <Product />
          </div>
          <div className="home_row">
            <Product
              id={5}
              title="
                            Roll over image to zoom in
                            Samsung Galaxy M42 5G (Prism Dot Gray, 6GB RAM, 128GB Storage)"
              price={150}
              image="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Samsung/SamsungM/May_brandstore/D23375528_May_SamsungGalaxy-Brand-Store_LP_PC_2.jpg"
              rating={4}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
