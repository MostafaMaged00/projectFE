import PropTypes from 'prop-types'

function Book(props) {
  return (
    <div className="book-card">
     
      <img className="book-card-img" src="https://i.ebayimg.com/images/g/VnYAAOSw3JBf~vTx/s-l960.webp" alt="book title" />
      <h5 className="book-card-title">Title: {props.title}</h5>
      <p className="book-card-desc">Author: {props.desc}</p>
      <p className="book-card-desc">Pages:{props.pages}</p>
        <p> <a href="dfds">Delete</a><span>  </span>
        <a href="dfds">Edit</a></p>
      
    </div>
  )
}
Book.protoTypes = {
  title:PropTypes.string,
  desc: PropTypes.string,
  pages: PropTypes.number,

}



export default Book