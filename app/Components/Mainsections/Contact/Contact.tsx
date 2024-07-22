import React from 'react'
import styled from 'styled-components';

const Contact = () => {
  return (
    <ContactContainer>
        <h1>contact</h1>
    </ContactContainer>
  )
}

export default Contact;

let ContactContainer = styled.div`
    min-height: 100vh;
    border: 1px solid red;
    h1{
        font-size: 5rem;
    }
`