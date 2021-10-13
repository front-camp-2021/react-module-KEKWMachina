import React, { useContext } from "react";
import { Radio } from "semantic-ui-react";
import { ThemeContext, themes } from "../root-provider/root-provider";

export function ThemeToggle() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <>
      <div style={{ lineHeight: "24px" }}>Toggle theme change</div>
      <Radio
        toggle
        onChange={() =>
          setTheme(theme === themes.dark ? themes.light : themes.dark)
        }
      />
    </>
  );
}
