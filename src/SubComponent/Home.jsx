import React from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const Home = () => {
    function modal (){
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          });
    }
    return (
        <div>
            Home
            <Link to={'/login'}>Login</Link>
            <button className='btn' onClick={modal}>Open</button>
        </div>
    );
};

export default Home;