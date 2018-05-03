// REDUX

const URL_ROOT = 'http://localhost:3004';

export function getCars(keywords) { // <--- we make a call to it

    //console.log(`Made a request with the ${keywords} KEY`)
    //console.log(`${URL_ROOT}/carsIndex?q={keywords}`);
    //search keyword

    const request = fetch(`${URL_ROOT}/carsIndex?q=${keywords}`,
     {method:'GET'})
     .then(response => response.json())
    

    
    return {
        type:'SEARCH_CARS',
        payload:request // its from the server
    }
} // sent to reducer


export function carDetail(id){

    const request = fetch(`${URL_ROOT}/carsIndex?id=${id}`,
    {method:'GET'})
    .then(response => response.json()) 

    console.log(request);
    
    return{
        type:'CAR_DETAIL',
        payload:request
    }
} 

export function clearDetail(){
    return{
        type:'CLEAR_DETAIL',
        payload:[]
    }
}