"use client";
import { useTheme } from "next-themes";
import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  console.log("Current theme value is " + theme);

  return (
    <div>
      <button
        className="flex items-center"
        onClick={() => {
          setTheme(theme === "light" ? "dark" : "light");
          console.log(theme);
        }}
      >
        {theme === "light" ? (
          <FiMoon className="w-6 h-6 transition-all" />
        ) : (
          <FiSun className="w-6 h-6 transition-all" />
        )}
      </button>
    </div>
  );
}
