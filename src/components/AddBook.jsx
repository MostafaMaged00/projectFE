
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"



function AddBook() {
  const [id,setId] = useState("") //get id 
  const[title,setTitle] = useState("") //get title
  const[author,setAuthor] = useState("") //get author
  const[genre,setGenre] = useState("") //get genre
  const[pages,setPage] = useState("") //get pages
  const navigate = useNavigate() // use navigate

  //create 
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const bookData = {id,title,author,genre,pages}; //create a book pbject to store data 
    
    fetch("http://localhost:3000/api/book",{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookData),
    })
    .then(()=>{
      alert("New book Added Successfully");
      navigate("/")
    })
    .catch((err)=>console.log(err.message))
    
  }

  return (
    <div className="container mt-4">
        <h2 className="mb-4">Add New Book</h2>
        <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="id" className="form-label">ID</label>
            <input type="text" id="id" name="id"   className="form-control" required value={id} onChange={e=>{setId(e.target.value)}}/>

            <label htmlFor="title" className="form-label">Title</label>
            <input type="text" id="title" name="title" placeholder="Enter book title" className="form-control" required value={title} onChange={e=>{setTitle(e.target.value)}}/>

            <label htmlFor="author" className="form-label">Author</label>
            <input type="text" id="author" name="author" placeholder="Enter book Author" className="form-control" required value={author} onChange={e=>{setAuthor(e.target.value)}}/>

            <label htmlFor="genre" className="form-label">Genre</label>
            <input type="text" id="genre" name="genre" placeholder="Enter book description" className="form-control" required value={genre} onChange={e=>{setGenre(e.target.value)}}/>

            <label htmlFor="pages" className="form-label">Pages</label>
            <input type="number" id="pages" name="pages" placeholder="Enter book pages number" className="form-control" required value={pages} onChange={e=>{setPage(e.target.value)}}/>
            <br />
            <button className="btn btn-primary">Save</button>
            <br />
            <Link to="/">Home</Link>
            </div>
        </form>
    </div>
  )
}

export default AddBook