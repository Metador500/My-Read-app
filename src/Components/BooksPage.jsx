import React, { Component } from 'react'
import CurrentlyReading from './CurrentlyReading'
import WantToRead from './WantToRead'
import Read from './Read'
import Nav from "./Nav"
import {Link} from "react-router-dom"
import  PropTypes  from 'prop-types';
class BooksPage extends Component {
    render() { 
        return (
            <div className="list-books">
            <Nav/>
            <div className="list-books-content">
                <CurrentlyReading books={this.props.books} toCurrentlyReading={this.props.toCurrentlyReading} />
                <WantToRead books={this.props.books } toCurrentlyReading={this.props.toCurrentlyReading}/>
                <Read books={this.props.books} toCurrentlyReading={this.props.toCurrentlyReading}/>
            </div>
            <div className="open-search">
            <Link to="/Search">
              <button> Add a book</button>
            </Link>
            </div>
          </div>
        );
    }
}
BooksPage.propTypes={
  toCurrentlyReading:PropTypes.func.isRequired,
  books:PropTypes.array.isRequired
}
export default BooksPage;