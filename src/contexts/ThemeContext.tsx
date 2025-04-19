
import { createContext, useContext, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";

type ThemeContextType = {
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const toggleTheme = () => {
    // This is just a stub, as we're not implementing dark mode anymore
    console.log("Theme toggle clicked");
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

export const ThemeToggle = () => {
  return (
    <Toggle
      aria-label="Toggle theme"
      className="ml-2"
    >
      <Sun className="h-4 w-4" />
    </Toggle>
  );
};
