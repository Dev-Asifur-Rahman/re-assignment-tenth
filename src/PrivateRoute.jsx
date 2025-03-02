import React, { useContext } from 'react';
import { Context } from './Context/context';
import { useNavigate } from 'react-router';

const PrivateRoute = ({children}) => {
    const {loading,user} = useContext(Context)
    const navigate = useNavigate()

    function navigateHome (){
        navigate('/login')
    }

    if(loading){
        return <div className='w-full py-5 flex justify-center items-center'><span className="loading loading-spinner loading-xl text-success"></span></div> 
    }
    if(!user){
        navigateHome() 
    }
    return children
};

export default PrivateRoute;