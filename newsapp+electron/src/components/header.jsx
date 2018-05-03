import React, {Component} from 'react';

class Header extends Component {

    constructor(props){
        super(props);

        this.state = {
            title:'The key words:',
            keywords:''
        }
    };

    inputChange(event){
        this.setState({keywords:event.target.value})
        this.props.newsSearch(event.target.value)
    };

    render(){
        return(
            <header>
                <div className='logo' onClick={()=>{console.log('clicked')}}>Logo</div>
                <input type="text" onChange={this.inputChange.bind(this)}/> 
                

            </header>
        );
    };
}

export default Header;