import React from 'react';
import '../style/Categories.css';
import { useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();

  return (
    <button onClick={() => dispatch(checkStatus())} type="button">
      Check Status
    </button>
  );
};

export default Categories;
