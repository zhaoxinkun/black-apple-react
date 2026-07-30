import { useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

export default function DarkToggle() {

  const [isDark, setIsDark] = useState(false);

  // 触发黑暗模式
  const toggleDark = () => {
    setIsDark(!isDark);
  };

  const root = document.documentElement;
  if (isDark) {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }
  return (
    <button
      className="p-1  rounded-full hover:bg-gray-300 transition-all duration-300  dark:hover:rotate-12"
      onClick={toggleDark}>
      {!isDark ? (
        <FiMoon
          size={24}
          className=" animate-pulse"
        />
      ) : (
        <FiSun size={24} className="text-yellow-600 animate-pulse"/>
      )}
    </button>
  );
}
