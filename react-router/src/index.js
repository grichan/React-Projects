import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route, Link, Switch, NavLink} from 'react-router-dom';

// COMPONENTS
import Posts from './components/posts';
import Profile from './components/profile';
import PostsItem from './components/posts_item';
import NotFound from './components/not_found';
import Lifecycle from './components/lifecycle';
class App extends Component{
    render(){
        return(
            <div>Home</div>
        )
    }
}

ReactDOM.render(
    <BrowserRouter>
    <div>
        <header>Header on every page <br/>
            <NavLink to='/' activeClassName='selected'>Home</NavLink><br/>
            <NavLink to='/posts' activeClassName='selected'>posts</NavLink><br/>
            <NavLink to='/profile'>profile</NavLink><br/>
            <NavLink to='/lifecycle'>Life</NavLink>
            <hr/>
        </header>
        <Switch>
            <Route path='/posts/:id' component={PostsItem}></Route>
            <Route path='/profile' component={Profile}></Route>
            <Route path='/lifecycle' component={Lifecycle}></Route>
            <Route exact path='/posts' component={Posts}></Route>
            <Route exact path='/' component={App}></Route>
            <Route path='*' component={NotFound}></Route>
        </Switch>

    </div>
    </BrowserRouter>    
    , document.getElementById('root'));

// memory router -> not updating url 