import React from "react";

export default class CounterUpDown extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={counter:0};
    }
    render()
    {
        return <div>
            <h1>Counter {this.state.counter}</h1>
            <button onClick={() => { this.setState({counter: this.state.counter +1 })}}>Plus</button>
            <button onClick={() => { this.setState({counter: this.state.counter -1 })}}>Minus</button>
           
        </div>
        
    }
}