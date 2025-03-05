import React, { useContext, useEffect, useState } from "react";
import { Context } from "../Context/context";
import Table from "../BasicComponents/Table";
import NoDataFound from "../BasicComponents/NoDataFound";

const MyReviews = () => {
  const { Auth } = useContext(Context);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/myreviews?email=${Auth.currentUser.email}`)
      .then((res) => res.json())
      .then((result) => setData(result));
  }, []);
  if (data.length === 0) {
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
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
                data.map((review ,index)=><Table review={review} key={index} index={index} setData={setData} data={data}></Table>)
            }
          </tbody>
        </table>
      </div>
    );
  }
};

export default MyReviews;
