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
        const data = await response.json();

        // Set users data into state
        setBook(data);
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
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <h2>{book.name}</h2>
            <p>Email: {book.email}</p>
            <p>Username: {book.username}</p>
          </li>
        ))}
      </ul>
      <Book/>
    </>
  );
}

export default App;
