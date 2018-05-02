import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions'


class MoviesList extends Component {

  componentWillMount(){
    this.props.moviesList()
  }
  
  
  renderList = (movies) => {
    if (movies) {
        return movies.map((movies)=>{
          return(
            <div>{movies.name}</div>
    
          )
        })  
    } 
    
  }
  
  
  render() {
    return (
      <div className="App">
        {this.renderList(this.props.movies)}
      </div>
    );
  }
}

function mapStateToProps(state){ // <- redux state
  console.log(state) 
  // bind redux state to movies: in react state
  return {
    movies:state.movies
  }
}

export default connect(mapStateToProps, actions)(MoviesList); // to connect map to react
// connect makes actions available
