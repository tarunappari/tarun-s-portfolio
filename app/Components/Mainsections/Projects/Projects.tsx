

import React from 'react'
import './Projects.css'
import styled from 'styled-components';

const Projects = () => {
  return (
    <ProjectContainer id='projects'>
        <h1>
            projects
        </h1>
        <span>hello guys hi</span>
    </ProjectContainer>
  )
}

export default Projects;

let ProjectContainer = styled.div`
  min-height: 100vh;
  border: 1px solid red;
  h1{
    color: red;
  }
  
`