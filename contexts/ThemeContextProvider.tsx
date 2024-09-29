import { FC, PropsWithChildren, useState } from "react";
import ThemeContext from "./ThemeContext";
import { ColorModeInterface } from "@/constants/ColorScheme";

const ThemeContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState<keyof ColorModeInterface>("dark");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
