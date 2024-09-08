import { useState } from "react";
import searchIcon from "../assets/Shape.svg";

export default function InputField({ onFetch }) {
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const fetchData = async (value) => {
    if (!value) {
      setSuggestions([]);
      return;
    }

    const response = await fetch(
      `https://en.wiktionary.org/w/api.php?action=opensearch&search=${value}&limit=5&namespace=0&format=json&origin=*`
    );
    const data = await response.json();
    setSuggestions(data[1]);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);
    fetchData(value);
  };

  const handleClickSuggestion = (suggestion) => {
    setInput(suggestion);
    onFetch(suggestion);
    setSuggestions([]);
    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && input.trim()) {
      onFetch(input);
      setSuggestions([]);
    }
  };

  return (
    <div className="relative mt-12 w-full">
      <img
        className="absolute right-4 top-1/2 bottom-1/2 transform -translate-y-1/2"
        src={searchIcon}
        alt=""
      />
      <input
        type="search"
        value={input}
        onKeyDown={handleKeyDown}
        onChange={handleChange}
        className="bg-[#f4f4f4] dark:bg-[#1f1f1f] placeholder:text-base placeholder:text-[#2d2d2d] dark:placeholder:text-[#ffffff] placeholder:opacity-25 placeholder:font-bold focus:outline-none border-2 border-transparent focus:border-[#a445ed] py-5 pl-6 pr-6 rounded-2xl w-full text-base md:text-xl font-bold md:placeholder:text-xl"
        placeholder="Search for any word..."
      />

      {suggestions.length > 0 && (
        <ul className="absolute z-10 w-full bg-white dark:bg-[#1f1f1f] border border-[#a445ed] mt-2 rounded-2xl overflow-hidden">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => handleClickSuggestion(suggestion)}
              className=" text-base md:text-xl cursor-pointer p-4 hover:bg-[#f4f4f4] dark:hover:bg-[#2d2d2d]"
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
