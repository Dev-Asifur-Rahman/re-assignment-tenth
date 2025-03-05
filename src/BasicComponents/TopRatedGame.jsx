import React from 'react';
import AllDataCard from './AllDataCard';

const TopRatedGame = ({data}) => {
    return (
        <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center gap-y-5 my-3'>
           {data.map(singleData=><AllDataCard singleData={singleData} key={singleData._id}></AllDataCard>)} 
        </div>
    );
};

export default TopRatedGame;