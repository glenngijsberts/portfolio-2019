import React, { Component } from 'react'
import styled from 'styled-components'
import { colorPrimary, colorPrimaryDarker, borderRadius } from './styles/theme'
import PersonalSection from './components/PersonalSection'
import Services from './components/Services'
import services from './assets/services'

const HeaderBar = styled.header`
    padding: 16px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
        margin: 0;
        color: ${colorPrimary};
        font-weight: 500;
        font-size: 24px;
    }
`

const HeaderNav = styled.nav`
    ul {
        list-style: none;
        display: flex;
        padding-inline-start: 0;
        margin-block-start: 0;
        margin-block-end: 0;

        li {
            margin-left: 32px;

            a {
                color: ${colorPrimary};
                font-weight: 500;
                cursor: pointer;
                text-decoration: none;
            }
        }
    }
`

const MainContent = styled.main`
    position: relative;
`

class App extends Component {
    onClick = () => {
        console.log('clicked')
    }

    render() {
        return (
            <MainContent>
                <HeaderBar>
                    <h1>
                        Glenn Gijsberts{' '}
                        <span role="img" aria-label="Welcome">
                            ✌️
                        </span>
                    </h1>

                    {/* <HeaderNav>
                        <ul>
                            <li>
                                <a href="#">MENU</a>
                            </li>
                        </ul>
                    </HeaderNav> */}
                </HeaderBar>

                <PersonalSection
                    title="Front-end developer & interaction design student"
                    onClick={this.onClick}
                >
                    Als front-end developer ligt mijn kracht in het bouwen van
                    user interfaces en moderne, gebruiksvriendelijke
                    applicaties. Dat doe ik nu bij Sqits, waar ik
                    verantwoordelijk ben voor de front-end development van
                    verschillende projecten. Ik studeer daarnaast Communication
                    and Multimedia Design in Den Haag.
                </PersonalSection>

                <Services services={services} />
            </MainContent>
        )
    }
}

export default App
