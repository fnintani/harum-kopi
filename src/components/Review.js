import React from "react";
import { ImStarFull } from "react-icons/im";
import { ImStarHalf } from "react-icons/im";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import reviews from "./reviews.js";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css";

const Review = () => {
  return (
    <div name="review">
      <section className="review" id="review">
        <h1 className="heading">
          Ulasan <span>what people says</span>
        </h1>

        <Swiper
          spaceBetween={15}
          pagination={{ clickable: true }}
          breakpoints={{
            1200: {
              slidesPerView: 2,
              padding: "2rem",
              type: "loop",
              rewind: true,
              keyboard: "global",
            },
            991: {
              slidesPerView: 2,
              padding: "2rem",
              type: "loop",
              rewind: true,
              keyboard: "global",
            },
            768: {
              slidesPerView: 2,
              padding: "2rem",
              type: "loop",
              rewind: true,
              keyboard: "global",
            },
            500: {
              slidesPerView: 1,
              padding: "2rem",
              type: "loop",
              rewind: true,
              keyboard: "global",
            },
            425: {
              slidesPerView: 1,
              padding: "2rem",
              type: "loop",
              rewind: true,
              keyboard: "global",
            },
          }}
        >
          {reviews.map((value) => {
            const { idk, title, desc, name, image } = value;

            return (
              <div key={idk}>
                <SwiperSlide>
                  <div className="review-slider">
                    <div className="box">
                      <img src={image} alt="customer" />
                      <div className="stars">
                        <ImStarFull />
                        <ImStarFull />
                        <ImStarFull />
                        <ImStarFull />
                        <ImStarHalf />
                      </div>
                      <p>{desc}</p>
                      <h3>{name}</h3>
                      <span>{title} </span>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            );
          })}
        </Swiper>
      </section>
      <div className="swipe">
        <AiOutlineArrowLeft />
        <h3>swipe the reviews</h3>
        <AiOutlineArrowRight />
      </div>
    </div>
  );
};

export default Review;
