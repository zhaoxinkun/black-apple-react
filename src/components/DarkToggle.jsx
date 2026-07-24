import {FiSun} from "react-icons/fi";

export default function DarkToggle() {
    // 触发黑暗模式
    const toggleDark = () => {
        console.log("Dark Toggle Dark");
        document.documentElement.classList.toggle("dark");
    }
    return (
        <button
            className="p-1 bg-gray-200 rounded-full hover:bg-gray-300 transition-all duration-300 dark:bg-gray-600 dark:hover:rotate-12"
            onClick={toggleDark}>
            <FiSun size={24} className="text-yellow-400 animate-pulse"/>
        </button>
    )
}
