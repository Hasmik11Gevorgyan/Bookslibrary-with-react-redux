 import { setTitleFilter, resetFilters, selectTitleFilter } from "../../redux/slices/filterSlice";
 import { useDispatch,useSelector } from "react-redux";



 const Filter = () =>{
const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();
  const value  = useSelector( selectTitleFilter); 


 const handleByTitle = (e) => dispatch( setTitleFilter(e.target.value))
 
 const handleResetFilters = () => dispatch(resetFilters()) 
 

  return (
    <div className=" flex flex-col p-4 m-4 bg-[#f2f2f2] rounded-lg shadow-lg " >
       <div>
<div className ="flex items-center gap-2">
  <label className ="flex items-center">
    <input
      type ="checkbox"
      className ="appearance-none mr-2 cursor-pointer"
      onChange={e => setChecked(prevState => !prevState)}
      
      style ={
        checked ?{
clipPath: "polygon(14% 44% 0% 65% 50% 100% 100% 16% 80% 0% 43% 62%)",
        transformOrigin: "bottom left",
        appearance: "none",
        backgroundColor: "red",
        }:
        {
          
        }
      }
        />
        <span> Only favorite</span>
  </label>

</div>
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