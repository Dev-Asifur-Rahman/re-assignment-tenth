import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import "./details.css";
import { Rating,Star } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Details = () => {
  const [item, setItem] = useState({});
  const data = useLoaderData();
  useEffect(() => {
    setItem(data);
  }, []);
  const myStyles = {
    itemShapes: Star,
    activeFillColor: "#ffb700",
    inactiveFillColor: "#fbf1a9",
  };
  return (
    <div className="w-full flex justify-center items-center flex-col md:flex-col lg:flex-row lg:my-3 md:my-3 mb-3 lg:gap-5">
      <div className="w-screen md:w-[580px] lg:w-[580px] h-[220px] md:h-[420px] lg:h-[420px] ">
        <img
          src={item.thumbnail}
          className="h-full w-full lg:rounded-2xl md:rounded-2xl"
          alt="Product"
        />
      </div>
      <div className="product_info">
        <div className="seller_info"></div>
        <div className="product_title">{item.title}</div>
        <div className="product_model">
          Rating :{" "}
          {
            <Rating
              style={{ maxWidth: 130 }}
              value={item.rating}
              itemStyles={myStyles}
              readOnly
            />
          }
        </div>
        <div className="product_price">Genre : {item.genre}</div>
        <div className="product_descr">{item.description}</div>
        <div className="product_color">Year: {item.year}</div>
        <div className="product_email">{item.email}</div>
        <div className="product_contact">Added : {item.name}</div>
        <div className="add_to_cart">Add to cart</div>
      </div>
    </div>
  );
};

export default Details;
