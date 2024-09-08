import { useContext } from "react";
import { FontContext } from "../store/font-theme-context";

export default function Wrapper({ children, isDark }) {
  const { font } = useContext(FontContext);
  return (
    <div className={`${isDark ? "dark" : ""}`}>
      <div className="dark:bg-[#000]  dark:text-[#fff] w-full min-h-screen pt-14 pb-28">
        <div
          className={`container  mx-auto px-6 md:px-10 lg:px-64 ${
            font === "Sans Serif" ? "font-inter" : ""
          } ${font === "Serif" ? "font-lora" : ""}
          ${font === "Mono" ? "font-inconsolata" : ""}`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
