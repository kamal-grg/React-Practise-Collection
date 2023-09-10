import React from "react";

export default class VowelCount extends React.Component {
    constructor(props)
    {
        super(props);
        this.state={data:''};
    }
  render() {
    // const handler=(()=>{
    //     let sentence=this.state.data;
    //      let vcount= sentence.match(/[aeiou]/gi) ? sentence.match(/[aeiou]/gi).length :0
    //      alert("Vowel Count:" + vcount);
    //  });
    const handler=(()=>{
       let sentence=this.state.data;
        let vcount=0;
       let vowels=['a','e','i','o','u'];
        for(let ch of sentence)
        {
            if(vowels.includes(ch))
            {
                vcount++;
            }
        }
        alert("Vowel Count:" + vcount);
    });
    
    return (
      <div>
        <h1>Vowel Count</h1>
        <input type="text" placeholder="Enter Text" onChange={(e)=>{this.setState({data:e.target.value})}}></input>
        <button onClick={handler}>Count Vowels</button>
        
      </div>
    );
  }
}
