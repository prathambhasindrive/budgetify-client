import React , { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Signup from './pages/Signup';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import { AppContext } from './Context/AppContext';
import './App.css';
import Spinner from './components/Spinner';

function App() {
  const { isOpen } = useContext(AppContext);
  return (
      <Router>
    <div className="App">
      <Navbar />
      {/* <Spinner /> */}
        {!isOpen && (
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        )}
    </div>
      </Router>
  );
}

export default App;
