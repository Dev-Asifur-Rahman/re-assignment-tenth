import React from "react";
import { Link } from "react-router";

const AllDataCard = ({singleData}) => {
  
  const {title,genre,year,rating,thumbnail,_id} = singleData
  return (
    <div className="card hover:scale-[1.05] transition-transform duration-500 bg-base-100 w-[272px]  shadow-lg">
      <figure className="px-10 pt-10">
        <img
          
          src={thumbnail}
          alt="Shoes"
          className="rounded-xl h-[115px] w-[190px]"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p className="text-lg font-semibold">
          Genre : {genre}
        </p>
        <p className="font-semibold">
          Year : {year}
        </p>
        <p className="font-semibold">
          Rating : {rating}
        </p>
        <div className="card-actions">
          <Link to={`/productdetails/${_id}`}><button className="btn btn-primary">Explore Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default AllDataCard;
