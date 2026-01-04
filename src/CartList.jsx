import { useSelector } from "react-redux";

const CartList = () => {
  const cartSelecor = useSelector((state) => state.cart.items);
  console.log(cartSelecor);

  return (
    <>
      <div className="cart-container">
        <div className="cart-header">
          <h2>Your Cart Items</h2>
          <span>{cartSelecor.length}items</span>
        </div>
        {cartSelecor.length > 0
          ? cartSelecor.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="item-info">
                  <img src={item.thumbnail} alt="" />
                  <div className="item-details">
                    <h4>{item.title}</h4>
                    <p>{item.brand}</p>
                  </div>
                </div>
                <div className="item-actions">
                  <span className="price">{item.price}</span>
                  <button className="add-to-cart btn-disable">Remove</button>
                </div>
              </div>
            ))
          : null
          }
          <div className="cart-footer">
            Total : {cartSelecor.reduce((sum,item)=>sum+item.price,0)}
          </div>
      </div>
    </>
  );
};

export default CartList;
