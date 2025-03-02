import React from 'react';
import { Helmet } from 'react-helmet';
import { Outlet } from 'react-router';

const MainHome = () => {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default MainHome;