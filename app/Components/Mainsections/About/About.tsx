"use client";

import { BentoGrid, BentoGridItem } from '../../ui/BentoGrid';
import { gridItems } from '../../../data'
import styled from 'styled-components';

const About = () => {
  return (
    <AboutContainer id='about' className='about-container'>
        <BentoGrid className='bento-grid'>
          {
            gridItems.map((item)=>(
              <BentoGridItem 
                  id={item.id}
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  className={item.className}
                  img={item.img}
                  imgClassName={item.imgClassName}
                  titleClassName={item.titleClassName}
                  spareImg={item.spareImg}
              />
            ))
          }
        </BentoGrid>
    </AboutContainer>
  )
}

export default About;

let AboutContainer = styled.section`
 padding: 1rem;
`