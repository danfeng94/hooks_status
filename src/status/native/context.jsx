import React, { useReducer } from "react";
import { reducer, initState } from "./reducer";

const StoreContext = React.createContext(null);

export const useStore = () => {
  const store = React.useContext(StoreContext);
  if (!store) {
    // this is especially useful in TypeScript so you don't need to be checking for null all the time
    throw new Error("You have forgot to use StoreProvider, shame on you.");
  }
  return store;
};

export function Provider({ children }) {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
}
