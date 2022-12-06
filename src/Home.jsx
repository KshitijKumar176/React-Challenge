import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/810Jo9IhfsL._SX3000_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id={123}
            title="iQOO Z6 Lite 5G"
            price={25000}
            rating={3}
            image="https://m.media-amazon.com/images/I/4105IiC5tDL._AC_SY200_.jpg"
          />
          <Product
            id={124}
            title="Xiaomi Notebook Pro"
            price={70000}
            rating={4}
            image="https://m.media-amazon.com/images/I/41fsUIG2fwL._AC_SY200_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id={125}
            title="Sony Wireless Headphones"
            price={3500}
            rating={3}
            image="https://images-eu.ssl-images-amazon.com/images/I/21Z8UFAT0BL._AC_SR400,600_.jpg"
          />
          <Product
            id={126}
            title="American Tourister BAG"
            price={2000}
            rating={4}
            image="https://images-eu.ssl-images-amazon.com/images/I/81KEKEDFUcL._AC_UL450_SR450,320_.jpg"
          />
          <Product
            id={127}
            title="Allen Solly Men SweatShirt"
            price={2500}
            rating={3}
            image="https://images-eu.ssl-images-amazon.com/images/I/71KJoiTgIeL._AC_UL600_SR600,400_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id={128}
            title="Nike Air Force 1"
            price={80000}
            rating={4}
            image="https://m.media-amazon.com/images/I/511zbSoYhQL._AC_UL320_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
