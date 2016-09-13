import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class BookList extends Component {
	// A container is a React component that has a direct connection to STATE that is managed by Redux
	// React and Redux are two DIFFERENT LIBRARIES and you need to use ReactRedux to sync the two up to work together
	// A container is the highest level parent element that will be "concerned" with the specific piece of STATE
	renderList() {
		// The Application STATE has a property called books (accessible through props.books)
		return this.props.books.map((book) => {
			return (
				<li key={book.title} className="list-group-item">{book.title}</li>
			);
		});
	}

	render() {
		return (
			<ul className="list-group col-sm-6">
				{this.renderList()}
			</ul>
		)
	}
}

// This Function will take the Applications STATE (containing the list of books and active book)
// Whatever is returned from this function will show up as props inside bookList CONTAINER
function mapStateToProps(state) {
	// whatever is defined within the function will be added to the props of the CONTAINER (React Application)
	return {
		books: state.books
	};
}

// connect function is used to connect the mapStateToProps function and the Booklist
// Component and use them to produce a CONTAINER in the app
export default connect(mapStateToProps)(BookList);
