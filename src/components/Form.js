import React, { Component } from 'react'
import styled from 'styled-components'

const Box = styled.div`
    border: 5px solid seagreen;
    display: flex;
    padding: 8px;
    `
const BoxForm = styled.div`
    border: 2px solid black;
    background-color: ${({color})=>color};
    align-items: center;
    min-width: 50px;
    max-height: 30px;
    flex-wrap: wrap;
    `
const Input = styled.input`
    border: 2px solid seagreen;
    background-color: #A1D6E2;
    width: 150px;
    font-size: 15px;
`
export default class Form extends Component {
    state = {
        name: "",
        email:"",
    };
    
    handleChange = event => {
        const title = event.target.title;
        this.setState({ [title]: event.target.value });
    };
    handleSubmit = async event => {
        event.preventDefault();
        console.log(this.state);
    };

    render() {
        return (
            <Box>
                <BoxForm color="#A1D6E2" onSubmit={this.handleSubmit}>
                    <label htmlFor="nom">Nom</label>
                    <Input
                        onChange={this.handleChange}
                        type="text"
                        title="name"
                        value={this.state.name}
                        placeholder="Taper vôtre Nom"
                        required
                    />
                </BoxForm>
                <BoxForm color="#A1D6E2" onSubmit={this.handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <Input
                        onChange={this.handleChange}
                        type="email"
                        title="email"
                        pattern=".+@"
                        value={this.state.email}
                        placeholder="nom@*.*"
                        required
                    />
                </BoxForm>
            </Box>
        )
    }
}
