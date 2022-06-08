import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/books';
import '../style/Book.css';

const Book = (props) => {
  const dispatch = useDispatch();

  const { id, title, author } = props;

  const handleRemoveBook = () => {
    dispatch(removeBook(id));
  };

  return (
    <div className='book-container'>
      <div className='block-l'>
        <div className='info'>
          <h2>{title}</h2>
          <h3>{author}</h3>
        </div>
        <div className='btn-container'>
          <button type='button'>Comments</button>
          <button type='button' onClick={handleRemoveBook}>
            Remove
          </button>
          <button type='button'>Edit</button>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
export default Book;
