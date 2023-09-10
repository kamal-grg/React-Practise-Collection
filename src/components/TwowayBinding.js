import React from "react";

export default class TwowayBinding extends React.Component {
    constructor(props)
    {
        super(props);
        this.state={data:''};
    }
  render() {
    const handler=((e)=>{this.setState({data:e.target.value});
    });
    return (
      <div>
        <input type="text" placeholder="Enter Text" onChange={handler} value={this.statedata}></input>
        <p>You Type:{this.state.data}</p>
      </div>
    );
  }
}
