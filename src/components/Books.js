import React from 'react';
import Book from './Book';
import Form from './CreateNewBook';
import '../style/Books.css';

function Books() {
  const bookList = [
    {
      id: 1,
      title: 'War and Peace',
      author: 'Leo Tolstoy',
    },
    {
      id: 2,
      title: 'Middlemarch',
      author: 'George Eliot',
    },
    {
      id: 3,
      title: 'The Adventures of Huckleberry Finn',
      author: 'Mark Twain',
    },
  ];

  return (
    <section className="main">

      <Form />
      <Book items={bookList} />
    </section>
  );
}

export default Books;
