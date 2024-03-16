"use client";
import { useTheme } from "next-themes";
import Image from "next/image";

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
          <Image
            src="./moon.svg"
            alt="moon icon"
            width={20}
            height={20}
            className="w-6 h-6 transition-all"
          />
        ) : (
          <Image
            src="./sun.svg"
            alt="sun icon"
            width={20}
            height={20}
            className="w-6 h-6 transition-all"
          />
        )}
      </button>
    </div>
  );
}
