import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddToCart from "./AddToCart";
import { addItem, removeItem } from "./redux/slice";
import { fetchProducts } from "./redux/productSlice";

const Product = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  const productSelector = useSelector((state) => state.products.items);
  console.log(productSelector);

  const cartSelector = useSelector((state)=>state.cart.items);
    console.log(cartSelector.length);

  return (
    <div>
      <div className="grid">
        {productSelector.length &&
          productSelector.map((item) => (
            <div className="card" key={item.id}>
              <img src={item.thumbnail} />
              <div className="content">
                <div className="title">{item.title}</div>
                <div className="brnad">{item.brnad}</div>
                <div className="price">{item.price}</div>
                <div className="rating">{item.rating}</div>
                {
                  cartSelector.find(cartItem => cartItem.id === item.id) ?
                <button onClick={()=>dispatch(removeItem(item))} className="add-to-cart btn-disable">Removed From Cart</button>
                :
                <button onClick={()=>dispatch(addItem(item))} className="add-to-cart ">Add to Cart</button>
                
                }
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Product;
