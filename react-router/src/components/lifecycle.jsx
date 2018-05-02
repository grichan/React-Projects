import React, {Component} from 'react';

class Lifecycle extends Component {

/*
    ################################## LIFE CYCLES ##################################
*/

    // 1 GET DEFAULT STATE 
    constructor(props){
        super(props);

        // 2 SET INITIAL STATE 
        this.state = {
            title:'Pulp fiction',
            body:'Dummy Text sdfahfsdjka '
        }
    }

    componentWillReceiveProps(){
        console.log('BEFORE RECIVING PROPS');
    }

    // 3 BEFORE GETS CREATED 
    componentWillMount(){ // executed before render()
        console.log('Before Comp Is Created');
        
    }

    componentWillUpdate(){
        console.log('Before state is updated');

        
    }
    componentDidUpdate(){
        console.log('AFTER UPDATE');
        
    }
    
    shouldComponentUpdate(nextProps, nextState){
        console.log(this.state.title); // current state
        console.log(nextState.title); // catching the next update
        
        if (nextState.title === 'something else') {
            return false
        } else return true;
        
        //return false; prevent component from updating

    }
    // 4 RENDER JSX 
    render() {
        return (
             <div>
                 <h4>{this.state.title}</h4>
                 <div>{this.state.body}</div>
                <div onClick={()=>this.setState({title:'something else'})}>Click To Change</div>
             </div>
        )
    }

    // 5 AFTER COMPONENT MOUNT
    componentDidMount(){ // exec after mounted
        console.log('After component is mounted');

    }

    componentWillUnmount(){
        console.log('UNMOUNT');
            // whenever we destroy this component (go to diffrent one )
    }
}

export default Lifecycle;
