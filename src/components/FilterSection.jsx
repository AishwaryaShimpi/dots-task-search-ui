import { useState } from "react";
import { FaGear, FaPaperclip } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { IoMdList } from "react-icons/io";
import { IoChatbubbleOutline } from "react-icons/io5";

function FilterSection({ filters, setFilters }) {
  const [showFilters, setShowFilters] = useState(false);

  const toggleFilter = (key) => {
    setFilters((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const filterItems = [
    { key: "files", label: "Files", icon: <FaPaperclip /> },
    { key: "people", label: "People", icon: <CgProfile /> },
    { key: "chats", label: "Chats", icon: <IoChatbubbleOutline /> },
    { key: "lists", label: "Lists", icon: <IoMdList /> },
  ];

  return (
    <div className="relative flex justify-end w-full mb-4 mt-1.5">
      {/* Gear Icon */}
      <button
        onClick={() => setShowFilters(!showFilters)}
        className="text-black bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-200"
      >
        <FaGear className="text-lg" />
      </button>

      {/* Dropdown Options */}
      {showFilters && (
        <div className="absolute right-0 top-full mt-2 bg-white shadow-lg rounded-xl p-4 flex flex-col gap-2 z-20 w-44">
          {filterItems.map(({ key, label, icon }) => (
            <button
              key={key}
              onClick={() => toggleFilter(key)}
              className={`flex items-center gap-2 capitalize px-4 py-2 rounded-full font-medium transition-colors duration-200 text-left
                ${
                  filters[key]
                    ? " text-black-700"
                    : " text-gray-700"
                }`}
            >
              <span className="text-lg">{icon}</span>
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default FilterSection;
