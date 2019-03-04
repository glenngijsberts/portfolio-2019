import React from 'react'
import styled from 'styled-components'
import { colorPrimary } from '../../styles/theme'

const ServicesSection = styled.section`
    padding-top: 32px;
    padding-bottom: 32px;
    display: grid;
    grid-template-columns: 1fr;

    @media (min-width: 768px) {
        padding-top: 64px;
        padding-bottom: 64px;
        grid-template-columns: 1fr 1fr;
        grid-gap: 32px;
    }

    @media (min-width: 1200px) {
        grid-template-columns: 1fr 1fr 1fr;
    }

    .service {
        margin-bottom: 32px;

        h2 {
            margin: 0 0 24px 0;
            color: ${colorPrimary};
            font-size: 16px;
        }

        p {
            margin: 0;
            color: white;
            text-align: justify;
        }

        @media (min-width: 768px) {
            margin-bottom: 0;
        }
    }
`

const Services = (props) => {
    const { services } = props

    return (
        <ServicesSection>
            {services.map((service) => (
                <div className="service">
                    <h2>{service.title}</h2>
                    <p>{service.text}</p>
                </div>
            ))}
        </ServicesSection>
    )
}

export default Services
