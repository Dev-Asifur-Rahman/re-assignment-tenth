import React from "react";

const Statistics = () => {
  return (
    <div className="w-full bg-gray-100 py-10">
      <div className="stats stats-vertical md:stats-horizontal shadow p-6 rounded-lg w-full max-w-full">
        <div className="stat flex-1 text-center">
          <div className="stat-title text-gray-600">Total Reviews</div>
          <div className="stat-value text-blue-600">15K</div>
          <div className="stat-desc text-gray-500">From gamers worldwide</div>
        </div>

        <div className="stat flex-1 text-center">
          <div className="stat-title text-gray-600">New Users</div>
          <div className="stat-value text-green-600">3,500</div>
          <div className="stat-desc text-gray-500">↗︎ 450 (15%) this month</div>
        </div>

        <div className="stat flex-1 text-center">
          <div className="stat-title text-gray-600">Games Reviewed</div>
          <div className="stat-value text-purple-600">980+</div>
          <div className="stat-desc text-gray-500">New games added weekly</div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
