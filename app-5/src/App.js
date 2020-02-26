import React, {Component} from 'react';
import './App.css';
import Image from './Image'

class App extends Component{
  constructor(){
    super();
  }
  render(){
    return(
      <div>
        <Image url={'https://memeshappen.com/media/created/CONGRATULATIONS-YOU-FAIL-meme-7761.jpg'}/>
      </div>
    );
  }
}


export default App;
