import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';



const books = [
{
  id:"1",
  img : "https://m.media-amazon.com/images/I/71UwSHSZRnS._AC_UY218_.jpg", 
  title : "power book1",
  author : "nag"
},
{
  id:"2",
  img : "https://m.media-amazon.com/images/I/61ZPDQOjw-L._AC_UY218_.jpg", 
  title : "power book2",
  author : "black"
},
{
  id:"3",
  img : "https://m.media-amazon.com/images/I/81zqe4fNdlL._AC_UY218_.jpg", 
  title : "power book3",
  author : "ared"
},
{
  id:"4",
  img : "https://m.media-amazon.com/images/I/917wUuyIaHL._AC_UY218_.jpg", 
  title : "power book4",
  author : "nahgzfxghyxa"
},
{
  id:"5",
  img : "https://m.media-amazon.com/images/I/81ZLwAwD-ML._AC_UY218_.jpg", 
  title : "power book4",
  author : "hello"
},
];

function BookList() {
  return(
    <section className='booklist'>
      {books.map((book) => {
        return <Book book={book} key={book.id} >
        </Book>;
      })}

    </section>
  );
}
const Book = (props) => {
  const {img, title, author}=props.book;
  const clickHandler = () => {
    console.log("Hello you clicked me!");
  };
  return(
    <article className='book'>
      <img src={img} alt=''/>
      <h2>{title}</h2>
      <h3>{author}</h3>
      <button onClick={clickHandler}>Click here</button>
    </article>
  );
};


ReactDOM.createRoot(document.getElementById("root")).render(<BookList/>);
