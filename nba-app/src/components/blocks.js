import React from 'react';
import {Link} from 'react-router-dom';
import Reveal from 'react-reveal';
import 'animate.css/animate.css';


const generateBlocks = ({blocks}) => {
    if (blocks) {
        return blocks.map((item) => {
            console.log();
            var randomnumber = Math.floor(Math.random() * (2000 - 1000 + 1)) + 1000;
            return(
                    <Reveal effect='animated fadeInUp' duration={randomnumber} bottom key={item.id} className={`animation ${item.type}`}>
                        
                        <div className={`item ${item.type}`} >
                            <div className='veil'>
                            
                            </div>
                            <div className='image-holder'>
                                <div className={`image`} 
                                    style={{background:`url(../images/blocks/${item.image})
                                    no-repeat`}}> </div>

                                <div className='title'>
                                    <Link to={item.link}>{item.title}</Link>
                                </div>
                            </div>

                        </div>

                    </Reveal>
                )
                
            })
        }
    }


const Blocks = (props) => {
    //console.log(props);
    
return(
        <div className='home-blocks'>
            {generateBlocks(props)}

        </div>
    )

}

export default Blocks;