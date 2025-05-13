import ListItems from "../listItems/listItems"
import { useSelector } from "react-redux"

const List = () => { 
    const books = useSelector((state) => state.books)
    return(
        <div className="w-full p-4 m-4 bg-[#f2f2f2] rounded-md shadow-md">
 <h2> Book List</h2>

 <ul>
    {!books.length ?
     <p> No books available</p> :
      books.map((book) => {
        return(
  <ListItems book={book}  key = {book.id}/>
        )
    })}
 </ul>
        </div>
    )
 }

 export default List