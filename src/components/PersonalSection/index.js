import React from 'react'
import styled from 'styled-components'
import { colorPrimary } from '../../styles/theme'
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
                    {title}
                    {' '}
                    <span role="img" aria-label="Fiyah">🔥</span>
                </h2>
                <p>
                    {children}
                </p>

                <ButtonGroup>
                    <Button onClick={onClick} ghost={true}>
                        Bekijk mijn werk
                    </Button>
                    <Button onClick={onClick}>Lees mijn blogs</Button>
                </ButtonGroup>
            </div>
        </PersonalSection>
    )
}

export default PersonalSectionWrapper
