import React, { useContext } from 'react'
import "./SocialMedia.css"
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'
import ReactLoading from 'react-loading';
import { SOCIAL_MEDIA_APPS, CONTENT_TYPE } from '../../utils/hashtagsConsts';

const SocialMedia = () => {

    const { socialMedia, contentType,
        setSocialMedia, setContentType,
        setSpecialInput, specialResult,
        specialLoading, generateSpecialHashtags,
        specialInput, copyFunction } = useContext(Context)

    const fb = SOCIAL_MEDIA_APPS.Facebook
    const yt = SOCIAL_MEDIA_APPS.Youtube
    const ins = SOCIAL_MEDIA_APPS.Instagram
    const tw = SOCIAL_MEDIA_APPS.Twitter
    const li = SOCIAL_MEDIA_APPS.LinkedIn

    const reel = CONTENT_TYPE.Reels
    const shorts = CONTENT_TYPE.Shorts
    const post = CONTENT_TYPE.Post
    const longVideo = CONTENT_TYPE.LongVideo
    const tweet = CONTENT_TYPE.Tweet

    return (
        <div className='social-media'>
            <p className='SM-heading'>GET BEST SOCIAL MEDIA HASHTAGS OF 2024</p>
            <div className='select-SM'>
                <div className="select-SM-app">
                    <p className='select-SM-head'>SELECT SOCIAL MEDIA APP</p>
                    <div className="select-SM-Links">
                        <p onClick={() => setSocialMedia(fb)} className={socialMedia === fb ? "activeSocial" : null}>{fb}</p>
                        <p onClick={() => setSocialMedia(ins)} className={socialMedia === ins ? "activeSocial" : null}>{ins}</p>
                        <p onClick={() => setSocialMedia(yt)} className={socialMedia === yt ? "activeSocial" : null}>{yt}</p>
                        <p onClick={() => setSocialMedia(li)} className={socialMedia === li ? "activeSocial" : null}>{li}</p>
                        <p onClick={() => setSocialMedia(tw)} className={socialMedia === tw ? "activeSocial" : null}>{tw}</p>
                    </div>
                </div>
                <div className="select-SM-app">
                    <p className='select-SM-head'>SELECT CONTENT TYPE</p>
                    <div className="select-SM-Links">
                        <p onClick={() => setContentType(reel)} className={contentType === reel ? "activeSocial" : null}>{reel}</p>
                        <p onClick={() => setContentType(shorts)} className={contentType === shorts ? "activeSocial" : null}>{shorts}</p>
                        <p onClick={() => setContentType(post)} className={contentType === post ? "activeSocial" : null}>{post}</p>
                        <p onClick={() => setContentType(longVideo)} className={contentType === longVideo ? "activeSocial" : null}>{longVideo}</p>
                        <p onClick={() => setContentType(tweet)} className={contentType === tweet ? "activeSocial" : null}>{tweet}</p>
                    </div>
                </div>
            </div>
            <div className="select-topic">
                <input type="text" onChange={(e) => setSpecialInput(e.target.value)} value={specialInput} placeholder="What is your Reel/Post topic?" className="topic-input" />
                <button onClick={() => generateSpecialHashtags()} className="generate-btn">GENERATE HASHTAGS</button>
            </div>
            <div className="hashtags-SM">
                <div className="hastags-SM-text">
                    <div className='hashtags-SM-result'>{specialLoading ?
                        <div className='specialLoader'>
                            <ReactLoading type={"spinningBubbles"} color={"#a70941"} height={'20%'} width={'20%'} />
                        </div>
                        : specialResult
                    }
                    </div>
                    <button onClick={() => copyFunction(specialResult)}>Copy Hashtags</button>
                </div>
                <div className="hastags-SM-image">
                    <img src={assets.hero_3} alt="" />
                </div>
            </div>
        </div>
    )
}

export default SocialMedia
