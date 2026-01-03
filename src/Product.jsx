import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddToCart from "./AddToCart";
import { addItem, removeItem } from "./redux/slice";
import {fetchProducts} from './redux/productSlice'

const Product = () => {
    const dispatch =useDispatch()
    useEffect(()=>{
      dispatch(fetchProducts())
    },[])
    const productSelector =useSelector((state)=>state.products.items)
    console.log(productSelector);
    

  return (
    <div>
      <div className="grid">
        {
          productSelector.length && productSelector.map((item)=>(
            <div className="card">
              <img src={item.thumbnail} alt="" />
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Product;
