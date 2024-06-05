import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Blog from "../pages/blog/Blog";
import Dashboard from "../pages/dashboard/Dashboard";
import CreateDonation from "../pages/dashboard/donorPages/create-donation/CreateDonation";
import HomeDonor from "../pages/dashboard/donorPages/home/HomeDonor";
import MyDonation from "../pages/dashboard/donorPages/my-donation/MyDonation";
import Profile from "../pages/dashboard/shared/Profile";
import Details from "../pages/details/Details";
import DonationRequest from "../pages/donation-requests/DonationRequest";
import Funding from "../pages/funding/Funding";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import SearchDonor from "../pages/search-donors/SearchDonor";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/search-donors",
        element: <SearchDonor></SearchDonor>,
      },

      {
        path: "/donation-requests",
        element: <DonationRequest></DonationRequest>,
      },

      {
        path: "/details",
        element: <Details></Details>,
      },

      {
        path: "/blog",
        element: <Blog></Blog>,
      },

      {
        path: "/fundings",
        element: <Funding></Funding>,
      },
    ],
  },

  {
    path: "/register",
    element: <Register></Register>,
  },

  {
    path: "/login",
    element: <Login></Login>,
  },

  {
    path:"dashboard",
    element:<Dashboard></Dashboard>,
    children:[
      {
        path:"/dashboard/home",
        element:<HomeDonor></HomeDonor>
      }, 

      {
        path:"/dashboard/profile",
        element:<Profile></Profile>
      },

      {
        path:"/dashboard/my-donation-requests",
        element:<MyDonation></MyDonation>
      },

      {
        path:"/dashboard/create-donation-request",
        element:<CreateDonation></CreateDonation>
      },

     
    ]
  }

]);

export default router;
