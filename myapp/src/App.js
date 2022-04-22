import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import CreateBook from './components/CreateBook';
import ShowBookList from './components/ShowBookList';
import ShowBookDetails from './components/ShowBookDetails';
import UpdateBookInfo from './components/UpdateBookInfo';

class App extends Component {
  render() {
    return (
      <Routes>
        <div>
          <Route exact path='/' element={ShowBookList} />
          <Route path='/create-book' element={CreateBook} />
          <Route path='/edit-book/:id' element={UpdateBookInfo} />
          <Route path='/show-book/:id' element={ShowBookDetails} />
        </div>
      </Routes>
    );
  }
}

export default App;