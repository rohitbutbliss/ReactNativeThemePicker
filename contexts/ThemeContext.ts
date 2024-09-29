import { ColorModeInterface } from "@/constants/ColorScheme";
import { createContext } from "react";

interface ThemeContextInterface {
  theme: keyof ColorModeInterface;
  setTheme: Function;
}

const ThemeContext = createContext<ThemeContextInterface>({
  theme: "dark",
  setTheme: () => {},
});

export default ThemeContext;
