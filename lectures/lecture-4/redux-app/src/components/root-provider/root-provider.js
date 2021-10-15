import React, { useState } from "react";
import { store } from "../../app/store";
import { Provider } from "react-redux";

export const themes = {
  light: {
    fontColor: "black",
    background: "white",
  },
  dark: {
    fontColor: "white",
    background: "grey",
  },
};

export const ThemeContext = React.createContext();

export const RootProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.light);

  return (
    <Provider store={store}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        {children}
      </ThemeContext.Provider>
    </Provider>
  );
};
