import React from "react";
import { useDispatch } from "react-redux";
import AddToCart from "./AddToCart";
import { addItem } from "./redux/slice";

const Product = () => {
    const dispatch =useDispatch()

  return (
    <div>
      <main className="product-page">
        <div className="product-container">
          <div className="product-image">
            <img
              src="https://m.media-amazon.com/images/I/61+vg4nVg9L._SY355_.jpg"
              alt="Product"
            />
          </div>

          <div className="product-details">
            <h1 className="product-title">Premium Headphones</h1>
            <p className="product-price">$129.99</p>

            <p className="product-description">
              High-quality wireless headphones with noise cancellation and
              long-lasting battery life. Perfect for work and travel.
            </p>

            <div className="product-actions">
              <label>
                Qty:
                <input type="number" defaultValue="1" min="1" />
              </label>

              <button
                onClick={() =>dispatch(addItem())}
                className="add-to-cart"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Product;
