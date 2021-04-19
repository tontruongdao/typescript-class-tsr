import React from 'react'
import ReactDOM from 'react-dom'

interface AppProps {
    color: string;
    // color?: string; To make the property optional
}

class App extends React.Component<AppProps> {
    render() {
        return <div>Hi There{this.props.color}</div>
    }
}

ReactDOM.render(<App color="red"/>, document.querySelector('#root'))

// Used ```npx create-react-app my-app --template typescript``` to create ts App