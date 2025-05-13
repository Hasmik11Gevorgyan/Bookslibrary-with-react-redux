import { useSelector } from "react-redux";
import { useState } from "react";

const Filter = () => {
  const books = useSelector((state) => state.books);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredAuthors = () => {
    return books.filter((book) =>
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };
  const filteredTitles = () => {
    return books.filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };
  return (
    <div className="w-full p-4 m-4 bg-[#f2f2f2] rounded-md shadow-md">
      <h2> Filters</h2>
      <div className="flex flex-col gap-4">
        <div>
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 mb-4 border border-gray-400 rounded-md"
            placeholder="Search Author"
          ></input>
          <button
            className=" bg-blue-500 text-white px-4 py-2 rounded-md transition-colors duration-300 hover:bg-[#4b4b85af]"
            onClick={filteredAuthors}
          >
            Search
          </button>
        </div>
        <div>
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            type="text"
            className="w-full px-4 py-2 mb-4 border border-gray-400 rounded-md"
            placeholder="Search Title"
          ></input>
          <button
            className=" bg-blue-500 text-white px-4 py-2 rounded-md transition-colors duration-300 hover:bg-[#4b4b85af]"
            onClick={filteredTitles}
          >
            Search
          </button>
        </div>
        <div>
          <input type="checkbox"></input>
        </div>
      </div>
    </div>
  );
};

export default Filter;
