import React from "react";
import { MdOutlineDelete } from "react-icons/md";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const Table = ({ review, index, setWishData,wishdata }) => {
  const { title, genre, year, _id,thumbnail,description,rating } = review;
  const handledelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/deletewish/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((result) => {
            if (result.deletedCount === 1) {
              const filteredData = [...wishdata].filter(singleData=> singleData._id !== id)
              setWishData(filteredData)
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <tr className="bg-base-200">
      <th>{index + 1}</th>
      <td>{title}</td>
      <td>{genre}</td>
      <td>{year}</td>
      <td>
        <MdOutlineDelete onClick={() => handledelete(_id)} />
      </td>
    </tr>
  );
};

export default Table;
