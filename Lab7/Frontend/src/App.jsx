import Book from "./components/Book";
import Fruit from "./components/Fruit";
import Pen from "./components/Pen";
import { books } from "./Data/books";
import { pens } from "./Data/pens";







export default function App() {
  return (
    <>
      <h1 className="page-title">React Book Store</h1>

      <div className="container">
        <Book book={Books[0]} />
        <Book book={Books[1]} />
        <Book book={Books[0]} />
        <Book book={Books[1]} />
        <Pen pen = {Pens[0]} />
        <Pen pen = {Pens[1]} />
        <Fruit/> 
      </div>
    </>
  );
}