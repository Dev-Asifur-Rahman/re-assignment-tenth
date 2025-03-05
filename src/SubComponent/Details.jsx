import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import "./details.css";
import { Rating,Star } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

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

  const watchlist = (id,object)=>{
    fetch('http://localhost:5000/addwatchlist',{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body: JSON.stringify({id,object})
    }).then(res=>res.json()).then(result=>{
      result.acknowledged == true ? Swal.fire({
        title: "Successfully Added to Wishlist!",
        icon: "success",
        draggable: true
      }):Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You Already Added!",
      });
    })
  }

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
        <div onClick={()=>watchlist(item._id,item)} className="add_to_cart">Add to Wishlist</div>
      </div>
    </div>
  );
};

export default Details;
