import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import Statistics from './Components/Statistics/Statistics';
import Applied_Jobs from './Components/Applied Jobs/Applied_Jobs';
import Blog from './Components/Blog/Blog';
import JobDetails from './Components/JobDetails/JobDetails';


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
         path:'/statistics',
         element:<Statistics></Statistics>
      },
      {
        path:'/applied',
        element:<Applied_Jobs></Applied_Jobs>
      },
      {
           path: '/job/:id',
           loader:()=> fetch('../public/jobs.json'),
           element:<JobDetails></JobDetails>
           
      },
      {
        path:'/blog',
        element:<Blog></Blog>
      }
    ]
  },
 
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
