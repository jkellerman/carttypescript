import React, { useReducer } from "react";
import reducer from "../reducer/reducer";
import { CurrentCart, CartContextType } from "../types";
import cartItems from "../components/mock";

// const url = "https://course-api.com/react-useReducer-cart-project";

type Props = {
  children?: React.ReactNode;
};
const AppContext = React.createContext({} as CartContextType);

const initialState: CurrentCart = {
  loading: false,
  cart: cartItems,
  total: 0,
  amount: 0,
};

const AppProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
