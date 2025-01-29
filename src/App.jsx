import { BrowserRouter, Routes, Route } from "react-router-dom";

import AllBooks from "./components/AllBooks";
import AddBook from "./components/AddBook";
import EditBook from "./components/EditBook";

import "./App.css";
import Footer from "./components/Footer";

function App() {


  return (

    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllBooks/>}></Route>
        <Route path="/book/addbook" element={<AddBook/>}></Route>
        <Route path="/book/editbook" element={<EditBook/>}></Route>
      
      </Routes>
      
    </BrowserRouter>
      <Footer/>
    
    </>
   


  );
}

export default App;
