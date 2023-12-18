import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home, { loader as homeLoader } from '../pages/Home';
import About from '../pages/About';
import ErrorPage from '../pages/404';
import Housing, { loader as houseLoader }  from '../pages/Housing';
import Layout from '../layout/Layout';

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
        loader: houseLoader,    
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