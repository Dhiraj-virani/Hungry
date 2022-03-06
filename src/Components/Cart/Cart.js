import { useContext } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const addItemHandler = item =>{
    cartCtx.addItem({...item, amount:1});
  };

  const removeItemHandler = id =>{
        cartCtx.removeItem(id)
  };

  const cartItemNumber= cartCtx.items.length;

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
  return (
    <Modal onClose={props.onClose}>
      {CartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
       { cartItemNumber>0 &&  <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
