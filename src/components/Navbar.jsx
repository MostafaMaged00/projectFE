import { Link } from "react-router-dom"

function Navbar() {
  return (
    
    <div className="nav">
      <a href="/" className="logo" >BOOKZ</a>
     
        <ul>
        
          <li><a href="/book/addbook/">Add Book</a></li>
          <li><Link to="/about">About</Link></li>
        </ul>
    </div>

  )
}

export default Navbar