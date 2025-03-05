import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';


import { Navigation } from 'swiper/modules';

const Slider = () => {
    return (
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper w-full sm:h-64 md:h-80 lg:h-[500px]">
        <SwiperSlide><img className='w-full h-full' src="https://i.ibb.co.com/W42v65kz/CSGO2-1024x576.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-full' src="https://i.ibb.co.com/p6wjZXbM/fortnite-1920x1080-hd-hzyi33y8l8xpravs.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-full' src="https://i.ibb.co.com/WvPKZgY5/EGS-VALORANT-Riot-Games-S1-2560x1440-1dade6e50659c8e05805cb150b349e56.jpg" alt="" /></SwiperSlide>
        <SwiperSlide className=''><img className='w-full h-full ' src="https://i.ibb.co.com/BK7DPF4w/thumb-1920-1291619.png" alt="" /></SwiperSlide>
      </Swiper>
    );
};

export default Slider;