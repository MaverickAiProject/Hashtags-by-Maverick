import React, { useContext } from 'react'
import "./Trending.css"
import { TRENDING_HASHTAGS } from '../../utils/hashtagsConsts'
import { Context } from '../../context/Context'

const Trending = () => {

    const { copyFunction } = useContext(Context)

    return (
        <div className='trending'>
            <p className='trending-heading'>Trending <span>Hashtags</span> of 2024</p>
            <div className="trending-cards">
                <div className="trending-card">
                    <p className='trending-card-heading'>Facebook</p>
                    <p>{TRENDING_HASHTAGS.FACEBOOK}</p>
                    <button onClick={() => copyFunction(TRENDING_HASHTAGS.INSTAGRAM)}>Copy</button>
                </div>
                <div className="trending-card">
                    <p className='trending-card-heading'>Instagram</p>
                    <p>{TRENDING_HASHTAGS.INSTAGRAM}</p>
                    <button onClick={() => copyFunction(TRENDING_HASHTAGS.FACEBOOK)}>Copy</button>
                </div>
                <div className="trending-card">
                    <p className='trending-card-heading'>Youtube</p>
                    <p>{TRENDING_HASHTAGS.YOUTUBE}</p>
                    <button onClick={() => copyFunction(TRENDING_HASHTAGS.YOUTUBE)}>Copy</button>
                </div>
            </div>
        </div>
    )
}

export default Trending
