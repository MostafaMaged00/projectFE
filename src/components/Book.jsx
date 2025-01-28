import PropTypes from 'prop-types'

function Book(props) {
  return (
    <div className="book-card">
     
      <img className="book-card-img" src="https://eloquentjavascript.net/img/cover.jpg" alt="book title" />
      <h2 className="book-card-title">Title: {props.title}</h2>
      <p className="book-card-desc">Author: {props.desc}</p>
      <p className="book-card-desc">Pages:{props.pages}</p>

    </div>
  )
}
Book.protoTypes = {
  title:PropTypes.string,
  desc: PropTypes.string,
  pages: PropTypes.number,

}



export default Book