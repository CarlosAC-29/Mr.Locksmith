
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services.jsx';
import Locations from './pages/Locations.jsx';
import ContactUs from './pages/ContactUs.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/services' element={<Services />}/>
        <Route path='/locations' element={<Locations />}/>
        <Route path='/contact-us' element={<ContactUs />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
