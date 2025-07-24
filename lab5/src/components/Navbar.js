import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
    <Link className="navbar-brand" to="/">QuizApp</Link>
    <div className="navbar-nav">
      <Link className="nav-link" to="/">Home</Link>
      <Link className="nav-link" to="/news">News</Link>
      <Link className="nav-link" to="/about">About</Link>
      <Link className="nav-link" to="/contact">Contact</Link>
      <Link className="nav-link" to="/quiz">Quiz</Link>
    </div>
  </nav>
);

export default Navbar;
