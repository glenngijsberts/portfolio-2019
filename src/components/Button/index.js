import React from 'react'
import styled from 'styled-components'
import {
    colorPrimary,
    borderRadius,
    colorPrimaryDarker,
} from '../../styles/theme'

const StyledButton = styled.button`
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
    background-color: ${(props) => (props.ghost ? 'transparent' : colorPrimary)};
    border: 1px solid ${colorPrimary};
    border-radius: ${borderRadius};
    color: white;
    cursor: pointer;
    transition-property: all;
    transition-duration: 0.5s;
    transition-timing-function: ease-out;

    &:hover,
    &:focus {
        background-color: ${(props) => props.ghost ? colorPrimary : colorPrimaryDarker};
    }

    width: ${(props) => props.fullWidth ? '100%' : 'auto'};
`

const Button = (props) => {
    const { children, onClick, type } = props

    return (
        <StyledButton onClick={onClick} type={type} {...props}>
            {children}
        </StyledButton>
    )
}

Button.defaultProps = {
    type: 'text',
    onClick: null,
    fullWidth: false,
}

export default Button
