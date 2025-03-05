import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import AllDataCard from '../BasicComponents/AllDataCard';

const AllReviews = () => {
    const [data,setData] =  useState([])
    const getData = useLoaderData()
    useEffect(()=>{
        setData(getData)
    },[])
    return (
        <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center gap-y-5 my-3'>
           {data.map(singleData=><AllDataCard singleData={singleData} key={singleData._id}></AllDataCard>)} 
        </div>
    );
};

export default AllReviews;