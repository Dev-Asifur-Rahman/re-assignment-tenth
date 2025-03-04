import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';

const AllReviews = () => {
    const [data,setData] =  useState([])
    const getData = useLoaderData()
    useEffect(()=>{
        setData(getData)
    },[])
    return (
        <div>
            {data.length}
        </div>
    );
};

export default AllReviews;