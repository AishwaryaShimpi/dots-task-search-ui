function SearchResultItem({ item, query }) {
  const highlightText = (text) => {
    const regex = new RegExp(`(${query})`, "gi");
    return text.split(regex).map((part, i) =>
      regex.test(part) ? (
        <mark key={i} className="bg-yellow-300 rounded px-1">
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  return (
    <div className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer">
      {/* Avatar or Icon */}
      {item.type === "person" ? (
        <img
          src={item.avatar}
          alt="avatar"
          className="w-12 h-12 rounded-2xl mr-4 object-cover shadow-sm"
        />
      ) : (
        <div className="w-12 h-12 bg-gray-200 rounded-lg mr-4 flex items-center justify-center text-xl text-gray-500 shadow-inner">
          📁
        </div>
      )}

      {/* Text */}
      <div className="flex-1 min-w-0">
        <h4 className="font-semibold text-gray-800 truncate">
          {highlightText(item.name)}
        </h4>
        {(item.status || item.subtext) && (
          <p className="text-sm text-gray-500 truncate">
            {item.status || item.subtext}
          </p>
        )}
      </div>

      {/* Optional: Right arrow or icon */}
      <div className="ml-2 text-gray-400">&#8250;</div>
    </div>
  );
}

export default SearchResultItem;
