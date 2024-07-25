
"use client"

import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { TextRevealCard, TextRevealCardTitle, TextRevealCardDescription } from '../../ui/TextRevealCard';
import { SectionWrapper } from '@/app/hoc';

const Experience = () => {

    return (
        <ExperienceContainer>
            <div className='exp-title'>
                <h1>My <span className='span-gradient'>Work Experience</span></h1>
            </div>
            <div className='exp-card-container'>
                <div className='exp-card' >
                    <TextRevealCard
                        text="Front-End Developer"
                        revealText="at DeepThought"
                        className='exp-info-container'
                    >
                        <div className='exp-info'>
                            <TextRevealCardTitle className='info-text'>
                                Front-End Developer Intern
                            </TextRevealCardTitle>
                            <TextRevealCardDescription className='info-para'>
                                At DeepThought, Built scalable React components with API integrations, managed state with Hooks and Redux, and created a responsive web app. Used Git for version control and improved leadership skills through specialized sessions.
                            </TextRevealCardDescription>
                        </div>
                    </TextRevealCard>
                </div>
            </div>
        </ExperienceContainer>
    )
}

export default SectionWrapper(Experience , '');

let ExperienceContainer = styled.div`
    min-height: 100vh;
    margin-top: 2rem;
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
        justify-content: center;
        align-items: center;
        min-height: 85vh;
        min-width: 98vw;
        .exp-card{
            padding: 1rem;
            display: flex;
            justify-content: center;
            align-items: center;
            min-width: 99vw;
        }

        .info-text{
            font-size: 1.7rem;
            font-weight: 700;
            padding-bottom: 0.5rem;
        }

        .exp-info-container{
            padding: 2rem;
            display: flex;
            justify-content: space-between;
            min-width: 90vw;
        }

        .reveal-container{
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap:1rem;
            .hover-reveal-container{

                min-height: 4rem !important;
                .reveal-text{
                font-size: 2.5rem;
                min-width: 20rem !important;
            }
            .upper-text{
                font-size: 2.5rem;
                min-width: 20rem !important;
            }
          }
        }
    }

    @media only screen and (max-width:770px){

        min-height: 80vh !important;

        .exp-card-container{
            min-height: 80vh !important;
        }

      .exp-title{
        h1{
        font-size: 2rem;
      }
      }
      
      .info-text{
            font-size: 1rem !important;
            font-weight: 600;
        }
    
       .info-para{
        font-size: 0.8rem !important;
       }

       .reveal-container{
            .hover-reveal-container{
                max-height: 4rem !important;
                .reveal-text{
                font-size: 2rem !important;
                min-width: 20rem !important;
            }
            .upper-text{
                font-size: 2rem !important;
                min-width: 20rem !important;
            }

            }
        }

    }

     @media only screen and (max-width:610px){

        .info-text{
            padding-bottom: 0rem !important;
        }

          .exp-info-container{
            flex-direction: column;
            align-items: center;

            .reveal-container{
            min-height: 15vh !important;
            min-width: 85vw !important;
        }
          }
     }


    @media only screen and (max-width:480px){
      .exp-title{
        h1{
        font-size: 1.5rem;
      }
      }

      .info-text{
            font-size: 1rem !important;
            font-weight: 600;
        }
    
        .info-para{
        font-size: 0.6rem !important;
       }

       .reveal-container{
            .hover-reveal-container{
                max-height: 3rem !important;
                .reveal-text{
                font-size: 1.7rem !important;
                min-width: 1rem !important;
            }
            .upper-text{
                font-size: 1.7rem !important;
                min-width: 1rem !important;
            }
            }
        }
    }

    @media only screen and (max-width:355px){
        .reveal-container{
            min-height: 15vh !important;
            min-width: 50vw !important;
            max-width: 50vw !important;
        }
    }
`