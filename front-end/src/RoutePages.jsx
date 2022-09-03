import React from 'react'
import { useRoutes } from "react-router-dom";
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import Locations from './pages/Locations.jsx';
import ContactUs from './pages/ContactUs.jsx';

export default function RoutePages() {
  return (
    useRoutes([
        { path:'/', element:<Home/> },
        { path:'/Services', element:<Services/> },
        { path:'/Locations', element:<Locations/> },
        { path:'/ContactUs', element:<ContactUs/> },
      ])
  )
}
