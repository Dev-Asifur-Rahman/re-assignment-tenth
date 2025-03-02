import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';


import { Navigation } from 'swiper/modules';

const Slider = () => {
    return (
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper w-full sm:h-64 md:h-80 lg:h-[450px]">
        <SwiperSlide><img className='w-full h-full' src="https://i.ibb.co.com/W42v65kz/CSGO2-1024x576.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-full' src="https://i.ibb.co.com/HLfzH5tN/main-qimg-3e0422c7e3dcb94436a36dce9414aa12-lq.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-full' src="https://i.ibb.co.com/WvPKZgY5/EGS-VALORANT-Riot-Games-S1-2560x1440-1dade6e50659c8e05805cb150b349e56.jpg" alt="" /></SwiperSlide>
        <SwiperSlide className=''><img className='w-full h-full ' src="https://i.ibb.co.com/1JQKyKZ9/11077601-dota-2-linux-front-cover.jpg" alt="" /></SwiperSlide>
      </Swiper>
    );
};

export default Slider;