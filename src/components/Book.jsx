import PropTypes from 'prop-types'
import {  useNavigate } from "react-router-dom"


function Book(props) {

  // use a navigate hook
  const navigate = useNavigate()


  // function to display book details
  const ViewDetails=(_id)=>{
    navigate(`/book/viewbook/${_id}`)
    //console.log(id)
  }
  // function  to edit a book details
  const EditDetails=(_id)=>{
    navigate(`/book/editbook/${_id}`)
  
  }

  //create a function to delete a book
  const RemoveBook = (_id) => {
    if(window.confirm("Are you sure you want to remove a book!")){
    fetch(`http://localhost:3000/api/book/${_id}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(()=>{
        //alert("New book Added Successfully");
        window.location.reload();
      })
      .catch(err => console.log(err))
    }
      
  };


  return (
    <div className="book-card">
     
      <img className="book-card-img" src={props.image} alt="book cover image" />
      <h6 className="book-card-title">{props.title}</h6>
      <p className="book-card-desc">Author: {props.author}</p>
      <button className="edit-btn" onClick={()=>{ViewDetails(props._id)}}>View</button>
      <button className="edit-btn" onClick={()=>{EditDetails(props._id)}}>Edit</button>
      <button className="delete-btn"onClick={()=>{RemoveBook(props._id)}}>Delete</button>
      
      
      
    </div>
  )
}

// PropTypes to validate props
Book.protoTypes = {
  title:PropTypes.string,
  author: PropTypes.string,
  pages: PropTypes.number,
  image: PropTypes.string,

}
//use default value in case unknow data 
Book.defaultProps = {
  title:'Anonymous',
  author: 'Unknown',
  pages: 0,
  image: 'https://m.media-amazon.com/images/I/21TsZ14+iBL._AC_UF1000,1000_QL80_.jpg',
  
};



export default Book