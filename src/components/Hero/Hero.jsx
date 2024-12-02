import React from 'react'
import "./Hero.css"
import { assets } from '../../assets/assets'
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
    return (
        <div className='hero-section'>
            <div className="hero-text">
                <h2 className='hero-text-1'>find Viral <span>Hashtags</span></h2>
                <p className='hero-text-2'>for your</p>
                <p className='hero-text-3'>
                    <Typewriter
                        words={[
                            'INSTAGRAM REELS',
                            'FACEBOOK REELS',
                            'YOUTUBE SHORTS',
                            'YOUTUBE VIDEOS',
                        ]}
                        loop={0}
                        cursor
                        cursorStyle="."
                        typeSpeed={80}
                        deleteSpeed={70}
                        delaySpeed={2000}
                    />
                </p>
            </div>
            <div className="hero-img">
                <img src={assets.hero} alt="" />
            </div>
        </div>
    )
}

export default Hero
