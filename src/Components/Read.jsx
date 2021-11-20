import React, { Component } from 'react'
import Products from './Products';
import PropTypes from "prop-types"
class Read extends Component {
    render() { 
        return( 
        <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {this.props.books.filter((x)=>x.shelf==="read").map((book)=>(
                        <Products Info={book} toCurrentlyReading={this.props.toCurrentlyReading} key={book.id}/>
                    ))}
                </ol>
            </div>
        </div>)
    }
}
Read.propTypes={
    books:PropTypes.array.isRequired,
    toCurrentlyReading: PropTypes.func.isRequired
}
export default Read;