import React from 'react';
import '../style/Book.css';

function Book(props) {
  const { items } = props;

  return (
    <div className="book-container">
      <h1>Stored Books</h1>
      {items.map((book) => (
        <div className="book" key={book.id}>
          &quot;
          {book.title}
          &quot; by &nbsp;
          {book.author}
          <button>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default Book;
