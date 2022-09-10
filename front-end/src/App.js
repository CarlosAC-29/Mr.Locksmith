import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services.jsx';
import Locations from './pages/Locations.jsx';
import ContactUs from './pages/ContactUs.jsx';
import NotFound from './pages/NotFound.jsx';
import Navbar from './components/NavBar';
import './App.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/locations' element={<Locations />} />
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
