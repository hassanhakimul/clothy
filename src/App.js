import './App.css'
import { Routes,Route } from "react-router-dom";
import Header from "./pages/Header/Header";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import NotFound from "./pages/NotFound/NotFound";
import UpHeader from './pages/Header/UpHeader';
import Footer from './Footer/Footer';
import EidDay from './pages/Eid/EidDay';
import Cart from './pages/Cart/Cart';

function App() {
  return (
    <div className="App">
      <UpHeader/>
      <Header/>
    <Routes>
      <Route path="/" element={<Home/>} ></Route>
      <Route path="/eid" element={<EidDay/>} ></Route>
      <Route path="/login" element={<Login/>} ></Route>
      <Route path="/cart" element={<Cart/>} ></Route>
      <Route path="*" element={<NotFound/>} ></Route>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
