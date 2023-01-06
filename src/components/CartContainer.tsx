import { useContext, useEffect } from "react";
import CartItem from "../components/CartItem";
import { AppContext } from "../context/context";
import { clearCart, getTotals } from "../types";

const CartContainer = () => {
  const {
    state: { cart, total },
    dispatch,
  } = useContext(AppContext);

  const emptyCart = () => {
    dispatch(clearCart());
  };

  const totals = () => {
    dispatch(getTotals());
  };

  useEffect(() => {
    totals();
  }, [cart]);

  if (cart.length === 0) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <div>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={emptyCart}>
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
