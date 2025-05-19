 import { setTitleFilter,resetFilters,selectTitleFilter } from "../../redux/slices/filterSlice";
 import { useDispatch,useSelector } from "react-redux";



 const Filter = () =>{

  const dispatch = useDispatch();
  const value  = useSelector( selectTitleFilter); 


 const handleByTitle = (e) => dispatch( setTitleFilter(e.target.value))
 
 const handleResetFilters = () => dispatch(resetFilters) 
 

  return (
    <div className="p-4 m-4 bg-[#f2f2f2] rounded-lg shadow-lg " >
       <div>
        <input
        onChange={e => handleByTitle(e)}
        value={value}
        type="text"
        placeholder="Filter by title"
        className="w-full px-4 py-2 border-1 border-color-gray-400  rounded-lg"
        />
       </div>
       <div>
        <input
        onChange={e => handleByAuthor(e)}
        value={value}
        type="text"
        placeholder="Filter by Author"
        className="w-full px-4 py-2 border-1 border-color-gray-400  rounded-lg"
        />
       </div>
       <div>
        <button 
        className="px-4 py-2 mt-4 text-white bg-red-500 rounded-lg hover:bg-red-600"
        onClick={handleResetFilters}>
          Reset Filters
        </button>
       </div>
    </div>
  )
 }

 export default Filter;