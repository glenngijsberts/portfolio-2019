import React, { Component } from 'react'
import styled from 'styled-components'
import Button from '../components/Button'

const LoginSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
`

const LoginWrapper = styled.div`
    width: 380px;
    padding: 16px;
    background-color: #13111d;
    border-radius: 4px;
    border: 1px solid #1d1a27;

    h2 {
        margin: 0;
        color: white;
    }
`

const StyledForm = styled.form`
    margin-top: 16px;

    input {
        display: block;
        width: 100%;
        padding: 0px 16px;
        line-height: 1;
        box-shadow: none;
        text-align: left;
        height: 40px;
        border-radius: 4px;
        font-size: 16px;
        font-family: inherit;
        box-shadow: none;
        border: 1px solid #362f4e;
        appearance: none;
        margin-bottom: 16px;
        box-sizing: border-box;
    }
`

class Login extends Component {
    state = {
        username: '',
        password: '',
    }

    submitLogin = (event) => {
        event.preventDefault()

        alert('Login submitted!')
    }

    render() {
        return (
            <LoginSection>
                <LoginWrapper>
                    <h2>Login with details</h2>

                    <StyledForm method="post" onSubmit={this.submitLogin}>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            placeholder="username"
                        />
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="password"
                        />
                        <Button type="submit" fullWidth={true}>
                            Login
                        </Button>
                    </StyledForm>
                </LoginWrapper>
            </LoginSection>
        )
    }
}

export default Login
