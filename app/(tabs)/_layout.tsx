import HomePage from "@/components/HomePage";
import ThemeContextProvider from "@/contexts/ThemeContextProvider";
import { FC } from "react";

const App: FC = () => {
  return (
    <ThemeContextProvider>
      <HomePage />
    </ThemeContextProvider>
  );
};

export default App;
