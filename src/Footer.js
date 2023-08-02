import React from "react";
import foot from'./Footer.module.css'
export const Footer = () => {
    return (
        <div className={foot.foot}>        
        <h1 className={foot.zmato}>ZOMATO</h1>
        <div className={foot.zomatoo}>
        <div className={foot.about}>
        <h6>ABOUT ZOMATO</h6>
        <p>WHO WE ARE</p>
        <p>BLOG</p>
        <p>WORK WITH US</p>
        <p>INVESTOR RELATIONS</p>
        <p>Report Fraud</p>
        <p>Contact Us</p>
        </div>
        <div className={foot.about}>
            <h6>ZOMAVERSE</h6>
            <p>Zomato</p>
            <p>Blinkit</p>
            <p>Feeding India</p>
            <p>Hyperpure</p>
            <p>Zomaland</p>
        </div>
        <div className={foot.about}>
            <h6>FOR RESTRAUNTS</h6>
            <p>Partner With Us</p>
            <p>Apps For You</p>
        </div>
        <div className={foot.about}>
            <h6>FOR ENTERPRISES</h6>
            <p>Apps For You</p>
        </div>
        <div className={foot.about}>
            <h6>LEARN MORE</h6>
            <p>Privacy</p>
            <p>Security</p>
            <p>Terms</p>
            <p>Sitemap</p>
        </div>
        </div>
        </div>

    )
}