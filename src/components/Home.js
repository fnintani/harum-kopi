import React from "react";
import { useState } from "react";
import Picone from "../assets/image/home-img-1-one.png";
import Picfour from "../assets/image/home-img-1-four.png";
import Pictwo from "../assets/image/home-img-1-two.png";
import Picthree from "../assets/image/home-img-1-three.png";

const Home = () => {
  const imgs = [
    { id: 0, value: Picone },
    { id: 1, value: Picfour },
    { id: 2, value: Pictwo },
    { id: 3, value: Picthree },
  ];
  const [sliderData, setSliderData] = useState(imgs[0]);
  const handleClick = (index) => {
    const slider = imgs[index];
    setSliderData(slider);
  };

  return (
    <div name="home">
      <section className="home" id="home">
        <div className="row">
          <div className="content">
            <h3>Kopi sempurna untuk semua</h3>
            <a href="/" className="btn">
              {" "}
              Beli sekarang
            </a>
          </div>
          <div className="image">
            <img
              src={sliderData.value}
              alt="coffee"
              className="main-home-image"
            />
          </div>
        </div>

        <div className="pick">click your favorite coffee</div>

        <div className="image-slider">
          {imgs.map((data, i) => (
            <img
              key={data.id}
              src={data.value}
              onClick={() => handleClick(i)}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
