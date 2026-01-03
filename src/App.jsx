import { useDispatch } from "react-redux";
import Header from "./Header";
import Product from "./Product";
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import CartList from "./CartList";

const App = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <BrowserRouter>
        <Header />
        
        <Routes>
          <Route path="/" element={<Product />}></Route>
          <Route path="/cart" element={<CartList />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
