import React, { Component } from 'react'
import styled from 'styled-components'
import ScrollableAnchor, { goToAnchor } from 'react-scrollable-anchor'
import ReactGA from 'react-ga'
import { colorPrimary, colorPrimaryDarker, borderRadius } from '../styles/theme'
import PersonalSection from '../components/PersonalSection'
import Services from '../components/Services'
import services from '../assets/services'

import portfolioTicketSwap from '../assets/portfolio-ticketswap.png'
import portfolioSqits from '../assets/portfolio-sqits.png'


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

// const HeaderNav = styled.nav`
//     ul {
//         list-style: none;
//         display: flex;
//         padding-inline-start: 0;
//         margin-block-start: 0;
//         margin-block-end: 0;

//         li {
//             margin-left: 32px;

//             a {
//                 color: ${colorPrimary};
//                 font-weight: 500;
//                 cursor: pointer;
//                 text-decoration: none;
//             }
//         }
//     }
// `

const WorkSection = styled.section`
    padding-top: 32px;
    padding-bottom: 32px;

    h2 {
        color: ${colorPrimary};
        font-size: 32px;
        margin-bottom: 16px;
    }

    p {
        color: white;
        text-align: justify;
        margin: 0;
        max-width: 600px;
        margin-bottom: 32px;
    }

    .work {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 32px;

        h3 {
            margin: 0 0 16px 0;
            color: ${colorPrimary};
            font-size: 16px;
        }

        p {
            margin: 0;
            color: white;
            text-align: justify;
            margin-bottom: 16px;
        }

        a {
            text-decoration: none;
            color: ${colorPrimaryDarker};
        }

        img {
            width: 100%;
            height: auto;
            border-radius: ${borderRadius};
            margin-bottom: 16px;
        }

        @media(min-width: 768px) {
            grid-template-columns: 1fr 1fr;
            grid-gap: 48px;
        }
    }

    @media (min-width: 768px) {
        padding-top: 64px;
        padding-bottom: 64px;
    }
`

const MainContent = styled.main`
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
`

const FooterSection = styled.footer`
    padding-top: 32px;
    padding-bottom: 32px;
    text-align: center;

    p {
        color: white;
        margin-top: 0px;

        a {
            text-decoration: none;
            color: ${colorPrimaryDarker};
        }
    }

    .links {
        a {
            margin-left: 8px;
            margin-right: 8px;
        }

        margin-bottom: 0;
    }

    @media (min-width: 768px) {
        padding-top: 64px;
        padding-bottom: 64px;
    }
`

class Home extends Component {
    componentDidMount = () => {
        ReactGA.pageview(window.location.pathname + window.location.search)
    }

    goToWork = () => {
        ReactGA.event({
            category: 'Intro',
            action: 'Clicked on see work button'
        })

        goToAnchor('work')
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
                    onClick={() => this.goToWork()}
                >
                    Als front-end developer ligt mijn kracht in het bouwen van
                    user interfaces en moderne, gebruiksvriendelijke
                    applicaties. Dat doe ik nu bij Sqits, waar ik
                    verantwoordelijk ben voor de front-end development van
                    verschillende projecten. Ik studeer daarnaast Communication
                    and Multimedia Design in Den Haag.
                </PersonalSection>

                <Services services={services} />

                <ScrollableAnchor id={'work'}>
                    <WorkSection>
                        <div className="work">
                            <div>
                                <img
                                    src={portfolioTicketSwap}
                                    alt="Internship TicketSwap"
                                />
                                <h3>Internship TicketSwap</h3>
                                <p>
                                    Van september 2018 tot aan februari 2019 heb ik
                                    stage gelopen bij TicketSwap. Ik heb meegeholpen
                                    met de front-end development van de website. Ik
                                    werkte samen in een SCRUM team met verschillende
                                    disciplines. Technieken die ik ingezet heb zijn
                                    onder andere GraphQL en Cypress.
                                </p>
                                <a
                                    href="https://www.ticketswap.nl"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => ReactGA.event({
                                        category: 'Work',
                                        action: 'Clicked on TicketSwap link'
                                    })}
                                >
                                    Bezoek de website &rarr;
                                </a>
                            </div>

                            <div>
                                <img src={portfolioSqits} alt="Sqits" />
                                <h3>Front-end development Sqits</h3>
                                <p>
                                    Ik ben verantwoordelijk voor de front-end
                                    development binnen de projecten van Sqits. Op
                                    het moment zijn we bezig met een maatwerk
                                    applicatie geschreven in het JavaScript
                                    framework Vue en ben ik bezig met het vernieuwen
                                    van de huidige website waarbij we Nuxt
                                    gebruiken.
                                </p>
                                <a
                                    href="https://www.sqits.nl"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => ReactGA.event({
                                        category: 'Work',
                                        action: 'Clicked on Sqits link'
                                    })}
                                >
                                    Bezoek de website &rarr;
                                </a>
                            </div>
                        </div>
                    </WorkSection>
                </ScrollableAnchor>

                <FooterSection>
                    <p>Deze website is gemaakt met veel.. <span role="img" aria-label="Pizza">️🍕</span> Hosted on <a href="https://https://www.netlify.com/" target="_blank" rel="noopener noreferrer">Netlify</a></p>
                    <p>Contact? Dat kan op <strong>glenngijsberts95@gmail.com</strong>. Thanks!</p>
                    <p className="links">
                        <a href="https://twitter.com/glenngijsberts" target="_blank" rel="noopener noreferrer">Twitter</a>
                        <a href="https://medium.com/@glenngijsberts" target="_blank" rel="noopener noreferrer">Medium</a>
                        <a href="https://www.linkedin.com/in/glenn-gijsberts-0341a463" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </p>
                    <p><small>Deze website maakt gebruik van google analytics</small></p>
                </FooterSection>
            </MainContent>
        )
    }
}

export default Home
