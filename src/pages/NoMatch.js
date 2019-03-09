import React, { Component } from 'react'
import styled from 'styled-components'
import ReactGA from 'react-ga'


const MainContent = styled.main`
    position: relative;
    max-width: 1200px;
    margin: 0 auto;

    h1 {
        color: white;
        text-align: center;
    }
`

class NoMatch extends Component {
    componentDidMount = () => {
        ReactGA.pageview(window.location.pathname + window.location.search)
    }

    render() {
        return (
            <MainContent>
                <h1>404 - Deze pagina kan niet gevonden worden</h1>
            </MainContent>
        )
    }
}

export default NoMatch
