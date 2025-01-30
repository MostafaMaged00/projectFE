import PropTypes from 'prop-types'
import {  useNavigate } from "react-router-dom"


function Book(props) {

  const navigate = useNavigate()
  // create function to edit a book
  const EditDetails=(id)=>{
    navigate("/book/editbook/"+id)
  }


  //create a function to delete a book
  const handleDelete = (_id) => {
    fetch(`http://localhost:3000/api/book/${_id}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(()=>{
        //alert("New book Added Successfully");
        navigate("/")
      })
      .catch(err => console.log(err))
      
  };


  return (
    <div className="book-card">
     
      <img className="book-card-img" src="https://i.ebayimg.com/images/g/VnYAAOSw3JBf~vTx/s-l960.webp" alt="book title" />
      <h6 className="book-card-title">{props.title}</h6>
      <p className="book-card-desc">Author: {props.author}</p>
      <p className="book-card-desc">Pages:{props.pages}</p>
      <button className="edit-btn"onClick={()=>{EditDetails(props.id)}}>Edit</button>
      <span></span>
      <button className="delete-btn"onClick={()=>{handleDelete(props._id)}}>Delete</button>
      
      
      
    </div>
  )
}
Book.protoTypes = {
  title:PropTypes.string,
  desc: PropTypes.string,
  pages: PropTypes.number,

}



export default Book