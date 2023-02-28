import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import QrScanner from './components/QrScanner';
import Login from './components/Login';
import Register from './components/Register';
import AddProduct from './components/AddProduct';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
     <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/qrscanner" element={<QrScanner/>}/>
      <Route path='/' element={<Login />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/register' element={<Register />}/>
      <Route path='/aboutus' element={<AboutUs />}/>
      <Route path='/contactus' element={<ContactUs />}/>
      <Route path='/addproduct' element={<AddProduct />}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
