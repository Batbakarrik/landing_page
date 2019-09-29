import React, { Component } from 'react'

export default class Admin extends Component {
    render() {
        return (
            <footer>
                <button onclick={this.props.chargerExemple}>Remplir</button>
            </footer>
        )
    }
}

export default Admin
