"use client"

import React, { Suspense } from 'react'
import styled from 'styled-components';
import { BackgroundBeams } from '../ui/BackgroundBeams';
import scroll from '../../Assests/scroll.png';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion'
import { TextGenerateEffect } from '../ui/TextGenerator';
import { Canvas } from 'react-three-fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import TechGuy from '../models/TechGuy';
import Computer from '../models/Computer'

const Hero: React.FC = () => {

    let textVariant: Variants = {
        initial: {
            y: -30,
            opacity: 0,
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.9,
                staggerChildren: 0.9,
            },
        },
        scrollButton: {
            opacity: 0,
            y: 10,
            transition: {
                duration: 2,
                repeat: Infinity,
            },
        },
    };

    const sliderVariant: Variants = {
        initial: {
            x: '100%',
        },
        animate: {
            x: '-220%',
            transition: {
                repeat: Infinity,
                repeatType: 'mirror',
                duration: 15,
            },
        },
    };

    return (
        <HeroContainer>
            <div style={{ zIndex: '-1' }}>
                <BackgroundBeams />
            </div>
            <div className='hero-container'>
                <div className="hero-image">
                    <Canvas>
                        <ambientLight intensity={-1} />
                        <OrbitControls enableZoom={false} />
                        <Suspense fallback={null} >
                            <TechGuy  position={[0, -1.8, -1.2]} /> {/* TechGuy is moved 2 units to the left on the x-axis */}
                            <Computer position={[0, -0.3, 1.2]} /> {/* Computer is moved 2 units to the right on the x-axis */}
                        </Suspense>
                        <Environment preset='studio' />
                    </Canvas>
                </div>
                <motion.div className="hero-info"
                    variants={textVariant}
                    initial="initial"
                    animate="animate">
                    <h2>TARUN APPARI</h2>
                    <h1><TextGenerateEffect className='h1' words='Front-End Developer' /></h1>
                    <div className='h3-container'>
                        <h3><TextGenerateEffect className='h3' words='Transforming Concepts into' /></h3>
                        <h3 className='h3'><TextGenerateEffect className='h3' words=' Seamless ' />&nbsp; <TextGenerateEffect className='h3 gradient-span' words='User Experiences' /></h3>
                    </div>
                    <motion.div
                        variants={textVariant}
                        animate="scrollButton"
                        className="scroll">
                        <Image src={scroll} alt='scroll-img' className="scrollImg" />
                    </motion.div>
                    <motion.div
                        className="slidingText"
                        variants={sliderVariant}
                        initial='initial'
                        animate='animate'
                    >
                        Front-End React Developer
                    </motion.div>
                </motion.div>
            </div>
        </HeroContainer>
    )
}

export default Hero;

let HeroContainer = styled.div`
    min-height: 200vh;
    background-color: #000000;
    color: #d5d5d5;
    position: relative;
    overflow: hidden !important;
    .hero-container{
        display: grid;
        grid-template-columns: 40% 60%;
        min-width: 100vw;
    }
    .hero-image{
        z-index: 9 !important;
    }
    .hero-info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 1rem;
      min-height: 100vh;
      align-items: center;
      z-index: 3 !important;
      h2 {
        letter-spacing: 1rem;
        color: #3a80e9;
        font-weight: 700;
        font-size: 1.2rem;
      }
      .h1 {
        font-size: 3.3rem ;
        font-weight: 700 ;
      }
      .h3-container{
        z-index: 2;
      .h3{
        font-size: 1.9rem;
        font-weight: 600;
        color: #a9a9a9;
        display: flex;
      }
      .gradient-span{
        display: flex;
        background: linear-gradient(
                90deg,
                rgba(2, 0, 36, 1) -30%,
                rgba(31, 83, 198, 1) 30%,
                rgba(0, 212, 255, 1) 100%
            );
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent; /* Makes the text color transparent, showing the background */
            display: inline-block; /* Needed to ensure the gradient covers the text */
      }
      }
      .scroll {
        padding: 1rem;
        z-index: 5 !important;
      }
      .scrollImg {
        width: 2rem;
      }
      .slidingText {
    position: absolute;
    bottom: 0.5rem;
    font-size: 35vh;
    white-space: nowrap;
    color: rgb(25,25,25);
    width: 50vw;
    font-weight: 500;
    z-index: 1;
  }
    }

`