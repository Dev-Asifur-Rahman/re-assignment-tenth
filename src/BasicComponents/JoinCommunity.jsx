import React from "react";

const JoinCommunity = () => {
  return (
    <section className="w-full py-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
      <div className="max-w-6xl mx-auto text-center px-6">
        <h2 className="text-4xl font-extrabold text-white">
          Join the Gaming Revolution
        </h2>
        <p className="mt-4 text-lg text-white opacity-80">
          Don’t just play games—become a part of the community! Share your
          reviews, connect with fellow gamers, and experience the joy of playing
          together.
        </p>

        <div className="mt-10">
          <button className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-gray-900 px-10 py-3 rounded-full text-lg font-semibold hover:from-yellow-500 hover:to-pink-600 transition duration-300 shadow-xl">
            Start Reviewing Now
          </button>
        </div>

        {/* Unique Split Layout */}
        <div className="mt-12 flex flex-col lg:flex-row justify-between items-center gap-8">
          {/* Right Information Section */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h3 className="text-3xl font-bold text-white mb-4">
              Why Join Our Community?
            </h3>
            <p className="text-lg text-white opacity-90 mb-6">
              Unlock a world of opportunities by becoming part of our gaming
              community. Whether you're looking to share your insights or
              discover new games, we’ve got it all. Here’s why you should join:
            </p>

            <ul className="text-left space-y-4 text-lg text-white opacity-80">
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 text-yellow-300 mr-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Share your reviews on the latest games.
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 text-yellow-300 mr-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Connect with gamers from around the world.
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 text-yellow-300 mr-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Stay updated with the latest game releases.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinCommunity;
