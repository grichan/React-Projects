import React,{Component} from 'react';

import Banner from '../components/banner';
import ArtistsList from '../components/artists_list';

const URL_ARTISTS = 'http://localhost:3004/artists';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            artists:''
        }
    }

    componentDidMount(){ // after render
        fetch(URL_ARTISTS,{
            method:'GET'
        })
        .then(response => response.json())
        .then(json =>{
            this.setState({
                artists:json
            })

        })
    }

    render() { 
        return ( 
            <div>
                <Banner/>
                <ArtistsList allArtists={this.state.artists}/>
            </div>
         )
    }
}
 
export default Home;