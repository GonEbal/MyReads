import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import { Route } from 'react-router-dom'

const categories = [{ name: 'currentlyReading' }, { name: 'wantToRead' }, { name: 'read' }];

class BooksApp extends React.Component {
  state = {
    books: [],
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
      })
  }

  onAddBook = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then(() => {
        this.componentDidMount()
      })

  }

  render() {
    const { books } = this.state;
    return (
      <div className="app">
      <Route exact path='/' render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              {categories.map(category => (
              <ListBooks 
                key = {category.name}
                books={books}
                category={category}
                onAddBook={this.onAddBook}
              />
              ))}
            </div>
          </div>
          )} />

          <Route exact path='/search' render={() => (
            <SearchBooks 
              onAddBook={this.onAddBook}
              books={books}
            />
          )} />
      </div>
    )
  }
}

export default BooksApp
