import React from "react";

export default class Keypad extends React.Component
{
    constructor(props)
    {
        super(props);
    }
     
    render(){
       
        return <div>
            <button onClick={this.props.keypadClicked} value="1">1</button>
            <button onClick={this.props.keypadClicked} value="2">2</button>
            <button onClick={this.props.keypadClicked} value="3">3</button><br/>
            <button onClick={this.props.keypadClicked} value="4">4</button>
            <button onClick={this.props.keypadClicked} value="5">5</button>
            <button onClick={this.props.keypadClicked} value="6">6</button><br/>
            <button onClick={this.props.keypadClicked} value="7">7</button>
            <button onClick={this.props.keypadClicked} value="8">8</button>
            <button onClick={this.props.keypadClicked} value="9">9</button><br/>
            <button onClick={this.props.keypadClicked} value="0">0</button>
            <button onClick={this.props.dotClicked} value=".">.</button>
            <button onClick={this.props.acClicked} value="Ac">Ac</button><br/>
            <button onClick={this.props.operatorClicked} value="*">*</button>
            <button onClick={this.props.operatorClicked} value="/">/</button>
            <button onClick={this.props.operatorClicked} value="-">-</button><br/>
            <button onClick={this.props.operatorClicked} value="+">+</button>
            <button onClick={this.props.equalClicked} value="=">=</button>
        </div>
    }
}