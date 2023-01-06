import React from "react";

export interface CartItem {
  id: number;
  title: string;
  price: number;
  img: string;
  amount: number;
}

export interface CurrentCart {
  loading: boolean;
  cart: CartItem[];
  total: number;
  amount: number;
}

export interface CartContextType {
  state: CurrentCart;
  dispatch: React.Dispatch<Action>;
}

export type Action =
  | { type: "CLEAR_CART" }
  | { type: "INCREASE"; payload: { id: number; type: string } }
  | { type: "DECREASE"; payload: { id: number; type: string } }
  | { type: "REMOVE"; payload: number }
  | { type: "GET_TOTALS" };
// | { type: "DISPLAY_ITEMS"; payload: CurrentCart };
// | { type: "LOADING" }
// | { type: "TOGGLE_AMOUNT"; payload: { id: string; type: string } };

// actions

export const clearCart = (): Action => ({
  type: "CLEAR_CART",
});

export const removeItem = (id: number): Action => ({
  type: "REMOVE",
  payload: id,
});

export const increaseItemAmount = (id: number, type: string): Action => ({
  type: "INCREASE",
  payload: { id, type },
});
export const decreaseItemAmount = (id: number, type: string): Action => ({
  type: "DECREASE",
  payload: { id, type },
});

export const getTotals = (): Action => ({
  type: "GET_TOTALS",
});
