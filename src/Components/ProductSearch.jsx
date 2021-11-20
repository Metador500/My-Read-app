import React, { Component } from 'react'
import SearchEdit from './SearchEdit';
import  PropTypes  from 'prop-types';
class ProductSearch extends Component {
    render() { 
        return (
            <li>
              <div className="book">
                <div className="book-top">
                  <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: (this.props.Info.imageLinks&&this.props.Info.imageLinks.thumbnail?`url(${this.props.Info.imageLinks.thumbnail})`:"none") }}></div>
                      <SearchEdit toCurrentlyReading={this.props.toCurrentlyReading} Info={this.props.Info} updatesearch={this.props.updatesearch}/>
                  </div>
                <div className="book-title">{this.props.Info.title}</div>
                <div className="book-authors">{this.props.Info.authors}</div>
              </div>
            </li>);
    }
}
ProductSearch.propTypes={
  toCurrentlyReading:PropTypes.func.isRequired,
  Info:PropTypes.object.isRequired
} 
export default ProductSearch;