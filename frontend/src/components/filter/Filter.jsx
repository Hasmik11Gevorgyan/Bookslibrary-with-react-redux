import { useSelector } from "react-redux";
import { useState } from "react";

const Filter = () => {
  const books = useSelector((state) => state.books);
  const [authorTerm, setAuthorTerm] = useState("");
  const [titleTerm, setTitleTerm] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  // const [showResults, setShowResults] = useState(false);

  const handleAuthorSearch = () => {
    const result = books.filter((book) =>
      book.author.toLowerCase().includes(authorTerm.toLowerCase())
    );
    setFilteredResults(result);
    // setShowResults(true);
  };

  const handleTitleSearch = () => {
    const result = books.filter((book) =>
      book.title.toLowerCase().includes(titleTerm.toLowerCase())
    );
    setFilteredResults(result);
    // setShowResults(true);
  };

  return (
    <div className="w-full p-4 m-4 bg-[#f2f2f2] rounded-md shadow-md">
      <h2 className="text-xl font-bold mb-4">Filters</h2>
      <div className="flex flex-col gap-4">
        <div>
          <input
            value={authorTerm}
            onChange={(e) => setAuthorTerm(e.target.value)}
            className="w-full px-4 py-2 mb-2 border border-gray-400 rounded-md"
            placeholder="Search Author"
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md transition-colors duration-300 hover:bg-[#4b4b85af]"
            onClick={handleAuthorSearch}
          >
            Search Author
          </button>
        </div>
        <div>
          <input
            value={titleTerm}
            onChange={(e) => setTitleTerm(e.target.value)}
            className="w-full px-4 py-2 mb-2 border border-gray-400 rounded-md"
            placeholder="Search Title"
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md transition-colors duration-300 hover:bg-[#4b4b85af]"
            onClick={handleTitleSearch}
          >
            Search Title
          </button>
        </div>
        {/* Placeholder checkbox for additional filtering */}
        <div>
          <label className="flex items-center gap-2">
            <input type="checkbox" />
            <span>Sample Checkbox</span>
          </label>
        </div>
        
        {(
          <div className="mt-4">
            <h3 className="font-semibold">Results:</h3>
            {filteredResults.length === 0 ? (
              <p>No matches found.</p>
            ) : (
              <ul className="list-disc list-inside">
                {filteredResults.map((book, index) => (
                  <li key={index}>
                    <strong>{book.title}</strong> by {book.author}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Filter;

