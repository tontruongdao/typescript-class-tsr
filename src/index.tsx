import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
    render() {
        return <div>Hi There</div>
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'))

// Used ```npx create-react-app my-app --template typescript``` to create ts App