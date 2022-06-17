import React from 'react'
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import {Cards} from '../Cards/Cards.jsx'
import Resume from './My_Resume.pdf'
import { FloatingDiv } from "../FloatingDiv/FloatingDiv";
import { motion } from "framer-motion"; 

export const Services = () => {
    const transition = {duration:2, type:'spring'};
  return (
    <div className='services' id='Services'>
        {/* Left Side */}
        <div className="awesome">
            <span>My Awesome</span>
            <span>Services</span>
            <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis .
                <br />Lorem, ipsum dolor sit amet consectetur adipisicing.
            </span>
            <a href={Resume} download>
                <button className="button s-button">Download CV</button>
            </a>
            <div className="blur s-blur" style={{background: '#ABF1FF94'}}></div>
        </div>
        {/* Right Side */}
        <div className="cards">
            <motion.div
            initial= {{transform:'scale(0)'}}
            whileInView={{transform:'scale(1)'}}
            transition={transition}
            style={{left: '20rem'}}
            >
                <Cards 
                    emoji={HeartEmoji}
                    heading={'Design'}
                    detail={'Sketch, Adobe Photoshop, Blender, Krita, Gimp'}
                />
            </motion.div>
            <motion.div
            initial= {{transform:'scale(0)'}}
            whileInView={{transform:'scale(1)'}}
            transition={transition}
            style={{top: '11rem',left: '0rem'}}>
                <Cards 
                    emoji={HeartEmoji}
                    heading={'Design'}
                    detail={'Sketch, Adobe Photoshop, Blender, Krita, Gimp'}
                />
            </motion.div>
            <motion.div
            initial= {{transform:'scale(0)'}}
            whileInView={{transform:'scale(1)'}}
            transition={transition}
            style={{top: '19rem',left: '15rem'}}>
                <Cards 
                    emoji={HeartEmoji}
                    heading={'Design'}
                    detail={'Sketch, Adobe Photoshop, Blender, Krita, Gimp'}
                />
            </motion.div>
            <motion.div
            initial= {{transform:'scale(0)'}}
            whileInView={{transform:'scale(1)'}}
            transition={transition}
            style={{top: '10rem',left: '35rem'}}>
                <Cards 
                    emoji={HeartEmoji}
                    heading={'Design'}
                    detail={'Sketch, Adobe Photoshop, Blender, Krita, Gimp'}
                />
            </motion.div>
            <div className="blur s-blur2" style={{background:'var(--purple)'}}></div>
        </div>
    </div>
  )
}
