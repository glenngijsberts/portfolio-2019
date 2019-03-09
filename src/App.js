import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ReactGA from 'react-ga'
import Home from './pages/Home'
import NoMatch from './pages/NoMatch'

ReactGA.initialize('UA-135828722-1')
ReactGA.ga('set', 'anonymizeIp', true)

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" render={(props) => <Home {...props} />} />
                    <Route component={NoMatch} />
                </Switch>
            </Router>
        )
    }
}

export default App
