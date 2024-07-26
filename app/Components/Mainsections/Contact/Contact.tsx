import React from 'react'
import styled from 'styled-components';
import { BackgroundBeams } from '../../ui/BackgroundBeams';

const Contact = () => {
  return (
    <ContactContainer>
      <div style={{ zIndex: "-1" }}>
        <BackgroundBeams />
      </div>
      <h1>contact</h1>
    </ContactContainer>
  )
}

export default Contact;

let ContactContainer = styled.div`
    position: relative;
    min-height: 100vh;
    border: 1px solid red;
    h1{
        font-size: 5rem;
    }
`