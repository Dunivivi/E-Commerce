import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.context";

import {
  CheckoutContainer,
  CheckoutHeader,
  Total,
  HeaderBlock,
} from "./checkout.style.jsx";

const Checkout = () => {
  const { cartItems, addItemToCart, removeItemToCart, cartTotal } =
    useContext(CartContext);

  const total = cartTotal;
  console.log(total);

  return (
    <div>
      <CheckoutContainer>
        <CheckoutHeader>
          <HeaderBlock>
            <span>Product</span>
          </HeaderBlock>

          <HeaderBlock>
            <span>Description</span>
          </HeaderBlock>

          <HeaderBlock>
            <span>Quantity</span>
          </HeaderBlock>

          <HeaderBlock>
            <span>Price</span>
          </HeaderBlock>

          <HeaderBlock>
            <span>Remove</span>
          </HeaderBlock>
        </CheckoutHeader>
        {cartItems.map((cartItem) => {
          const { id, name, quantity } = cartItem;
          return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
        })}
        <Total as="span">Total: {total} $</Total>
      </CheckoutContainer>
    </div>
  );
};

export default Checkout;
