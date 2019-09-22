import React from 'react'
import styled from 'styled-components'
import Form from './components/Form'

const Page = styled.div`
  display: flex;
  box-sizing: border-box
  min-height: 100vh;
  border: 5px solid seagreen;
  flex-direction:column;
`
const Header = styled.div`
  border: 5px solid seagreen;
`
const Article = styled.div`
  border: 5px solid yellow;
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  @media (min-width: 760px) {
    flex: 1;
    display: flex;
    flex-direction: row;
  }
`
const Footer = styled.div`
  border: 5px solid seagreen;
`
const Description = styled.div`
  border: 5px solid seagreen;
`
const Titre = styled.h1`
  color: black;
  font-size: 55px;
  margin: 2px;
`

function App() {
  return (
    <Page>
      <Header>
        <Titre> XIPITEI</Titre>
      </Header>
      <Article>
        <Description>
          <Titre>Xipitei</Titre>
        </Description>
        <Form />
      </Article>
      <Footer>
        <Description>
            <div>Xipitei</div>
        </Description>
      </Footer>
    </Page>
  )
}

export default App
