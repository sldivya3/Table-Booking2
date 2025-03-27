
import { useState, useEffect, useRef } from "react";

const SortByCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Sort By");
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const selectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block " ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="bg-orange-500 flex justify-center text-white font-bold py-1 px-1 lg:w-32 w-32 lg:p-1 h-9 lg:h-10 md:h-10 md:p-1  text-md rounded cursor-pointer flex items-center"
      >
       
        <span>{selectedOption}</span>  &nbsp;
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
</svg>

      </button>
      {isOpen && (
        <div className="absolute z-[999] left-0 mt-1 w-60 text-[15px] bg-gray-100 shadow-lg rounded-lg">
          {[
            "Popularity",
            "Rating",
            "Price: Low to High",
            "Price: High to Low",
          ].map((option) => (
            <button
              key={option}
              onClick={() => selectOption(option)}
              className="block w-full text-left px-4 py-2 text-black hover:bg-gray-200"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SortByCard;