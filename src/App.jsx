import Footer from "./layouts/Footer/Footer";
import NavBar from "./layouts/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Home from "./pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "./pages/Admin/Admin";
import Cart from "./pages/Cart/Cart";

function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route exact path="/*" element={<Home/>}/>
        <Route exact path="/administrador/*" element={<Admin/>}/>
        <Route exact path="/pedidos/*" element={<Cart/>}/>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
