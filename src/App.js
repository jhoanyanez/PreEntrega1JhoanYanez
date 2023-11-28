import "bulma/css/bulma.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Error from "./components/Error/Error";
import Nosotros from "./components/Nosotros/Nosotros";
import Reparaciones from "./components/Reparaciones/Reparaciones";

function App(){
  return (
      <div className="App">
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/nosotros' element={<Nosotros/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
            <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
            <Route path='/reparaciones' element={<Reparaciones/>}/>
            <Route path='*' element={<Error/>}/>
          </Routes>        
        </BrowserRouter>
      </div>
  )
}

export default App;