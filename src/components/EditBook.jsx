import { useEffect, useState } from 'react';
import { Link,useNavigate,useParams } from 'react-router-dom'

function EditBook() {

  const {id} = useParams();
  const[title,setTitle] = useState("") //get title
  const[author,setAuthor] = useState("") //get author
  const[genre,setGenre] = useState("") //get genre
  const[pages,setPage] = useState("") //get pages
  const navigate = useNavigate() // use navigate
  //const [bookData,setBookData] = useState({})
  useEffect(()=>{
     fetch(`http://localhost:3000/api/book/${id}`)
      //fetch(`https://projectbe-a78m.onrender.com/api/book/${id}`)
      .then((res)=>res.json())
      .then((data)=>{
       setTitle(data.title);
        setAuthor(data.author);
        setGenre(data.genre);
        setPage(data.pages);

      })
      .catch((err)=>console.log(err.message))

  },[])

//Edit 
const handleSubmit = (e) => {
  e.preventDefault();
  
  const bookData = {title,author,genre,pages}; //Edit  a book pbject to store data 
  
  fetch(`http://localhost:3000/api/book/${id}`,{
 // fetch(`https://projectbe-a78m.onrender.com/api/book/${id}`,{
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(bookData),
  })
  .then(()=>{
    alert("book Updated Successfully");
    navigate("/")
  })
  .catch((err)=>console.log(err.message))
  
}
  return (
    <div className="container mt-4">
    <h2 className="mb-4" style={{ color: '#3ca3e7'}}>Edit Book Details</h2>
    <form onSubmit={handleSubmit}>
    <div className="mb-3">

        <label htmlFor="title" className="form-label">Title</label>
        <input type="text" id="title" name="title" placeholder="Enter book title" className="form-control" required value={title} onChange={e=>{setTitle(e.target.value)}}/>

        <label htmlFor="author" className="form-label">Author</label>
        <input type="text" id="author" name="author" placeholder="Enter book Author" className="form-control" required value={author} onChange={e=>{setAuthor(e.target.value)}}/>

        <label htmlFor="genre" className="form-label">Genre</label>
        <input type="text" id="genre" name="genre" placeholder="Enter book description" className="form-control" required value={genre} onChange={e=>{setGenre(e.target.value)}}/>

        <label htmlFor="pages" className="form-label">Pages</label>
        <input type="number" id="pages" name="pages" placeholder="Enter book pages number" className="form-control" required value={pages} onChange={e=>{setPage(e.target.value)}}/>
        <br />

        <button className="btn btn-primary" style={{ backgroundColor: '#3ca3e7'}}>Update</button><span>  </span>
            <Link to="/"  className="btn btn-success">Back</Link>
        </div>
    </form>
</div>
  )
}

export default EditBook