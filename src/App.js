import "bulma/css/bulma.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
//import Home from "./components/Home/Home";
import Error from "./components/Error/Error";
import Nosotros from "./components/Nosotros/Nosotros";
import Reparaciones from "./components/Reparaciones/Reparaciones";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import { CartProvider } from "./context/CartContext";

function App(){
  return (
      <div className="App">
        <BrowserRouter>
          <CartProvider>
          <NavBar/>
            <Routes>
              <Route path='/' element={<ItemListContainer/>}/>
              <Route path='/nosotros' element={<Nosotros/>}/>
              <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
              <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
              <Route path='/reparaciones' element={<Reparaciones/>}/>
              <Route path='/cart' element={<Cart/>}/>
              <Route path='/checkout' element={<Checkout/>}/>
              <Route path='*' element={<Error/>}/>
            </Routes>   
          </CartProvider>
        </BrowserRouter>
      </div>
  )
}

export default App;