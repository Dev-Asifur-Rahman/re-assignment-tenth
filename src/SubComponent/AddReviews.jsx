import React, { useContext } from "react";
import { Context } from "../Context/context";
import { toast } from "react-toastify";

const AddReviews = () => {
  const input = { border: "2px solid white", width: "250px" };

  const selectStyle = { backgroundColor: "white", color: "black" };

  const { Auth } = useContext(Context);

  const submitReview = (e) => {
    e.preventDefault();
    const target = e.target;
    const thumbnail = target.thumbnail.value;
    const title = target.title.value;
    const description = target.description.value;
    const rating = target.rating.value;
    const year = target.year.value;
    const genre = target.genre.value;
    const email = target.email.value;
    const name = target.name.value;
    if (rating >= 1 && rating <= 5) {
      fetch("http://localhost:5000/addreview", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          thumbnail,
          title,
          description,
          rating,
          year,
          genre,
          email,
          name,
        }),
      })
        .then((res) => res.json())
        .then((result) => {
          toast.success("Successfully Added");
          target.reset();
        })
        .catch((error) => {
          toast.error("Submission Error!");
        });
    } else {
      alert("Invalid rating");
    }
  };

  return (
    <form
      onSubmit={submitReview}
      className="bg-[#34495e] w-full py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 place-items-center content-center gap-y-10"
    >
      <input
        required
        style={input}
        type="text"
        placeholder="Enter Thumbnail"
        name="thumbnail"
        className="rounded-[8px] text-white pl-2 h-10"
      />
      <input
        required
        style={input}
        type="text"
        placeholder="Game Title"
        name="title"
        className="rounded-[8px] text-white pl-2 h-10"
      />
      <textarea
        name="description"
        required
        style={input}
        placeholder="Description"
        className="rounded-[8px] text-white pl-2 h-10"
      ></textarea>
      <input
        required
        style={input}
        type="text"
        placeholder="Rating"
        name="rating"
        className="rounded-[8px] text-white pl-2 h-10"
      />
      <input
        required
        style={input}
        type="text"
        placeholder="Publish Year"
        name="year"
        className="rounded-[8px] text-white pl-2 h-10"
      />
      <select
        style={input}
        defaultValue={"not added"}
        name="genre"
        className="rounded-[8px] text-white pl-2 h-10 "
      >
        <option disabled style={selectStyle} value="not added">
          Enter Genre
        </option>
        <option style={selectStyle} value="action">
          Action
        </option>
        <option style={selectStyle} value="rpg">
          RPG
        </option>
        <option style={selectStyle} value="simulator">
          Simulator
        </option>
        <option style={selectStyle} value="adventure">
          Adventure
        </option>
        <option style={selectStyle} value="puzzle">
          Puzzle
        </option>
        <option style={selectStyle} value="shooter">
          Shooter
        </option>
        <option style={selectStyle} value="racing">
          Racing
        </option>
      </select>
      <input
        style={input}
        defaultValue={Auth.currentUser.email}
        type="email"
        placeholder="Enter Email"
        name="email"
        className="rounded-[8px] text-white pl-2 h-10"
      />
      <input
        defaultValue={Auth.currentUser.displayName}
        style={input}
        type="text"
        placeholder="Your Name"
        name="name"
        className="rounded-[8px] text-white pl-2 h-10"
      />
      <button className="btn col-span-2 w-[200px] rounded-[10px] bg-amber-400">
        Submit
      </button>
    </form>
  );
};

export default AddReviews;
