import React, { Component } from 'react';

class BookShelf extends Component {
	state = {
	    shelf: '',
	};

	componentDidMount() {
		if (this.props.book.shelf) {
			this.setState(() => ({
		      shelf: this.props.book.shelf,
		    }));
		} else {
			this.setState(() => ({
		      shelf: 'none',
		    }));
		}
	}
	handleChange = event => {
		const { value } = event.target;

	    this.setState(() => ({
	      shelf: value,
	    }));
	    this.handleSubmit(value)
	  };
	handleSubmit = shelf => {
		const book = this.props.book
	    this.props.onAddBook(book, shelf);
	  };

	render() {
		const { book } = this.props
		let url = []
		if (book.imageLinks) {
			url = book.imageLinks.smallThumbnail
		} else {
			url = 'https://img.favpng.com/19/10/9/question-mark-symbol-sign-computer-icons-png-favpng-T3t3e8dw8dHkGeyPW3MKvVewM.jpg'
		}
		let authors = ''
		if (book.authors) {
			authors = (book.authors).join(', ');
		} else {
			authors = 'Unknown'
		}
		return (
			<div className="book">
	       	 <div className="book-top">
	          	<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${url})` }}></div>
	          	<div className="book-shelf-changer">
	          		<form onSubmit={this.handleSubmit}>
		            	<select value={this.state.shelf} onChange={this.handleChange}>
			              	<option value="move" disabled>Move to...</option>
			              	<option value="currentlyReading">Currently Reading</option>
			              	<option value="wantToRead">Want to Read</option>
			              	<option value="read">Read</option>
			              	<option value="none">None</option>
		            	</select>
	            	</form>
	          	</div>
	        	</div>
	        	<div className="book-title">{book.title}</div>
	        	<div className="book-authors">{authors}</div>
	      	</div>
      	)
	}
}

export default BookShelf