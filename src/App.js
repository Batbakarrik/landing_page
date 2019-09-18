import React from 'react';
import logo from './logo.svg';
import './App.css';

import styled from "styled-components";

import Form from './components/Form';

const Description = styled.p`
  color: black;
  padding: 8px;
  &:hover {
    color: purple;
  }
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Description> <li>Liste</li>
        </Description>
        <Form></Form>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;