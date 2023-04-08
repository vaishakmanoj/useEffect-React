import React from "react";
import { Component } from "react";

class ClassComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
        
    }

    componentDidMount(){
        document.title = `clicked ${this.state.count} times`
        console.log(document.title);
    }

    componentDidUpdate(preProps, preState){
        document.title = `clicks ${this.state.count} times`
        console.log(document.title);
    }
    render() {
        console.log('render');
        return (
            <div>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}
                    style={{ padding: '30px' }}>
                    Click {this.state.count} Times </button>
            </div>
        )
    }
}

export default ClassComponent;