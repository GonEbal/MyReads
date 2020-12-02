import React, { Component } from 'react';
import BookShelf from './BookShelf'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'

class SearchBooks extends Component {
	state = {
		query: '',
		showingBooksSearch: []
	}

	updateQuery = (query) => {
		this.setState(() => ({
			query: query
		}))
		this.updateSearch(query)
	}

	handleSubmit(data) {
	    alert('Your favorite book is: ' + data.book.title);
	    data.preventDefault();
	  }

	updateSearch = (query) => {
	  	let new_array = []

		if (query) {
    	BooksAPI.search(query)
	  		.then((search_books) => {
	  			if (search_books.error === 'empty query') {
	  					this.setState(() => ({
	  						showingBooksSearch: []
						}))
	  				} else {

	  					const myBooks = this.props.books;
	  					const searchBooks = search_books;

	  					const myBooksIds = myBooks.map(myBook => myBook.id);
	  					const searchBooksIds = searchBooks.map(searchBook => searchBook.id);

	  					const searchBooksExcludingMine = searchBooks.filter((searchBook) => 
	  						!myBooksIds.includes(searchBook.id)
	  					)

	  					const myBooksInSearch = myBooks.filter(myBook =>
	  						searchBooksIds.includes(myBook.id)
	  					)

	  					new_array = myBooksInSearch.concat(searchBooksExcludingMine)

	  					this.setState(() => ({
	  						showingBooksSearch: new_array

						}))
	  				}
	  		})
	  	} else {
	  		console.log('empty query')
	  		this.setState(() => ({
				showingBooksSearch: []
		}))
	  	}
	}

	onAddBook = (book, shelf) => {
		this.props.onAddBook(book, shelf);
	}

	render() {
		const { query, showingBooksSearch } = this.state

		return (
			<div className="search-books">
	            <div className="search-books-bar">
	              <Link 
	              className="close-search"
	              to='/'
	              >Close</Link>
	              <div className="search-books-input-wrapper">
	                	<input 
	                		type="text" 
	                		placeholder="Search by title or author"
	                		value={query}
	                		onChange={(event) => this.updateQuery(event.target.value)}
	                		/>

		            </div>
		        </div>
		        <div className="search-books-results">
		        	<ol className="books-grid">
		        		{showingBooksSearch.map((book) => (
		        			<li key={book.id}>
		        				<BookShelf 
		        				book={book}
		        				onAddBook={this.onAddBook}
		        				/>
		        			</li>
		        		))}
		        	</ol>
	            </div>
          </div>
		)
	}
}

export default SearchBooks;