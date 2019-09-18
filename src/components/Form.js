import React, { Component } from 'react'

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
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="nom">Nom</label>
                <input
                    type="text"
                    onChange={this.handleChange}
                    title="name"
                    value={this.state.name}
                    placeholder="Taper vôtre Nom"
                    required
                />
                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    onChange={this.handleChange}
                    title="email"
                    value={this.state.email}
                    placeholder="nom@*.*"
                    required
                />
                <button onClick={this.handSubmit}>Valider</button>
            </form>
        )
    }
}
