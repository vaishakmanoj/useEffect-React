import React from "react";
import { Component } from "react";

class ClassComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            name: ''
        }
        
    }

    componentDidMount(){
        document.title = `clicked ${this.state.count} times`
        console.log(document.title);
    }

    componentDidUpdate(preProps, preState){
        console.log('updating document title');
        document.title = `clicks ${this.state.count} times`
        
    }
    render() {
        
        return (
            <div>
                <input type="text" value={this.state.name} onChange={ e => this.setState({name: this.state.value})}/>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}
                    style={{ padding: '30px' }}>
                    Click {this.state.count} Times </button>
            </div>
        )
    }
}

export default ClassComponent;