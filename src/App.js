import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ColorPicker from './components/ColorPicker'
import SizeSetting from './components/SizeSetting'
import Reset from './components/Reset'
import Result from './components/Result'

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      color: 'red',
      fontSize: 15
    }
  };
  onSetColor = (params) => {
    this.setState({
      color : params
    });
  }
  onSetSize = (value) => {
    if(this.state.fontSize + value >= 8 && this.state.fontSize + value <= 36)
      this.setState({
        fontSize : this.state.fontSize + value
      });
    }  
  onReset = (value) => {
    if(value){
      this.setState({
        fontSize : 15,
        color : 'red'
      });
    }
  } 
  render() {
    return (
      <div className="App mt-50">
        <div className="container">          
          <div className="row">            
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <ColorPicker color={this.state.color} receiveColor={this.onSetColor} />
            </div>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div className="row"> 
              <SizeSetting fontSize={this.state.fontSize} changeSize={this.onSetSize}/>             
            </div>
            <div className="row">
              <Reset resetDefault={this.onReset}/>
            </div>
           </div>          
          </div>
           <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <Result color={this.state.color} fontSize={this.state.fontSize}/>
            </div>           
            </div>       
        </div>
      </div>
    );
  }
}

export default App;
