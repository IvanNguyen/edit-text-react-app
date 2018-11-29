import React, { Component } from 'react';


class ColorPicker extends Component {
    constructor(props){
        super(props);
        this.state={
            colors : ['red','green','blue','black']
        };
    }
    showColor(color){
        return {
            backgroundColor : color
        };
    };
    setActiveColor(color) {
        this.props.receiveColor(color);
    };
  render() {
      let elmColors = this.state.colors.map((color,index) => {
          return <span key={index} 
                    style={this.showColor(color)}
                    className={this.props.color === color ? 'active' : ''}
                    onClick={() => this.setActiveColor(color)}
                    ></span>
      });
    return (
      <div>
        <div className="panel panel-info">
                <div className="panel-heading">
                    <h3 className="panel-title">ColorPicker</h3>
                </div>
                <div className="panel-body">
                    {elmColors}
                </div>
        </div>   
      </div>
    );
  }
}

export default ColorPicker;
