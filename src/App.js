import React, { useState, useEffect } from 'react';
import Text from './components/text'

import styled from '@emotion/styled'

const Button = styled.button`
background:-webkit-linear-gradient(top left, #007d35 0%,#007d35 40%, #0f574e 100% );
background-size: 300px;
font-family: Arial, Helvetica, sans-serif;
color: #fff;
margin-top: 1rem;
padding: 1rem 3rem;
font-size: 2rem;
border: 2px solid black;
border-radius: 5px;
transition: background-size .8s ease;


:hover{
  cursor: pointer;
  background-size: 400px
}

`

const Container = styled.div`
display: flex;
align-items: center;
padding-top: 5rem;
flex-direction: column;
`



function App() {

  const [text, setText] = useState({})

  const apiConsult = async () => {
    // fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
    //   .then(data => data.json())
    //   .then(result => console.log(result))
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
    const text = await api.json()
    setText(text[0])
  }

  //Cargar una frase
  useEffect(() => {
    apiConsult()
  }, [])

  return (
    <Container>
      <Text
        text={text}
      />
      <Button onClick={apiConsult}>Obtener frase</Button>
    </Container>
  );
}

export default App;
