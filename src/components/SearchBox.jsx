import { useState } from "react";
import { FiSearch } from "react-icons/fi";

function SearchBox({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  const clearInput = () => {
    setQuery("");
    onSearch("");
  };

  return (
    <div className="flex items-center w-full max-w-md mx-auto bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 p-2">
      {/* Search Icon inside input */}
      <FiSearch className="text-gray-400 ml-3 text-lg" />

      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search..."
        className="flex-1 p-3 pl-2 rounded-full outline-none text-gray-700 placeholder-gray-400"
      />

      {/* Clear Text */}
      {query && (
        <button
          onClick={clearInput}
          className="ml-3 text-gray-500 hover:text-gray-700 font-medium p-2 transition-colors duration-200 underline"
        >
          clear
        </button>
      )}
    </div>
  );
}

export default SearchBox;
