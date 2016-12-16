import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    render () {
        return (
            <div>
                <div className="row between-xs violet site-container">
                    <div className="col-xs-2 std-text indigo">
                        ArtyEmsee
                    </div>
                    <div className="col-xs-2 std-text blue">
                        ArtyEmsee
                    </div>
                    <div className="col-xs-2 std-text green">
                        ArtyEmsee
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))