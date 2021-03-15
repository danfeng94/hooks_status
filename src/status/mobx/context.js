import React from "react";
import { useLocalStore } from "mobx-react-lite";
import { createStore } from "./store";

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
  const store = useLocalStore(createStore);

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
}
