import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Books from './components/Books';
import Categories from './components/Categories';
import './App.css';

function App() {
  return (
    <>
      <nav className="navbar">
        <a href="/" className="logo">
          BookStore
        </a>

        <div className="navigation">
          <Link to="/">Books</Link>
          <Link to="/categories">Categories</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;
