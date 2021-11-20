import React, { Component } from 'react'
import PropTypes from 'prop-types';
class Edit extends Component {
    render() { 
        return (                            
        <div className="book-shelf-changer">
        <select value={this.props.Info.shelf?this.props.Info.shelf:"none"} onChange={(e)=>(this.props.toCurrentlyReading(e.target.value,this.props.Info))}>
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>);
    }
}
Edit.propTypes={
  toCurrentlyReading:PropTypes.func.isRequired,
  Info:PropTypes.object.isRequired
}
 
export default Edit;