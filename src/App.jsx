import { useDispatch } from "react-redux"
import Header from "./Header"
import Product from "./Product"
import { clearAllItem } from "./redux/slice";


const App = () => {
  const dispatch=useDispatch();

  return (
    <div>
      <Header />
      <h1>React Redux Toolkit</h1>
      <button onClick={()=>dispatch(clearAllItem())} className="clear-cart-btn">Clear Cart</button>
      <Product />
    </div>
  )
}

export default App
