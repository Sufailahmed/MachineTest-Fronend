
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import Register from './Components/Register';
import Navbar from './Components/About';
import About from './Components/About';
import Admin from './Components/Admin';
import Contact from './Components/Contact';

function App() {
  return (
    <BrowserRouter>
  
    <Routes>
           <Route path='/' exact Component={Login}/>
           <Route path='/register' exact Component={Register}/>
           <Route path='/dashboard' exact Component={Dashboard}/>
           <Route path='/about' exact Component={About}/>
           <Route path='/contact' exact Component={Contact}/>
           <Route path='/admin' exact Component={Admin}/>
         
       
           </Routes>
 
 
 
    </BrowserRouter>
  );
}

export default App;
