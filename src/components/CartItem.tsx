import React, { useContext } from "react";
import { AppContext } from "../context/context";
import { removeItem, increaseItemAmount, decreaseItemAmount } from "../types";

type Props = {
  id: number;
  title: string;
  price: number;
  img: string;
  amount: number;
};

const CartItem: React.FC<Props> = ({ id, title, price, img, amount }) => {
  const { dispatch } = useContext(AppContext);

  const remove = (id: number) => {
    dispatch(removeItem(id));
  };

  const increase = (id: number, type: string) => {
    dispatch(increaseItemAmount(id, type));
  };

  const decrease = (id: number, type: string) => {
    dispatch(decreaseItemAmount(id, type));
  };

  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        {/* remove button */}
        <button className="remove-btn" onClick={() => remove(id)}>
          remove
        </button>
      </div>
      <div>
        {/* increase amount */}
        <button className="amount-btn" onClick={() => increase(id, "inc")}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z" />
          </svg>
        </button>
        {/* amount */}
        <p className="amount">{amount}</p>
        {/* decrease amount */}
        <button className="amount-btn" onClick={() => decrease(id, "dec")}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </button>
      </div>
    </article>
  );
};

export default CartItem;
