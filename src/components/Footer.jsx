import React from 'react'
import './FooterStyle.css'
import { AiFillChrome, AiFillTwitterCircle } from "react-icons/ai"
import { FaInstagram } from "react-icons/fa"
import { MdFacebook } from "react-icons/md"

function Footer() {
  return (
    <div className='footer'>
        <div className="site-links">
            <div className="design-link">
                <p className='footer-p'>Follow Toei Animation</p>
                <div className="icon-sites">
                    <a href="https://www.facebook.com/ToeiAnimationOfficial/" target="_blank" rel="noopener noreferrer" className='links-icon-fb links-icon'>
                        <MdFacebook className='site-icons fb'/>
                    </a>
                    <a href="https://www.instagram.com/toei_animation/?hl=en" target="_blank" rel="noopener noreferrer" className='links-icon-insta links-icon'>
                        <FaInstagram className='site-icons insta'/>
                    </a>
                    <a href="https://twitter.com/ToeiAnimation" target="_blank" rel="noopener noreferrer" className='links-icon-twit links-icon'>
                        <AiFillTwitterCircle className='site-icons twit'/>
                    </a>
                    <a href="https://one-piece.com/" target="_blank" rel="noopener noreferrer" className='links-icon-chrome links-icon'>
                        <AiFillChrome className='site-icons chrome'/>
                    </a>
                </div>
            </div>
            <div className="toei-link">
                <p className='footer-p'>Follow me</p>
                <div className="icon-sites">
                    <a href="https://www.facebook.com/profile.php?id=100003268045086" target="_blank" rel="noopener noreferrer" className='links-icon-fb links-icon'>
                        <MdFacebook className='site-icons fb'/>
                    </a>    
                    <a href="https://www.instagram.com/mar.fajutnao/" target="_blank" rel="noopener noreferrer" className='links-icon-insta links-icon'>
                        <FaInstagram className='site-icons insta'/>
                    </a>
                </div>
            </div>
        </div>
        <div className="credits">
            <p className='credits-p'>
                <span className='credits-src'>(C) Eiichiro Oda / Shueisha, Fuji TV, <a href="https://one-piece.com/" target="_blank" rel="noopener noreferrer" className='toei-site'>Toei Animation</a></span>
                <span className='credits-me'>• Design by <a href="https://www.facebook.com/profile.php?id=100003268045086" target="_blank" rel="noopener noreferrer" className='me-links'>Eleomar</a></span>
            </p>
        </div>
    </div>
  )
}

export default Footer