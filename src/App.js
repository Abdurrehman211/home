import { BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import Portfolio from './portfolio.jsx';
import Services from './Services.jsx';
import Navbar from './Navbar.jsx';
 import { Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/home" element={<Portfolio/>} />
        <Route  path="/services" element={<Services />} />
        </Routes> 
        {/* <Footer /> */}
      </BrowserRouter>
      <Portfolio/>
    </div>
  );
}

export default App;
