import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Blog from "../pages/blog/Blog";
import Details from "../pages/details/Details";
import DonationRequest from "../pages/donation-requests/DonationRequest";
import Funding from "../pages/funding/Funding";
import Home from "../pages/home/Home";
import SearchDonor from "../pages/search-donors/SearchDonor";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
        {
            path:"/",
            element:<Home></Home>
        },

        {
            path:"/search-donors",
            element:<SearchDonor></SearchDonor>
        },

        {
            path:"/donation-requests",
            element:<DonationRequest></DonationRequest>
        },

        {
            path:"/details",
            element:<Details></Details>
        },

        {
            path:"/blog",
            element:<Blog></Blog>
        },

        {
            path:"/fundings",
            element:<Funding></Funding>
        },
    ]
  },
]);

export default router;
