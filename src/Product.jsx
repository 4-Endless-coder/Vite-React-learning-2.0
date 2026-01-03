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
                <button className="add-to-cart">Add to Cart</button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Product;
