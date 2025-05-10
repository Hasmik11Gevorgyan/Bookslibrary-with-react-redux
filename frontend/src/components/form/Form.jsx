import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../../redux/books/actionCreators";

const Form = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author) {
      // dispatch action to add book
      const book = { title, author };
      dispatch(addBook(book));
      setTitle("");
      setAuthor("");
    }
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
        <button
          className="block w-full bg-blue-500 text-white px-4 py-2 rounded-md transition-colors duration-300 hover:bg-[#4b4b85af]"
          type="submit"
        >
          Add a new book
        </button>
      </form>
    </div>
  );
};

export default Form;
