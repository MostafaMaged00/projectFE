import { useState, useEffect } from "react";
import Book from "./components/Book.jsx";
import "./App.css";


function App() {
  const [books, setBook] = useState([]);
  useEffect(() => {
    // Async function to fetch data from the API
    const fetchBooks = async () => {
      try {
        // Fetch data from the API
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        // Check if the response is successful (status code 200-299)
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        // Parse the JSON response
        const bookData = await response.json();

        // Set users data into state
        setBook(bookData);
      } catch (error) {
        //
        console.log(error);
      }
    };

    // Call the fetch function
    fetchBooks();
  }, []);

  return (
    <>
    <div className="App">
      <h1>Books</h1>
      <div className="book-container">
     
        {books.map((book) => (
        
           
            <Book title={book.name} desc={book.username} pages={book.id}/>
      
        ))}
  
   
      </div>
      </div>
    </>
  );
}

export default App;
