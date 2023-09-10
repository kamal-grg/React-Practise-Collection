import React from "react";

export default class HideShow extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={isShow:true}
    }
    render()
    {
        const handler=()=>{this.setState({isShow:!this.state.isShow})};
        return <div>
            <button onClick={handler}>Hide Show Text</button><br/>
          <p>{this.state.isShow==true && 'Click above button to show and hide this text'} </p> 
        </div>
    }
}