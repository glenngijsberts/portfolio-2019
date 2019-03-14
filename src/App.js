/*
    Dependencies
*/
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ReactGA from 'react-ga'

/*
    Components
*/
import Home from './pages/Home'
import Login from './pages/Login'
import NoMatch from './pages/NoMatch'

/*
    Firebase
*/
import base from './firebase'

/*
    Google analytics
*/
import { key } from './config/ga'
ReactGA.initialize(key)
ReactGA.ga('set', 'anonymizeIp', true)

class App extends Component {
    state = {
        services: [],
        servicesLoading: true,
    }

    componentDidMount() {
        // Sync with firebase database
        this.ref = base.syncState('services', {
            context: this,
            state: 'services',
            asArray: true,
            then: () =>
                this.setState({
                    servicesLoading: false,
                }),
            onFailure: (event) => console.error(event),
        })
    }

    componentWillUnmount() {
        base.removeBinding(this.ref)
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={(props) => (
                            <Home
                                {...props}
                                services={this.state.services}
                                servicesLoading={this.state.servicesLoading}
                            />
                        )}
                    />
                    <Route component={Login} />
                    <Route component={NoMatch} />
                </Switch>
            </Router>
        )
    }
}

export default App
