import React from "react";
import "./App.css";
import Display from "./components/Display";
import Keypad from "./components/Keypad";
import HideShow from "./components/HideShow";
import TwowayBinding from "./components/TwowayBinding";
import ConditionalDisableButton from "./components/ConditionalDisableButton";
import CounterUpDown from "./components/CounterUpDown";
import VowelCount from "./components/VowelCount";
import CapitalizedEachWord from "./components/CapitalizedEachWord";
import MaxCharInString from "./components/MaxCharInString";
import BalanceParenthesis from "./components/BalanceParenthesis";
class App extends React.Component {
  constructor() {
    super();
    this.state = { text: 0, operator: "+", mem: 0 };
  }
  render() {
    const keypadClicked = (event) => {
      this.setState({ text:Number (this.state.text + event.target.value) });
    };
    const dotClicked = (event) => {
      if (this.state.text.toString().indexOf(".") == -1) {
        this.setState({ text: this.state.text.toString() + event.target.value });
      }
    };
    const operatorClicked = (event) => {
      if (event.target.value === "+") {
        this.setState({ mem: this.state.text });
        this.setState({ text: 0 });
        this.setState({ operator: "+" });
      }
      if (event.target.value === "-") {
        this.setState({ mem: this.state.text });
        this.setState({ text: 0 });
        this.setState({ operator: "-" });
      }
      if (event.target.value === "*") {
        this.setState({ mem: this.state.text });
        this.setState({ text: 0 });
        this.setState({ operator: "*" });
      }
      if (event.target.value === "/") {
        this.setState({ mem: this.state.text });
        this.setState({ text: 0 });
        this.setState({ operator: "/" });
      }
    };
    const equalClicked = (event) => {
      if (this.state.operator === "+") {
        this.setState({ text:Number( this.state.mem) + Number(this.state.text) });
      } else if (this.state.operator === "-") {
        this.setState({ text: this.state.mem - this.state.text });
      } else if (this.state.operator === "*") {
        this.setState({ text: this.state.mem * this.state.text });
      } else if (this.state.operator === "/") {
        this.setState({ text: this.state.mem / this.state.text });
      }
    };
    const acClicked = (event) => {
      
        this.setState({ text: 0,mem:0,operator:'+' });
      
    };
    return (
      <div className="App">
        <h1>Calculator</h1>
        <Display text={this.state.text} />
        <Keypad
          keypadClicked={keypadClicked}
          dotClicked={dotClicked}
          operatorClicked={operatorClicked}
          acClicked={acClicked}
          equalClicked={equalClicked}
        />
        <hr/>
        <HideShow/>
        <hr/>
        <TwowayBinding/>
        <hr/>
        <ConditionalDisableButton/>
        <hr/>
        <CounterUpDown/>
        <hr/>
        <VowelCount />
        <hr/>
        <CapitalizedEachWord/>
        <hr/>
        <MaxCharInString />
        <hr/>
        <BalanceParenthesis/>
      </div>
    );
  }
}
export default App;
