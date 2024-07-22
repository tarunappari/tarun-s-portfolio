import React from 'react'
import styled from 'styled-components';

const Experience = () => {
  return (
    <ExperienceContainer>
        <div className='exp-title'>
            <h1>My <span className='span-gradient'>Work Experience</span></h1>
        </div>
        <div className='exp-card-container'>
            <div className="model">
                model
            </div>
            <div className="exp-card">
                card
            </div>
        </div>
    </ExperienceContainer>
  )
}

export default Experience;

let ExperienceContainer = styled.div`
    min-height: 100vh;
    border: 1px solid red;
    .exp-title{
        padding: 0.5rem;
        text-align: center;
        h1{
            font-size: 3rem;
            font-weight: 800;
        }
    }

    .exp-card-container{
        display: flex;
        justify-content: space-between;
        min-height: 85vh;
        border: 1px solid blue;
    }
`