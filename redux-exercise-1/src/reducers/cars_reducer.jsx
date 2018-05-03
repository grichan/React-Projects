





 export default function(state=[], action){
    //console.log(action)
    switch(action.type){
        case 'SEARCH_CARS':
            return {...state, list:action.payload}
        case 'CAR_DETAIL':
            return {...state, detail:action.payload} // store inside detail
        case 'CLEAR_DETAIL':
            return {...state, detail:action.payload} // store inside detail
        default:
            return state
    }

    
}