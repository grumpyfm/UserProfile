import React from "react";
import { Provider } from "react-redux";

import { AppNavigator } from "./src/navigation/appNavigation";
import Store from "./src/redux/store";

function App() {
  return (
    <Provider store={Store}>
      <AppNavigator />
    </Provider>
  );
}
export default App;
