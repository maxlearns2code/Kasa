import {BrowserRouter, createBrowserRouter, RouterProvider, Routes, Route} from 'react-router-dom';
import Home, { loader as homeLoader } from '../pages/Home';
import About from '../pages/About';
import ErrorPage from '../pages/404';
import Housing from '../pages/Housing';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
    loader: homeLoader,    
  },
  {
    path: '/about',
    element: <About />,
    errorElement: <ErrorPage />,    
  },
  {
    path: '/housing/:id',
    element: <Housing />,
    errorElement: <ErrorPage />,    
  },
]);


function Router() {
    return (
      <div className="router">
         <RouterProvider router={router} />
        {/*<BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path='/housing/:id' element={<Housing />} />
        </Routes>
    </BrowserRouter>*/}
      </div>
    );
  }
  
  export default Router