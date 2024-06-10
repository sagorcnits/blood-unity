import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Blog from "../pages/blog/Blog";
import BlogDetails from "../pages/blog/BlogDetails";
import Dashboard from "../pages/dashboard/Dashboard";
import AdminHome from "../pages/dashboard/adminPages/adminHome/AdminHome";
import AddBlog from "../pages/dashboard/adminPages/content/AddBlog";
import Content from "../pages/dashboard/adminPages/content/Content";
import Donations from "../pages/dashboard/adminPages/donations/Donations";
import Users from "../pages/dashboard/adminPages/users/Users";
import CreateDonation from "../pages/dashboard/donorPages/create-donation/CreateDonation";
import HomeDonor from "../pages/dashboard/donorPages/home/HomeDonor";
import MyDonation from "../pages/dashboard/donorPages/my-donation/MyDonation";
import Contact from "../pages/dashboard/shared/Contact";
import DetailsAdmin from "../pages/dashboard/shared/DetailsAdmin";
import DonationEdit from "../pages/dashboard/shared/DonationEdit";
import Profile from "../pages/dashboard/shared/Profile";
import Details from "../pages/details/Details";
import DonationRequest from "../pages/donation-requests/DonationRequest";
import Funding from "../pages/funding/Funding";
import Payment from "../pages/funding/Payment";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import NotFound from "../pages/notFound/NotFound";
import Register from "../pages/register/Register";
import SearchDonor from "../pages/search-donors/SearchDonor";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <NotFound></NotFound>,
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
        path: "/details/:id",
        element: <PrivateRoute><Details></Details></PrivateRoute>,
        loader:({params}) => fetch(`https://blood-unity-server.vercel.app/donations/${params.id}`),
      },

      {
        path: "/blog",
        element: <Blog></Blog>,
      },

      {
        path: "/blog-details/:id",
        element: <BlogDetails></BlogDetails>,
        loader:({params}) => fetch(`https://blood-unity-server.vercel.app/blogs/${params.id}`),
      },

      {
        path: "/fundings",
        element: <Funding></Funding>,
      },

      {
        path: "/payment",
        element: <Payment></Payment>,
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
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      // admin Dashboard
      {
        path: "/dashboard",
        element: (
          <AdminRoute>
            <AdminHome></AdminHome>
          </AdminRoute>
        ),
      },

      {
        path: "/dashboard/adminHome",
        element: (
          <AdminRoute>
            <AdminHome></AdminHome>
          </AdminRoute>
        ),
      },

      {
        path: "/dashboard/all-users",
        element: (
          <AdminRoute>
            <Users></Users>
          </AdminRoute>
        ),
      },

      {
        path: "/dashboard/all-blood-donation-request",
        element: (
          <AdminRoute>
            <Donations></Donations>
          </AdminRoute>
        ),
      },

      {
        path: "/dashboard/content-management",
        element: (
          <AdminRoute>
            <Content></Content>
          </AdminRoute>
        ),
      },

      {
        path: "/dashboard/content-management/add-blog",
        element: (
          <AdminRoute>
            <AddBlog></AddBlog>
          </AdminRoute>
        ),
      },

      // donor dashboard

      {
        path: "/dashboard/home",
        element: (
          <PrivateRoute>
            <HomeDonor></HomeDonor>
          </PrivateRoute>
        ),
      },

      {
        path: "/dashboard/my-donation-requests",
        element: (
          <PrivateRoute>
            <MyDonation></MyDonation>
          </PrivateRoute>
        ),
      },

      {
        path: "/dashboard/create-donation-request",
        element: (
          <PrivateRoute>
            <CreateDonation></CreateDonation>
          </PrivateRoute>
        ),
      },

      // everyone routes
      {
        path: "/dashboard/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },

      {
        path: "/dashboard/contact",
        element: (
          <PrivateRoute>
            <Contact></Contact>
          </PrivateRoute>
        ),
      },

      {
        path: "/dashboard/donation-edit/:id",
        element: (
          <PrivateRoute>
            <DonationEdit></DonationEdit>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://blood-unity-server.vercel.app/donations/${params.id}`),
      },

      {
        path: "/dashboard/details-admin/:id",
        element: (
          <PrivateRoute>
            <DetailsAdmin></DetailsAdmin>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://blood-unity-server.vercel.app/donations/${params.id}`),
      },
    ],
  },
]);

export default router;
