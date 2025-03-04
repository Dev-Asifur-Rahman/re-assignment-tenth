import React from 'react';
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2';
import Slider from '../BasicComponents/Slider';

const Home = () => {
  
    return (
        <div>
           <Helmet>
            <title>Chill Gamer</title>
           </Helmet>
            <Slider></Slider>

        </div>
    );
};

export default Home;