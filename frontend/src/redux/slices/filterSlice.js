import {createSlice} from '@reduxjs/toolkit';

const initialState= {
    title:""
}

const filteredSlice = createSlice({
    name: "filter",
    initialState,
    reducers:{
        setTitleFilter:(state,action) =>{
            return {...state,title:action.payload}
        }
    }
});



export const {setTitleFilter} = filteredSlice.actions;
export const selectTitleFilter = (state) => state.filter.title;
export default filteredSlice.reducer;