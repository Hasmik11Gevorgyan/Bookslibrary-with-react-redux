import { selectTitleFilter,selectAuthorFilter } from "../../redux/slices/filterSlice"
import ListItems from "../listItems/listItems"
import { useSelector } from "react-redux"

const List = () => { 
    const books = useSelector(state => state.books)
    const  booksByFilteredTitle  = useSelector(selectTitleFilter);
    const booksByFilteredAuthor = useSelector(selectAuthorFilter)

    const filteredBooks = books.filter( book => {
        const mathchesTitle = book.title.toLowerCase().includes(booksByFilteredTitle.toLowerCase().title)
        return mathchesTitle
       
       
        // const matchesAuthor = book.author.toLowerCase().includes(booksByFilteredTitle.author.toLowerCase())
    })
    

    return(
        <div className="w-full p-4 m-4 bg-[#f2f2f2] rounded-md shadow-md">
 <h2> Book List</h2>

 <ul>
    {!filteredBooks.length ?
     <p> No books available</p> :
      booksByFilteredTitle.map(book => <ListItems key={book.id} book={book} />)  
    }
 </ul>
        </div>
    )
 }

 export default List