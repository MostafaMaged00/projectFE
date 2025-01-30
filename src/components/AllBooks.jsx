import { useState, useEffect } from "react";


import Book from "./Book";


function AllBooks() {
        const [books, setBook] = useState([]);
        useEffect(() => {
          // Async function to fetch data from the API
          const fetchBooks = async () => {
            try {
              // Fetch data from the API
              const response = await fetch(
              
                "http://localhost:3000/api/book"
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
         
                <div className="book-container">
            
                {books.map((book) => (
                <Book 
                    key={book._id} 

                    title={book.title} 
                    author={book.author} 
                    pages={book.pages} 
                    image={book.image} 
                    _id={book._id}

                />
             
            ))}            
           
                </div>

           
          </>
        );
      }

export default AllBooks