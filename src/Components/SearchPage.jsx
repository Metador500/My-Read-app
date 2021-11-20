import React, { Component } from 'react'
import * as bookapi from "../BooksAPI"
import ProductSearch from './ProductSearch';
import PropTypes from "prop-types"
import {Link} from "react-router-dom"

class SearchPage extends Component {
  state={
    query:"",
    data:[]
  }
  updateinput=(e)=>{
    this.setState({query:e.target.value})
    if(e.target.value.length>0){
      bookapi.search(e.target.value).then(
        (datas)=>{
            if(datas.error){
              this.setState({data:[]})
            }else{
              this.setState({data:datas})
            }
        }
      )
    }else{
      this.setState({data:[]})
    }
  }
  updatesearch=(shelf,bookinfo)=>{
    const Books = [...this.state.data]
    const index = Books.indexOf(bookinfo)
    Books[index]={...Books[index]}
    Books[index].shelf= shelf
    this.setState({data:Books})
  }
    render() { 
        return (          
        <div className="search-books">
        <div className="search-books-bar">
        <Link to="/"><button className="close-search" >Close</button></Link>
          <div className="search-books-input-wrapper">
            <input type="text" value={this.state.query} onChange={this.updateinput} placeholder="Search by title or author"/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.data.map((book)=>(
              <ProductSearch Info={book} toCurrentlyReading={this.props.toCurrentlyReading} key={book.id} updatesearch={this.updatesearch}/>
            ))}
          </ol>
        </div>
      </div>);
    }
}
SearchPage.propTypes={
  toCurrentlyReading:PropTypes.func.isRequired,
}
export default SearchPage;