import React from 'react';
import PropTypes from 'prop-types';
import '../style/Book.css';

function Book(props) {
  const { items } = props;

  return (
    <div className='book-container'>
      <h1>Stored Books</h1>
      {items.map((book) => (
        <div className='book' key={book.id}>
          &quot;
          {book.title}
          &quot; by &nbsp;
          {book.author}
          <button type='button'>Remove</button>
        </div>
      ))}
    </div>
  );
}

Book.propTypes = {
  data: PropTypes.isRequired,
};

export default Book;
