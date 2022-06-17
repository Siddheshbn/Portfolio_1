import React from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import Instagram from "../../img/instagram.png";
import Linkedin from "../../img/linkedin.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import boy2 from "../../img/boy2.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import glasses_emoji from "../../img/glassesemoji.png";
import { FloatingDiv } from "../FloatingDiv/FloatingDiv";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

export const Intro = () => {
  const transition = {duration: 2, type:'spring'}
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hi..!  I Am</span>
          <span>Siddhesh Nakade</span>
          <span>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed saepe
            deleniti fugiat qui explicabo recusandae dolorem sapiente,
            reiciendis facilis quae!
          </span>
        </div>
        <Link spy={true} to='ContactForm' smooth={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        <div className="i-icons">
          <a href="https://github.com/Siddheshbn" target='_blank'>
            <img src={Github} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/siddheshbn" target='_blank'>
            <img src={Linkedin} alt="" />
          </a>
          <a href="https://www.instagram.com/siddheshbn/" target='_blank'>
            <img src={Instagram} alt="" />
          </a>
        </div>
      </div>

      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        <motion.img
          initial={{left: '-36%',transform:'scale(0)'}}
          whileInView={{left: '-24%', transform:'scale(0.7)'}}
          transition={transition}
          src={glasses_emoji} 
          alt="" />
        <motion.div
          initial={{top:'-4%', left:'80%', transform:'scale(0)'}}
          whileInView={{left:'68%', transform:'scale(1)'}}
          transition={transition}
          style={{top:'-4%',left:'68%'}}
        >
            <FloatingDiv image={crown} txt1='Web' txt2='Developer'/>
        </motion.div>
        <motion.div
          initial={{top:'18rem', left:'12rem',transform:'scale(0)'}}
          whileInView={{left:'0.2rem',transform:'scale(1)'}}
          transition={transition}
          style={{top:'18rem',left:'0rem'}}
        >
            <FloatingDiv image={thumbup} txt1='Best Design' txt2='Award'/>
        </motion.div>
            {/* Blur Divs */}
            <div className="blur" style={{background:"rgb(238 210 255)"}}></div>
        
            <div className="blur" style={{background:'#C1F5FF', top:'17rem', width:'21rem', height:'11rem', left:'-9rem'}}></div>
      </div>
    </div>
  );
};
