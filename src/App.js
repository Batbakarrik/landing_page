import React from 'react'
import styled from 'styled-components'
import Form from './components/Form'

const Page = styled.div`
  display: flex;
  box-sizing: border-box
  min-height: 100vh;
  flex-direction:column;
`
const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #A1D6E2;
  opacity: 0.9;
`
const Article = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  @media (min-width: 760px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
  }
`
const Footer = styled.div`
  background-color: #1995AD;
`
const Description = styled.div`
  margin: 10px;
`
const Titre = styled.h1`
  color: white;
  font-size: 60px;
  margin: 2px;
`
const Titre2 = styled.h2`
  color: white;
  font-size: 80px;
  margin: 2px;
`
const Entete = styled.div`
  display: flex;
  align-items: center;
`
const Titre3 = styled.h3`
  margin: 15px;
  color: white;
  font-size: 15px;
  text-align:
  margin: 2px;
`

function App() {
  return (
    <Page>
      <img src={Image} />
      <Header>
        <Titre> Xipitei </Titre>
        <Entete>
          <Titre3> About Us > </Titre3>
          <Titre3> <a href="https://www.blog.xipitei.com">Blog ></a></Titre3>
          <Titre3> Login ></Titre3>
        </Entete>
      </Header>
      <Article>
        <Description>
          <Titre2>Pour intégrer nôtre équipe</Titre2>
        </Description>
        <Form />
      </Article>
      <Footer>
        <Description>
            <div>Xipitei ©2019 Created by Batbakarrik</div>
        </Description>
      </Footer>
    </Page>
  )
}

export default App
