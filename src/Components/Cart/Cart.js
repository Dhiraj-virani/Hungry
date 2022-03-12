import { useContext, useState } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = (props) => {
  const [checkoutForm, setCheckoutForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const addItemHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const removeItemHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemNumber = cartCtx.items.length;

  const SubmitHandler = () => {
    setCheckoutForm(true);
  };
  const modalActions = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.onClose}>
        Close
      </button>
      {cartItemNumber > 0 && (
        <button className={classes.button} onClick={SubmitHandler}>
          Order
        </button>
      )}
    </div>
  );

  const orderSubmitHandler = (userData) => {
    setIsSubmitting(true);
    fetch("https://hungry-9623e-default-rtdb.firebaseio.com/Orders.json", {
      method: "POST",
      body: JSON.stringify({
        user: userData,
        orderedItems: cartCtx.items,
      }),
    });
    setIsSubmitting(false);
    setDidSubmit(true);
    cartCtx.clearCart();
  };

  const CartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((items) => (
        <CartItem
          key={items.id}
          name={items.name}
          amount={items.amount}
          price={items.price}
          onAdd={addItemHandler.bind(null, items)}
          onRemove={removeItemHandler.bind(null, items.id)}
        />
      ))}
    </ul>
  );
  const CartModalContent = (
    <>
      {CartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {checkoutForm && (
        <Checkout onConfirm={orderSubmitHandler} onCancel={props.onClose} />
      )}
      {!checkoutForm && modalActions}
    </>
  );
  const isSubmittingModalContent = <p>Sending Order Data...</p>;

  const submittedModalContent = (
    <>
      <p>Successfully submitted your order!!</p>
      <div className={classes.actions}>
        <button className={classes.button} onClick={props.onClose}>
          Close
        </button>
      </div>
    </>
  );
  return (
    <Modal onClose={props.onClose}>
      {!isSubmitting && !didSubmit && CartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmit && submittedModalContent}
    </Modal>
  );
};

export default Cart;
