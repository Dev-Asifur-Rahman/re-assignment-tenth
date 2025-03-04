import React from "react";
import { MdOutlineDelete } from "react-icons/md";
import { MdOutlineUpdate } from "react-icons/md";
import Swal from "sweetalert2";

const Table = ({ review, index, setData,data }) => {
  const { title, genre, year, _id } = review;
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
        fetch(`http://localhost:5000/delete/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((result) => {
            if (result.deletedCount === 1) {
              const filteredData = [...data].filter(singleData=> singleData._id !== id)
              setData(filteredData)
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

  function handleupdate() {
    console.log("update");
  }
  return (
    <tr className="bg-base-200">
      <th>{index + 1}</th>
      <td>{title}</td>
      <td>{genre}</td>
      <td>{year}</td>
      <td>
        <MdOutlineUpdate onClick={handleupdate} />
      </td>
      <td>
        <MdOutlineDelete onClick={() => handledelete(_id)} />
      </td>
    </tr>
  );
};

export default Table;
