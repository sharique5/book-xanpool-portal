import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import Book from './Controllers/Book';
import BookCatalog from './Controllers/BookCatalog';
import Header from './Components/Header';

const router = (
  <Router>
      <Header/>
      <Route path="/" exact component={BookCatalog} />
      <Route path="/:id" exact component={Book}/>
  </Router>
)

ReactDOM.render(
  router,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
