import React from 'react'
import styled from 'styled-components'
import Form from './components/Form'

const Page = styled.div`
  box-sizing: border-box
  height: 100vh;
`
const Header = styled.div`
  border: 5px solid yellow;
  display: flex;
  justify-content: top;
  align-items: center;
  `
const Article = styled.div`
  border: 5px solid purple;
  display: flex;
  justify-content: center;
  min-height: 400px;
`
const Footer = styled.div`
  border: 5px solid green;
  display: flex;
  justify-content: center;
`
const Description = styled.p`
  border: 5px solid red;
  color: black;
  padding: 8px;
`

function App() {
  return (
    <Page>
      <Header>
        <div> XIPITEI</div>
      </Header>
      <Article>
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
