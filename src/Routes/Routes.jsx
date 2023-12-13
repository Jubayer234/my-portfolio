import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home/Home";
import Projects from "../Pages/Projects/Projects/Projects";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/projects',
          element: <Projects></Projects>
        },
        {
          path: '/skills',
          
        }
      ]
    },
  ]);