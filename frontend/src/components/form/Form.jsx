import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../../redux/books/actionCreators";
import { v4 as uuidv4 } from "uuid";
import data from "../data/books.json"; // Assuming data.json is in the same directory

const Form = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author) {
      // dispatch action to add book
      const book = { id: uuidv4(), title, author, isFavorite: false };
      console.log(addBook(book));

      dispatch(addBook(book));
      setTitle("");
      setAuthor("");
    }
  };
  const handleRandomBook = () => {
    const rndIndex = Math.floor(Math.random() * data.length);
    const rndBook = data[rndIndex];
    const rndBookkWithId = {
      ...rndBook,
      id: uuidv4(),
      isFavorite: false
    };
    dispatch(addBook(rndBookkWithId));
  };
  return (
    <div className="p-4 m-4 bg-[#f2f2f2] rounded-md shadow-md">
      <h1>Add a new book</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            className="w-full px-4 py-2 mb-4 border border-gray-400 rounded-md"
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Book Title"
          />
        </div>
        <div>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Book author"
            className="w-full px-4 py-2 mb-4 border border-gray-400 rounded-md"
          />
        </div>
        <div className="flex gap-2 max-md: flex-wrap">
          <button
            type="submit"
            className=" bg-blue-500 text-white px-4 py-2 rounded-md transition-colors duration-300 hover:bg-[#4b4b85af]"
          >
            Add a new book
          </button>
        </div>
        <div>
          <button
            onClick={handleRandomBook}
            type="button"
            className=" bg-green-500 text-white px-4 py-2 mt-1 rounded-md transition-colors duration-300 hover:bg-[#4b4b85af]"
          >
            Random book
          </button>
        </div>
        <div>
          <button
            type="button"
            className=" bg-blue-500 text-white px-4 py-2 mt-1  rounded-md transition-colors duration-300 hover:bg-[#4b4b85af]"
          >
            Add a new book
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
