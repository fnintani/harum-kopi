import React from "react";
import menus from "./menus.js";

const Menu = () => {
  return (
    <div name="menu">
      <section className="menu" id="menu">
        <h1 className="heading">
          Menu Kami<span>popular menu</span>
        </h1>

        <div className="box-container">
          {menus.map((value) => {
            const { id, titles, descs, prices, images } = value;

            return (
              <div className="box" key={id}>
                <img src={images} alt="" />
                <div className="content">
                  <h3>{titles} </h3>
                  <p>{descs} </p>
                  <span>Rp{prices}</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Menu;
