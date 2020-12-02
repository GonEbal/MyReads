import React, { Component } from 'react';
import BookShelf from './BookShelf'
import { Link } from 'react-router-dom'

class ListBooks extends Component {
  onAddBook = (book, shelf) => {
    this.props.onAddBook(book, shelf);
  };

  render() {
    const { books, category } = this.props
    let shelfName = ''
    if (category.name === 'currentlyReading') {
      shelfName = 'Currently Reading'
    } else if (category.name === 'wantToRead') {
      shelfName = 'Want To Read'
    } else {
      shelfName = 'Read'
    }
    return (
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{shelfName}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
            {books.filter(book => book.shelf === category.name).map((b) => (
              <li key={b.id}>
                  <BookShelf
                  book={b}
                  onAddBook={this.onAddBook}
                  />
                </li>
              ))}
            </ol>
          </div>
        </div>
        <div className="open-search">
          <Link
          to='/search'
          className='open-search-button'
          >Add a book</Link>
        </div>
      </div>
    )
  }
}

export default ListBooks