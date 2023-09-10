import React from "react";

export default class BalanceParenthesis extends React.Component {
    constructor(props) {
        super(props);
        this.state = { exp: '' };
    }

    render() {
        const handler = () => {
            let exp = this.state.exp; // Change 'data' to 'exp' here
            let stack = [];
            for(let ch of exp) {
                if(ch === '(')
                    stack.push(')');
                else {
                    if(stack.length === 0 || stack.pop() !== ch) {
                        alert("Unbalanced Parenthesis");
                        return;
                    }
                }
            }
            if (stack.length === 0) {
                alert("Balanced Parenthesis");
            } else {
                alert("Unbalanced Parenthesis");
            }
        };

        return (
            <div>
                <h1>Check Balanced Parenthesis</h1>
                <input
                    type="text"
                    placeholder="Enter Text"
                    onChange={(e) => { this.setState({ exp: e.target.value }) }} 
                ></input>
                <button onClick={handler}>Check Balance</button>
            </div>
        );
    }
}
