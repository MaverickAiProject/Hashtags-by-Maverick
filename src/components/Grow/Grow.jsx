import React from 'react'
import "./Grow.css"
import { assets } from '../../assets/assets'

const Grow = () => {

    const SERVICES = [
        {
            link: "#",
            image: assets.web_dev,
            name: "Website Development"
        },
        {
            link: "#",
            image: assets.app_dev,
            name: "Android/iOS App Development"
        },
        {
            link: "#",
            image: assets.seo,
            name: "Search Engine Optimization"
        },
        {
            link: "#",
            image: assets.google_meta_ads,
            name: "Google & Meta Ads"
        },
        {
            link: "#",
            image: assets.payperclick,
            name: "Pay Per Click Marketing"
        },
        {
            link: "#",
            image: assets.shopify,
            name: "Shopify Website Development"
        }
    ]

    return (
        <div className='grow'>
            <div className="grow-heading">
                <p className='grow-heading-main'>WANT TO GROW YOUR <br />BUSINESS ONLINE?</p>
                <p className='grow-heading-sub'>Explore Digital Marketing / Web Development Services by <b>MAVERICK</b></p>
            </div>
            <div className="grow-services">
                {SERVICES.map((item, index) => (
                    <a key={index} href={item.link} className="grow-card">
                        <div className='grow-card-img'>
                            <img src={item.image} alt="" />
                        </div>
                        <p>{item.name}</p>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default Grow
