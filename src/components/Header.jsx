import logo from "../assets/iconoir_book.svg";
import SelectMenu from "./SelcetMenu";

// import { }
export default function Header({
  isDark,
  toggleTheme,
  handleFont,
  handleReset,
}) {
  return (
    <header className="flex justify-between items-center cursor-pointer">
      <img
        onClick={handleReset}
        src={logo}
        alt="Home Logo"
        className=" w-7 h-8 "
      />
      <div className="flex">
        <SelectMenu handleFont={handleFont}></SelectMenu>

        <button
          onClick={toggleTheme}
          className="mr-3 md:mr-5 pl-4 md:pl-6 border-l-2 border-s-[#e9-e9-e9]  "
        >
          <svg
            width="40"
            height="20"
            viewBox="0 0 40 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width="40"
              height="20"
              rx="10"
              fill={isDark ? "#a445ed" : "#757575"}
            />
            <circle
              cx={isDark ? "30" : "10"}
              cy="10"
              r="7"
              fill="white"
              className="transition-all duration-300"
            />
          </svg>
        </button>
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[#757575] dark:text-[#a445ed]"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1 10.449C0.998458 12.8283 1.80169 15.1383 3.27914 17.0033C4.75659 18.8683 6.82139 20.1788 9.13799 20.7218C11.4545 21.2647 13.8866 21.0082 16.039 19.994C18.1912 18.9797 19.9373 17.2673 20.9931 15.1352C11.5442 15.1352 6.85799 10.4479 6.85799 1C5.09842 1.87311 3.61767 3.22033 2.58266 4.88981C1.54765 6.5593 0.999502 8.48469 1 10.449Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </header>
  );
}
