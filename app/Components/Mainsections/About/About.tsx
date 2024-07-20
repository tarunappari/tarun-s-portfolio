"use client";
import './About.css';
import { BentoGrid, BentoGridItem } from '../../ui/BentoGrid';
import { gridItems } from '@/app/data';

const About = () => {
  return (
    <section id='about' className='about-container'>
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
    </section>
  )
}

export default About;