import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.context";

import "./checkout.style.scss";

const Checkout = () => {
  const { cartItems, addItemToCart, removeItemToCart, cartTotal } =
    useContext(CartContext);

  const total = cartTotal;
  console.log(total);

  return (
    <div>
      <div className="checkout-container">
        <div className="checkout-header">
          <div className="header-block">
            <span>Product</span>
          </div>

          <div className="header-block">
            <span>Description</span>
          </div>

          <div className="header-block">
            <span>Quantity</span>
          </div>

          <div className="header-block">
            <span>Price</span>
          </div>

          <div className="header-block">
            <span>Remove</span>
          </div>
        </div>
        {cartItems.map((cartItem) => {
          const { id, name, quantity } = cartItem;
          return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
        })}
        <span className="total">Total: {total} $</span>
      </div>
    </div>
  );
};

export default Checkout;
