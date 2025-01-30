import { Link } from "react-router-dom"

function Navbar() {
  return (
    
    <div className="nav">
      <a href="/" className="logo">Bookz</a>
     
        <ul>
        
          <li><a href="/book/addbook/">Add Book</a></li>
          <li><a href="/about">About</a></li>
        </ul>
    </div>

  )
}

export default Navbar