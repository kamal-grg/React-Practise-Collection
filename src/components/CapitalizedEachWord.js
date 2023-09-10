import React from "react";

export default class CapitalizedEachWord extends React.Component {
    constructor(props)
    {
        super(props);
        this.state={data:''};
    }
  render() {
  
    const handler=(()=>{
       let sentence=this.state.data;
        
        alert( sentence.split(' ').map((word)=>{return word[0].toUpperCase() + word.slice(1)}).join(' '));
    });
    
    return (
      <div>
        <h1>Capital Word</h1>
        <input type="text" placeholder="Enter Text" onChange={(e)=>{this.setState({data:e.target.value})}}></input>
        <button onClick={handler}>Capitalized Word</button>
        
      </div>
    );
  }
}
