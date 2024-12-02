import React from 'react'
import "./Home.css"
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import AISection from '../../components/AI Section/AISection'
import SocialMedia from '../../components/Social Media/SocialMedia'
import Grow from '../../components/Grow/Grow'
import Trending from '../../components/Trending/Trending'
import Footer from '../../components/Footer/Footer'

const Home = () => {
    return (
        <div className='homepage'>
            <Navbar />
            <Hero />
            <AISection />
            <SocialMedia />
            <Grow />
            <Trending />
            <Footer />
        </div>
    )
}

export default Home
