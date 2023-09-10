import React from "react";

export default class MaxCharInString extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: '' };
    }

    render() {
        const handler = () => {
            let sentence = this.state.data;
            let map = {};
            let max = 0;
            let maxchar = '';

            for (let char of sentence) {
                if (map[char]) {
                    map[char]++;
                } else {
                    map[char] = 1;
                }

                if (map[char] > max) {
                    max = map[char];
                    maxchar = char;
                }
            }

            alert(`The character "${maxchar}" appears ${max} times.`);
        };

        return (
            <div>
                <h1>Max Character in Given Box</h1>
                <input
                    type="text"
                    placeholder="Enter Text"
                    onChange={(e) => { this.setState({ data: e.target.value }) }}
                ></input>
                <button onClick={handler}>Max Char</button>
            </div>
        );
    }
}
