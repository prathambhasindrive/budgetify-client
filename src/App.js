 import { BrowserRouter as Router , Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Contact } from './pages/Contact';
import { Signup } from './pages/Signup';
import { Login } from './pages/Login';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        
          <Route exact path='/' Component={Home}></Route>
          <Route path='/about' Component={About}></Route>
          <Route path='/services' Component={Services}></Route>
          <Route path='/contact' Component={Contact}></Route>
          <Route path='/signup' Component={Signup}></Route>
          <Route path='/login' Component={Login}></Route>
        
      </Router>
    </div>
  );
}

export default App;
