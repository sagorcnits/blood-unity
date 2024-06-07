import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Blog from "../pages/blog/Blog";
import Dashboard from "../pages/dashboard/Dashboard";
import AdminHome from "../pages/dashboard/adminPages/adminHome/AdminHome";
import Content from "../pages/dashboard/adminPages/content/Content";
import Donations from "../pages/dashboard/adminPages/donations/Donations";
import Users from "../pages/dashboard/adminPages/users/Users";
import CreateDonation from "../pages/dashboard/donorPages/create-donation/CreateDonation";
import HomeDonor from "../pages/dashboard/donorPages/home/HomeDonor";
import MyDonation from "../pages/dashboard/donorPages/my-donation/MyDonation";
import Contact from "../pages/dashboard/shared/Contact";
import DonationEdit from "../pages/dashboard/shared/DonationEdit";
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
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      // admin Dashboard
      {
        path: "/dashboard",
        element: <AdminHome></AdminHome>,
      },

      {
        path: "/dashboard/adminHome",
        element: <AdminHome></AdminHome>,
      },

      {
        path: "/dashboard/all-users",
        element: <Users></Users>,
      },

      {
        path: "/dashboard/all-blood-donation-request",
        element: <Donations></Donations>,
      },

      {
        path: "/dashboard/content-management",
        element: <Content></Content>,
      },

      // donor dashboard

      {
        path: "/dashboard",
        element: <HomeDonor></HomeDonor>,
      },

      {
        path: "/dashboard/home",
        element: <HomeDonor></HomeDonor>,
      },

      {
        path: "/dashboard/my-donation-requests",
        element: <MyDonation></MyDonation>,
      },

      {
        path: "/dashboard/create-donation-request",
        element: <CreateDonation></CreateDonation>,
      },

      // everyone routes
      {
        path: "/dashboard/profile",
        element: <Profile></Profile>,
      },

      {
        path: "/dashboard/contact",
        element: <Contact></Contact>,
      },

      {
        path: "/dashboard/donation-edit/:id",
        element: <DonationEdit></DonationEdit>,
        loader: ({params} ) => fetch(`http://localhost:5000/donations/${params.id}`)
      },
    ],
  },
]);

export default router;
