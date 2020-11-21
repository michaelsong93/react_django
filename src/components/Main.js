import React ,{ Component } from 'react';

export class Main extends Component{
    state = {
        count : 0
    }
    // componentWillMount(){
    //     this.handleState();
    // }

    // componentDidMount(){
    //     this.handleState();
    // }

    handleState = () => {
        this.setState((state) => {
            return {count: state.count + 1}
        })
    }

    changeState = () => {
        this.setState((state) =>{
            return {count: 0}
        })
    }

    render(){
        return (
            <div className = "Main">
                <h1> Mainpage </h1>
                {this.state.count}
                <button onClick = {this.handleState}> button </button>
                {this.state.count}
                <button onClick = {this.changeState}> button2</button>
            </div>
        )
    }
}

export default Main;