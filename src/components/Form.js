import React, { Component } from 'react'
import styled from 'styled-components'

const Box = styled.div`
    background-color: #A1D6E2;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0px 20px 0px;
    border: 5px, 0px, 0px, 0px;
    max-height: 300px;
    flex-wrap: wrap;
`
const BoxForm = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
    height: 40px;
    width: 210px;
    background-color: ${({color})=>color};
`
const Input = styled.input`
    background-color: #F1F1F2;
    padding: 0px 0px 0px 5px;
    margin: 0px 0px 0px 5px;
    font-size: 15px;
    &:hover {
        background-color: #BCBABE; 
    }
`
const Titre = styled.h1`
    color: black;
    font-size: 30px;
    vertical-align: middle;
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
                <Titre>CREER VOTRE COMPTE</Titre>
                <BoxForm color="#A1D6E2" onSubmit={this.handleSubmit}>
                    <Input
                        onChange={this.handleChange}
                        type="text"
                        title="firstname"
                        value={this.state.firstname}
                        placeholder="Prénom"
                        required
                    />
                </BoxForm>
                <BoxForm color="#A1D6E2" onSubmit={this.handleSubmit}>
                    <Input
                        onChange={this.handleChange}
                        type="text"
                        title="lastname"
                        value={this.state.lastname}
                        placeholder="Nom"
                        required
                    />
                </BoxForm>
                <BoxForm color="#A1D6E2" onSubmit={this.handleSubmit}>
                    <Input
                        onChange={this.handleChange}
                        type="email"
                        title="email"
                        pattern=".+@"
                        value={this.state.email}
                        placeholder="Email"
                        required
                    />
                </BoxForm>
                <BoxForm color="#A1D6E2" onSubmit={this.handleSubmit}>
                    <button> Valider </button>  
                </BoxForm>
            </Box>
        )
    }
}
