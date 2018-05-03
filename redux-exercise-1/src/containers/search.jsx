import React, { Component } from 'react';
import {connect} from 'react-redux'; // redux
import { getCars } from '../actions' // redux
import {bindActionCreators } from 'redux'; // redux

class Search extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       keyword: ''
    };
  };

  handleChange = (event) => {
    this.setState({
      keyword:event.target.value
    })
  }
  
  componentDidMount() {
    console.log(this.state);
    
  }
  

  searchCars = (event) => {
    event.preventDefault();
    this.props.getCars(this.state.keyword)
//    console.log(this.state);
  }
  
  render() {
    return (
      <div className='main_search'>
        <form onSubmit={this.searchCars}>
          <input type="text" value={this.state.keyword} 
          onChange={this.handleChange}/>
        </form>
      </div>
    )
  }
};

// mapsstatetoprops 
// mapdispatchtoprops
// redux _
function mapdispatchtoprops(dispatch) {
  return bindActionCreators({getCars}, dispatch)
}

// you use mapStateToProps on null 
export default connect(null,mapdispatchtoprops)(Search);