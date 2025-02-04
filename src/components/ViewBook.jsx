import { useEffect,useState } from 'react';
import { Link,useParams } from 'react-router-dom'

function ViewBook() {

    const {id} = useParams();
    const [bookData,setBookData] = useState({})
    useEffect(()=>{
        fetch(`http://localhost:3000/api/book/${id}`)
        //fetch(`https://projectbe-a78m.onrender.com/api/book/${id}`)
        .then((res)=>res.json())
        .then((data)=>setBookData(data))
        .catch((err)=>console.log(err.message))

    },[])


  return (

    <div className="book-details-container">
        <h1>Book Details</h1>



        <div className="details-container">
  <div className="details-left">
    <img src={bookData.image} alt="Image Description" />
  </div>
    {bookData && <div className="details-right">
           
           
            <p><strong>Title: </strong>{bookData.title}</p>
            <p><strong>Author: </strong>{bookData.author}</p>
            <p><strong>Genre: </strong>{bookData.genre}</p>
            <p><strong>Pages: </strong>{bookData.pages}</p>
            

        </div>}
</div>


<div className="book-details-footer">
          <Link to="/"  className="btn btn-success" >Back</Link>
          </div>
        
        
    </div>
     
    
     
  )
}

export default ViewBook