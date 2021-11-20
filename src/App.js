import React,{ Component } from 'react'
import { Route , Switch } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchPage from './Components/SearchPage'
import BooksPage from './Components/BooksPage'


class BooksApp extends Component {
  state = {
    books:[],
    showSearchPage: false
  }
  componentDidMount(){
    BooksAPI.getAll().then(
      (booksdata)=>{
        this.setState({books:booksdata})
      }
    )
  }
  toCurrentlyReading=(shelf,bookinfo)=>{
    const Books = [...this.state.books]
    if(Books.indexOf(bookinfo) === -1){
      const Book = {...bookinfo}
      Book.shelf=shelf
      this.setState({books:[...this.state.books , Book]})
    }
    else{
    const index = Books.indexOf(bookinfo)
    console.log(index)
    Books[index]={...Books[index]}
    Books[index].shelf= shelf
    this.setState({books:Books})
    }
    BooksAPI.update(bookinfo,shelf)
    BooksAPI.getAll().then(
      (booksdata)=>{
      }
    )
  }
  

  render() {
    return (
      <div className="app">
        <Switch>
          <Route path="/Search" render={(prop)=>(<SearchPage toCurrentlyReading={this.toCurrentlyReading} booksInfo={this.state.books} {...prop}/>)}/>
          <Route exact path="/" render={(prop)=>(<BooksPage books={this.state.books} toCurrentlyReading={this.toCurrentlyReading} {...prop}/>)}/>
        </Switch>
      </div>
    )
  }
}

export default BooksApp
