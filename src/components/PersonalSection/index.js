import React from 'react'
import styled from 'styled-components'
import ReactGA from 'react-ga'
import {
    colorPrimary,
    borderRadius,
    colorPrimaryDarker,
} from '../../styles/theme'
import Button from '../Button'

export const PersonalSection = styled.section`
    position: relative;
    min-height: calc(100vh - 144px);
    display: flex;
    align-items: center;

    .intro {
        margin-top: 0;
        width: 100%;

        h2 {
            color: ${colorPrimary};
            margin: 0 0 32px 0;
            line-height: 1.5;
            font-size: 24px;
            max-width: 800px;

            @media (min-width: 480px) {
                font-size: 48px;
            }
        }

        p {
            color: white;
            text-align: justify;
            margin: 0;
            max-width: 600px;
            margin-bottom: 32px;
        }
    }
`

export const StyledLink = styled.a`
    font-size: 16px;
    line-height: 1.2;
    position: relative;
    font-family: inherit;
    font-weight: 400;
    text-align: center;
    border: none;
    padding: 16px 24px;
    display: inline-flex;
    vertical-align: middle;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    background-color: ${props => (props.ghost ? 'transparent' : colorPrimary)};
    border: 1px solid ${colorPrimary};
    border-radius: ${borderRadius};
    color: white;
    cursor: pointer;
    transition-property: all;
    transition-duration: 0.5s;
    transition-timing-function: ease-out;

    &:hover,
    &:focus {
        background-color: ${props =>
            props.ghost ? colorPrimary : colorPrimaryDarker};
    }
`

export const ButtonGroup = styled.div`
    display: grid;
    grid-gap: 16px;

    @media (min-width: 480px) {
        grid-template-columns: 200px 200px;
    }
`

const PersonalSectionWrapper = (props) => {
    const { onClick, children, title } = props

    return (
        <PersonalSection>
            <div className="intro">
                <h2>
                    {title}{' '}
                    <span role="img" aria-label="Fiyah">
                        🔥
                    </span>
                </h2>
                <p>{children}</p>

                <ButtonGroup>
                    <Button onClick={onClick} ghost={true}>
                        Bekijk mijn werk
                    </Button>
                    <StyledLink
                        href="https://medium.com/@glenngijsberts"
                        target="_blank"
                        onClick={() =>
                            ReactGA.event({
                                category: 'Intro',
                                action: 'Clicked on blogs button',
                            })
                        }
                    >
                        Lees mijn blogs
                    </StyledLink>
                </ButtonGroup>
            </div>
        </PersonalSection>
    )
}

export default PersonalSectionWrapper
