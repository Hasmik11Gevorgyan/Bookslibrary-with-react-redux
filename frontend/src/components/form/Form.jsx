import { useState } from "react";

const Form = () => { 
    const [title,setTitle] =useState("")
    const [author,setAuthor] =useState()

    const handleSubmit = (e) =>{
        e.preventDefault()
    }


    return(
        <div className="p-4 m-4 bg-[#f2f2f2] rounded-md shadow-md">
<h1>Add a new book</h1>
<form onSubmit={handleSubmit}>
    <div>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
    </div>
<div>
        <label htmlFor="title">author</label>
        <input type="text" id="author" value={author} onChange={(e) => setAuthor(e.target.value)} />
    </div>
</form>
        </div>
    )
 }

 export default Form;