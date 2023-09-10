import { isDisabled } from "@testing-library/user-event/dist/utils";
import React from "react";

export default class ConditionalDisableButton extends React.Component {
    constructor(props)
    {
        super(props);
        this.state={text:''};
    }
  render() {
      
    return <div>
        <input type="text" onChange={(e)=>this.setState({text:e.target.value})} ></input>
        <button disabled={this.state.text.length<1}>Submit</button>
        <p>Button is only enable when there is text in above box</p>
    </div>;
  }
}
