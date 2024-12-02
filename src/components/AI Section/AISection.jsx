import React, { useContext } from 'react'
import "./AISection.css"
import { assets } from '../../assets/assets'
import { FaSearch } from "react-icons/fa";
import { Context } from '../../context/Context';
import ReactLoading from 'react-loading';
import { HASHTAGS } from '../../utils/hashtagsConsts';

const AISection = () => {

    const { input, setInput, loading, generateHashtags, resultData } = useContext(Context)

    return (
        <div className='AI-Section'>
            <h1>Generate Trending Hashtags with AI</h1>
            <div className="AI-Section-inner">
                <div className="AI-Section-text">
                    <div className='AI-Section-searchBar'>
                        <input type="text" onChange={(e) => setInput(e.target.value)} placeholder='What is your Reel/Post Topic?' value={input} />
                        <button className='ai-btn' onClick={() => generateHashtags()}><FaSearch className='fa-search' /></button>
                    </div>
                    <div className='AI-Section-result'>{loading ?
                        <div className='loader'>
                            <ReactLoading type={"spinningBubbles"} color={"#a70941"} height={'15%'} width={'15%'} />
                        </div> :
                        resultData ? resultData : HASHTAGS.AI_SECTION}
                    </div>
                </div>
                <div className="AI-Section-img">
                    <img src={assets.hero_2} alt="" />
                </div>
            </div>
        </div>
    )
}

export default AISection
