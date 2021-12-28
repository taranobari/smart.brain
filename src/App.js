import logo from './logo.svg';
import './App.css';
import Navigation from './copmonents/Navigation/Navigation';
import Logo from './copmonents/Logo/Logo';
import ImageLinkForm from './copmonents/ImageLinkForm/ImageLinkForm'
import Rank from './copmonents/Rank/Rank'
// import Particles from 'react-particles-js'; 
import { Component } from 'react';

// const particle={
//  Particles:{
//    number:{
//      value:30,
//      density:{
//      enable:true,
//      value_area:800
//      }
//     }
//   }

// }

class App extends Component {
  constructor(){
    super()
    this.state={
      input:'',
    }
    onInputChane=(event)=>{
      console.log(event.target.value)
    }
  }
render(){
  return (
    
    <div className="App">
      {/* <Particles className='particles'  params={particle}/> */}
     <Navigation/>
     <Logo/>
     {/* <Rank/> */}
     <ImageLinkForm onInputChane={onInputChane}/>
     {/* <FaceReccognation/> */}
    </div>
  );
}
}

export default App;
