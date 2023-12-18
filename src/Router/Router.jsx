import { createBrowserRouter, RouterProvider, } from 'react-router-dom'
import Layout from '../components/Layout'
import ErrorPage from '../pages/404'
import Home, { loader as homeLoader } from '../pages/Home'
import About from '../pages/About'
import Housing, { loader as housingLoader } from '../pages/Housing'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: homeLoader,    
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/housing/:id',
        element: <Housing />,
        loader: housingLoader,    
      },
    ],
  },
]);

function Router() {
    return (
      <div className="router">
         <RouterProvider router={router} />
      </div>
    );
  }
  
  export default Router