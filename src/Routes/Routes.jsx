import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home/Home";
import Projects from "../Pages/Projects/Projects/Projects";
import AboutMe from "../Pages/AboutMe/AboutMe";
import HaveSkill from "../Pages/HaveSkill/HaveSkill";
import ContactMe from "../Pages/ContactMe/ContactMe";

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
          element: <HaveSkill></HaveSkill>
        },
        {
          path: '/resume'
        },
        {
          path: '/aboutMe',
          element: <AboutMe></AboutMe>
        },
        {
          path: 'contact',
          element: <ContactMe></ContactMe>
        }
      ]
    },
  ]);