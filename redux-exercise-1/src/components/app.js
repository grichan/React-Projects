import React, { Component } from 'react';

//COMPONENTS
import Search from '../containers/search';
import CarsList from '../containers/cars_list';

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <Search/>
        <CarsList/>
      </div>
    )
  }
};
