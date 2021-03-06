import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {CSSTransitionGroup} from 'react-transition-group';


const URL_TEAMS = 'http://localhost:3004/teams';


const fadeAnimation = {
    transitionName:'fade',
    transitionAppear:true,
    transitionAppearTimeout:500,
    transitionEnter:true,
    transitionEnterTimeout:500,
    transitionLeave:true,
    transitionLeaveTimeout:500

}
class Teams extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       teams:[],
       filtered:[],
       keywords:''
    };
  };

  componentDidMount(){
      fetch(URL_TEAMS, {method:'GET'})
      .then(response => response.json())
      .then(json =>{
          this.setState({
              teams:json,
              filtered:json
          })
      })
  }

  searchTeam = (event) => {
    const keyword = event.target.value;
    if (keyword !== '') {
        const list = this.state.teams.filter((item) =>{
            return item.name.toLowerCase().indexOf(keyword.toLowerCase()) > -1
        })
        this.setState({
            filtered:list,
            keyword:event.target.value
        })
    }else {
        this.setState({
            filtered:this.state.teams,
            keyword:keyword
        })
    }
  }

  renderList = ({filtered}) => {
    return filtered.map((item)=>{
        return(
            <Link to={`/team/${item.name}`} key={item.id} 
            className='team-item'>
                <img src={`../images/teams/${item.logo}`} alt={item.name}/>
 
            </Link>
        )
    })
  }
  
  render() {
    return (
      <div className='teams-components'>
      <div className='teams-input'>
        <input 
        value={this.state.keyword} 
        type="text" 
        placeholder='Search For A Teams'
        onChange={(e)=>{this.searchTeam(e)}}        
        />
      </div>
      <div className='teams-container'>
      <CSSTransitionGroup {...fadeAnimation}>
        {this.renderList(this.state)}
      </CSSTransitionGroup>
      </div>
      </div>
    )
  }
};

export default Teams;
