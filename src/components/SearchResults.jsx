import SearchResultItem from "./SearchResultItem";

function SearchResults({ results = [], query }) {
  const groupedResults = {
    People: results.filter((item) => item.type === "person"),
    Files: results.filter(
      (item) =>
        [
          "folder",
          "image",
          "video",
          "document",
          "spreadsheet",
          "presentation",
          "audio",
          "archive",
          "script",
        ].includes(item.type)
    ),
    Chats: results.filter((item) => item.type === "chat"),
    Lists: results.filter((item) => item.type === "list"),
  };

  return (
    <div className="mt-4 w-full max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 ease-in-out">
      {Object.entries(groupedResults).map(
        ([section, items]) =>
          items.length > 0 && (
            <div key={section} className="mb-6 last:mb-0">
              <h3 className="text-gray-600 font-semibold text-sm uppercase tracking-wide mb-3 px-4 pt-4">
                {section}
              </h3>
              <div className="divide-y divide-gray-200">
                {items.map((item) => (
                  <SearchResultItem
                    key={`${item.type}-${item.id}`}
                    item={item}
                    query={query}
                  />
                ))}
              </div>
            </div>
          )
      )}
    </div>
  );
}

export default SearchResults;
