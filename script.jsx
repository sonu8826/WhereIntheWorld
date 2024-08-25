import { createRoot } from 'react-dom/client'
import App from './App'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Contact from './components/Contact';
import Home from './components/Home';
import ErrorPage from './components/ErrorPage';
import SingleCountryDetails from './components/SingleCountryDetails';


const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      errorElement: <ErrorPage />,
      children : [
        {
            path : '/',
            element : <Home></Home>   //Error here - Resolved 
        },
        {
          path : '/contact',
          element : <Contact></Contact>//Error here - Resolved
      },
      {
        path : '/:country',
        element : <SingleCountryDetails></SingleCountryDetails>  //Error here - Resolved
    }
      ]
    },
  ]);

const root = createRoot(document.querySelector("#root"))
root.render(
<RouterProvider router={router} />
)