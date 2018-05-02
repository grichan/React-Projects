


export default function (state = null,action) { 
// default function argument ^^ on state 
// actions are here 

    switch(action.type){
        case 'MOVIES_LIST':
            return action.payload;
        default: // if no match for action
            return state;
    }
 }