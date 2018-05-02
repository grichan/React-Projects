import React from 'react';

// class PostsItem extends Component{

//     constructor(props){
//         super(props);


//     }
//     render(){
//         return(
//             <div>
//                 {this.props.match.params.id}
//             </div>
//         )
//     }
// }


const PostsItem = ({match})=>{
    return <div>{match.params.id}</div>
}
export default PostsItem;