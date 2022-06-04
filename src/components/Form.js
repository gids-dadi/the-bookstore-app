import React from 'react';
import '../style/Form.css';

function form() {
  return (
    <div>
      {' '}
      <>
        <h2>Add A Book</h2>
        <form className="form">
          <input className="title" type="text" placeholder="Enter book title" />
          <input
            className="author"
            type="text"
            placeholder="Enter book author"
          />
          <button type="submit">Add Book</button>
        </form>
      </>
    </div>
  );
}

export default form;
