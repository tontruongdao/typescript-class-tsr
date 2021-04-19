import React from 'react'
import ReactDOM from 'react-dom'

interface AppProps {
    // color: string;
    color?: string; // To make the property optional
}

class App extends React.Component<AppProps> {

    state = { counter: 0 }

    onIncrement = (): void => {
        this.setState({ counter: this.state.counter + 1 })
    }

    onDecrement = (): void => {
        this.setState({ counter: this.state.counter - 1 })
    }

    render() {
        return (
            <div>Hi There{this.props.color}
                <button onClick={this.onIncrement}>Increment</button>
                <button onClick={this.onDecrement}>Decrement</button>
                {this.state.counter}
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'))

// Used ```npx create-react-app my-app --template typescript``` to create ts App