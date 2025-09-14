import { useState } from "react";
import SearchBox from "./components/SearchBox";
import FilterSection from "./components/FilterSection";
import SearchResults from "./components/SearchResults";
import dummyData from "./data/dummyData.json";

function App() {
  const [query, setQuery] = useState("");
  const [activeTab, setActiveTab] = useState("All");
  const [filters, setFilters] = useState({
    files: true,
    people: true,
    chats: false,
    lists: false,
  });
  const [filteredResults, setFilteredResults] = useState({
    people: [],
    files: [],
    chats: [],
    lists: [],
  });

  const handleSearch = (searchTerm) => {
    setQuery(searchTerm);

    if (!searchTerm) {
      setFilteredResults({
        people: [],
        files: [],
        chats: [],
        lists: [],
      });
      return;
    }

    const lowerQuery = searchTerm.toLowerCase();

    setFilteredResults({
      people: dummyData.people.filter((item) =>
        item.name.toLowerCase().includes(lowerQuery)
      ),
      files: dummyData.files.filter((item) =>
        item.name.toLowerCase().includes(lowerQuery)
      ),
      chats: dummyData.chats.filter((item) =>
        item.name.toLowerCase().includes(lowerQuery)
      ),
      lists: dummyData.lists.filter((item) =>
        item.name.toLowerCase().includes(lowerQuery)
      ),
    });
  };

  // Build available tabs dynamically based on active filters
  const availableTabs = ["All"];
  if (filters.files) availableTabs.push("Files");
  if (filters.people) availableTabs.push("People");
  if (filters.chats) availableTabs.push("Chats");
  if (filters.lists) availableTabs.push("Lists");

  let resultsToShow = [];
  if (query.length > 0) {
    if (activeTab === "All") {
      if (filters.people) resultsToShow.push(...filteredResults.people);
      if (filters.files) resultsToShow.push(...filteredResults.files);
      if (filters.chats) resultsToShow.push(...filteredResults.chats);
      if (filters.lists) resultsToShow.push(...filteredResults.lists);
    } else if (activeTab === "People") {
      resultsToShow = filteredResults.people;
    } else if (activeTab === "Files") {
      resultsToShow = filteredResults.files;
    } else if (activeTab === "Chats") {
      resultsToShow = filteredResults.chats;
    } else if (activeTab === "Lists") {
      resultsToShow = filteredResults.lists;
    }
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-4">
      <SearchBox onSearch={handleSearch} />

      {query.length > 0 && (
        <>
          <FilterSection filters={filters} setFilters={setFilters} />

          <div className="flex justify-between mt-4 flex-wrap gap-2">
            {availableTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded font-bold ${
                  activeTab === tab ? " text-black underline" : "text-gray-500"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <SearchResults results={resultsToShow} query={query} />
        </>
      )}
    </div>
  );
}

export default App;
