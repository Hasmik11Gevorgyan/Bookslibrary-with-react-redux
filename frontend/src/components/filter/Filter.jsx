 import { setTitleFilter,selectTitleFilter } from "../../redux/slices/filterSlice";
 import { useDispatch,useSelector } from "react-redux";



 const Filter = () =>{

  const dispatch = useDispatch();
  const {title} = useSelector(selectTitleFilter); 


 const handleByTitle = (e) => {
  dispatch( setTitleFilter(e.target.value))
 
 }

  return (
    <div className="p-4 m-4 bg-[#f2f2f2] rounded-lg shadow-lg " >
       <div>
        <input
        onChange={e => handleByTitle(e)}
        value={title}
        type="text"
        placeholder="Filter by title"
        className="w-full px-4 py-2 border-1 border-color-gray-400  rounded-lg"
        />
       </div>
    </div>
  )
 }

 export default Filter;