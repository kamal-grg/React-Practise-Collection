import React from "react";

export default class Display extends React.Component
{
    constructor(props)
    {
        super(props);
    }
    render(){
        return <div>
            <div>{this.props.text}</div>
        </div>
    }
}