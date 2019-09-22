import React, { Component } from 'react'
import styled from 'styled-components'

const Box = styled.div`
    border: 5px solid seagreen;
    display: flex;
    justify-content: center;
    padding: 2px;
    flex-wrap: wrap;
    `
const BoxForm = styled.div`
    border: 2px solid black;
    width: 300px;
    background-color: ${({color})=>color};
    `
const Input = styled.input`
    border: 2px solid seagreen;
    background-color: #A1D6E2;
    font-size: 15px;
`
const Titre = styled.h1`
  color: black;
  font-size: 40px;
  margin: 2px;
`
export default class Form extends Component {
    state = {
        firstname: "",
        lastname: "",
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
                <Titre>Create your account</Titre>
                <BoxForm color="#A1D6E2" onSubmit={this.handleSubmit}>
                    <label htmlFor="nom">First Name</label>
                    <Input
                        onChange={this.handleChange}
                        type="text"
                        title="firstname"
                        value={this.state.firstname}
                        placeholder="Taper vôtre Nom"
                        required
                    />
                </BoxForm>
                <BoxForm color="#A1D6E2" onSubmit={this.handleSubmit}>
                    <label htmlFor="nom">Last Name</label>
                    <Input
                        onChange={this.handleChange}
                        type="text"
                        title="lastname"
                        value={this.state.lastname}
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
