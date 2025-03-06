import React, { useContext, useEffect, useState } from "react";
import WishlistTable from "../BasicComponents/WishlistTable"
import { Context } from "../Context/context";
import NoDataFound from "../BasicComponents/NoDataFound";

const GameWatchlist = () => {
  const { Auth } = useContext(Context);
  const [wishdata, setWishData] = useState([]);
  useEffect(() => {
    fetch(`https://server-site-theta-six.vercel.app/mywatchlist?email=${Auth.currentUser.email}`)
      .then((res) => res.json())
      .then((result) => setWishData(result));
  }, []);
  if (wishdata.length === 0) {
    return <NoDataFound></NoDataFound>
  } else {
    return (
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Genre</th>
              <th>Year</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {wishdata.map((review, index) => (
              <WishlistTable
                review={review}
                key={index}
                index={index}
                setWishData={setWishData}
                wishdata={wishdata}
              ></WishlistTable>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
};

export default GameWatchlist;
