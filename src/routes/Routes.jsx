import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
        {
            path:"/",
            element:<h1>Home</h1>
        },

        {
            path:"/blog",
            element:<h1>Blog</h1>
        },
    ]
  },
]);

export default router;
