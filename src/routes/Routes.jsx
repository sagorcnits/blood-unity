import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Blog from "../pages/blog/Blog";
import DonationRequest from "../pages/donation-requests/DonationRequest";
import Funding from "../pages/funding/Funding";
import Home from "../pages/home/Home";

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
            path:"/donation-requests",
            element:<DonationRequest></DonationRequest>
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
