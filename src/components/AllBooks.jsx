import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Book from "./Book";


function AllBooks() {
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
            <h1>My Books</h1>
            <Link to="/book/add">Add Book</Link>
            <div className="Bottom-line"></div>
                <div className="book-container">
            
                {books.map((book) => (
                <Book 
                    key={book.id} 
                    title={book.name} 
                    desc={book.username} 
                    pages={book.id} 
                />
            ))}
            
                </div>
               
            </div>
          </>
        );
      }

export default AllBooks