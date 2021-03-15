import React from "react";
import { Provider } from "./status/native/context";
import Main from "./status/native/main";

function App() {
  return (
    <Provider>
      <Main />
    </Provider>
  );
}

export default App;
