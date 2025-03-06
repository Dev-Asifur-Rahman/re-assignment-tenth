import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import Slider from "../BasicComponents/Slider";
import TopRatedGame from "../BasicComponents/TopRatedGame";
import Statistics from "../BasicComponents/Statistics";
import JoinCommunity from "../BasicComponents/JoinCommunity";

const Home = () => {
  const [games, setGames] = useState([]);
  useEffect(() => {
    fetch("https://server-site-theta-six.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => {
        const topRatedGames = data
          .sort((a, b) => b.rating - a.rating)
          .slice(0, 6);
        setGames(topRatedGames);
      });
  }, []);
  return (
    <div>
      <Helmet>
        <title>Chill Gamer</title>
      </Helmet>
      <Slider></Slider>
      {/* top rated game section  */}
      <section className="w-full py-8 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold text-gray-800">
            Top Rated Online Games
          </h2>
          <p className="mt-3 text-gray-600 text-lg truncate">
            Explore the most popular online games loved by players worldwide.
            From action-packed battle royales to immersive MMORPGs, these games
            offer thrilling adventures and competitive gameplay.
          </p>
        </div>
      </section>
      <TopRatedGame data={games}></TopRatedGame>
      {/* statistics section  */}
      <section className="w-full py-8 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold text-gray-800">
            Website Statistics
          </h2>
          <p className="mt-3 text-gray-600 text-lg truncate">
            Discover how our gaming community is growing with real-time
            statistics. From the number of reviews to new users, stay updated
            with our most recent data.
          </p>
        </div>
      </section>
      <Statistics></Statistics>
      <JoinCommunity></JoinCommunity>
    </div>
  );
};

export default Home;
