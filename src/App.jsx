import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AllBooks from "./components/AllBooks";
import AddBook from "./components/AddBook";
import EditBook from "./components/EditBook";



function App() {


  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllBooks/>}></Route>
        <Route path="/book/addbook" element={<AddBook/>}></Route>
        <Route path="/book/editbook" element={<EditBook/>}></Route>
      </Routes>
      
    </BrowserRouter>
    


  );
}

export default App;
