import { createBrowserRouter } from "react-router";
import MainHome from "./MainComponent/MainHome";
import Home from "./SubComponent/Home";
import Login from "./SubComponent/Login";
import Error from "./MainComponent/Error";
import Register from "./SubComponent/Register";
import PrivateRoute from "./PrivateRoute";
import AllReviews from "./SubComponent/AllReviews";
import AddReviews from "./SubComponent/AddReviews";
import MyReviews from "./SubComponent/MyReviews";
import GameWatchlist from "./SubComponent/GameWatchlist"
import UpdataReview from "./SubComponent/UpdataReview";
import Details from "./SubComponent/Details";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<MainHome></MainHome>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },

            {
                path:'/allreviews',
                loader : ()=> fetch('http://localhost:5000/reviews'),
                element:<AllReviews></AllReviews>
            },
            {
                path:'/addreviews',
                element:<PrivateRoute><AddReviews></AddReviews></PrivateRoute> 
            },
            {
                path:'/updatereview/:id',
                element:<PrivateRoute><UpdataReview></UpdataReview></PrivateRoute>
            },
            {
                path:'/myreviews',
                element:<PrivateRoute><MyReviews></MyReviews></PrivateRoute> 
            },
            {
                path:'/productdetails/:id',
                loader: ({params})=> fetch(`http://localhost:5000/review/${params.id}`),
                element:<PrivateRoute><Details></Details></PrivateRoute>
            },
            {
                path:'/gamewatchlist',
                element:<PrivateRoute><GameWatchlist></GameWatchlist></PrivateRoute> 
            }
        ]
    },
    {
        path:'*',
        element:<Error></Error>
    }
])

