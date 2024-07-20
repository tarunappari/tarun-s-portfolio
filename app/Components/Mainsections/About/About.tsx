
"use client";
import React from 'react'
import './About.css';
import { BentoGrid, BentoGridItem } from '../../ui/BentoGrid';
import { gridItems } from '@/app/Data';

const About : React.FC = () => {
  return (
    <div id='about' className='about-container'>
        <BentoGrid>
          {
            gridItems.map((item)=>(
              <BentoGridItem 
                  id={item.id}
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  className={item.className}
                  img={item.img}
              />
            ))
          }
        </BentoGrid>
    </div>
  )
}

export default About;