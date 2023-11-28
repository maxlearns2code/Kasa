import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Housing from '../pages/Housing';

function Router() {
    return (
      <div className="router">
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/housing' element={<Housing />} />
        </Routes>
        </BrowserRouter>
      </div>
    );
  }
  
  export default Router