import React from 'react'
import './Footer.css'
import Wave from '../../img/wave.png'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import LinkedIn from '@iconscout/react-unicons/icons/uil-linkedin'
import Github from '@iconscout/react-unicons/icons/uil-github'

export const Footer = () => {
  return (
    <div className='footer'>
        <img src={Wave} alt="" style={{width: '100%'}}/>
        <div className="f-content">
            <span>sidiit007@gmail.com</span>
            <div className="f-icons">
                <a href="https://github.com/Siddheshbn" target='_blank'>
                    <Github color='white' size='3rem' />
                </a>
                <a href="https://www.linkedin.com/in/siddheshbn" target='_blank'>
                    <LinkedIn color='white' size='3rem' />
                </a>
                <a href="https://www.instagram.com/siddheshbn/" target='_blank'>
                    <Insta color='white' size='3rem' />
                </a>
            </div>
        </div>
    </div>
  )
}
