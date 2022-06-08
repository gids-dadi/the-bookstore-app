import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import Books from './components/Books';
import Categories from './components/Categories';
import NotFound from './components/NotFound';
import './App.css';

const App = () => (
  <Router>
    <NavBar />
    <section className="content">
      <Routes>
        <Route path="/bookstore" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </section>
  </Router>
);

export default App;
