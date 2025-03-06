import React, { useContext, useEffect, useRef, useState } from "react";
import { useLoaderData } from "react-router";
import AllDataCard from "../BasicComponents/AllDataCard";
import NoDataFound from "../BasicComponents/NoDataFound";

const AllReviews = () => {
  const [data, setData] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const genre = useRef();
  const getData = useLoaderData();

  useEffect(() => {
    setData(getData);
    setOriginalData(getData);
  }, []);

  const input = {
    border: "2px solid white",
    backgroundColor: "black",
    width: "250px",
  };

  const selectStyle = { backgroundColor: "white", color: "black" };

  const sort = (value) => {
    if (value === 'rating') {
      const sortedGames = [...data].sort((a, b) => b.rating - a.rating);
      setData(sortedGames);
    }
    else if(value === 'year') {
        const sortedGames = [...data].sort((a, b) => b.year - a.year);
      setData(sortedGames);
    }
    else{
        return
    }
  };

  const filterData = () => {
    const Genre = genre.current.value;
    if (Genre === "not added") {
      setData(originalData);
    } else {
      const filteredData = originalData.filter(
        (singleData) => singleData.genre === Genre
      );
      setData(filteredData);
    }
  };

  return (
    <section className="w-full ">
      <div className="w-full my-3 flex md:flex-row lg:flex-row flex-col justify-center items-center gap-1">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn m-1">
            Sort By
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-blue-400 rounded-box z-1 w-fit p-2 shadow-sm"
          >
            <li onClick={() => sort("rating")}>
              <a>Rating</a>
            </li>
            <li onClick={() => sort("year")}>
              <a>Year</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full my-3 flex md:flex-row lg:flex-row flex-col justify-center items-center gap-1">
        <select
          ref={genre}
          style={input}
          defaultValue={"not added"}
          name="genre"
          className="rounded-[8px] text-white pl-2 h-10 "
        >
          <option disabled style={selectStyle} value="not added">
            Enter Genre
          </option>
          <option style={selectStyle} value="Action">
            Action
          </option>
          <option style={selectStyle} value="RPG">
            RPG
          </option>
          <option style={selectStyle} value="Simulator">
            Simulator
          </option>
          <option style={selectStyle} value="Adventure">
            Adventure
          </option>
          <option style={selectStyle} value="Puzzle">
            Puzzle
          </option>
          <option style={selectStyle} value="Shooter">
            Shooter
          </option>
          <option style={selectStyle} value="Racing">
            Racing
          </option>
        </select>
        <button onClick={filterData} className="btn">
          Filter
        </button>
      </div>
      {data.length === 0 ? (
        <NoDataFound></NoDataFound>
      ) : (
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center gap-y-5 my-3">
          {data.map((singleData) => (
            <AllDataCard
              singleData={singleData}
              key={singleData._id}
            ></AllDataCard>
          ))}
        </div>
      )}
    </section>
  );
};

export default AllReviews;
