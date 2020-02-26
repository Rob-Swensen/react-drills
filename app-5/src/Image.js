import React, {Component} from 'react';

class Image extends Component{
    constructor(){
        super();

    }
    render(){
        return(
            <div>
                <img src={this.props.url}/>
                <div>Error 409</div>
            </div>
        )
    }
}

export default Image;