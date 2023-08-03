import React from "react";
import { Card } from "../../Card";
import h from '../Images/h.avif'
import css from './Offer.module.css'
import i from '../Images/i.avif'
export const Offering = () => {
    return(
        <>
        <h6>Our core offerings</h6>
        <div className={css.offer}>
        <div className={css.card}>
            <div className={css.delivery}>
            <Card src ={h} />
                <h1>FOOD DELIVERY</h1>
            </div>
            <div className={css.text}>
                <p>Food ordering and delivery<br/> platform where customers can<br/>
                 search and discover local<br/> restaurants, order food, and <br/>have
                  it delivered reliably and<br/> quickly</p>
                  <h5>Q4FY23</h5>
            </div>
            <div className={css.bbtext}>
            <div className={css.btext}>
                <h2>INR 65.69 billion</h2>
                <h4>Food delivery GOV</h4>
                </div><div className={css.btext}>
                <h2>16.6 million</h2>
                <h4>Avg. monthly transacting customers</h4>
            </div>
            </div>
            </div>

            <div className={css.card}>
            <div className={css.deliveryb}>
            <Card src ={i} />
                <h1>QUICK<br/> COMMERCE</h1>
            </div>
            <div className={css.text}>
                <p>Quick commerce platform<br/>where customers can order<br/>
                everyday needs across<br/>thousands of products and have<br/>
                them delivered within minutes<br/><br/></p>
                  <h5>Q4FY23</h5>
            </div>
            <div className={css.bbtext}>
            <div className={css.btext}>
                <h2>INR 20.46 billion</h2>
                <h4>Quick commerce GOV</h4>
                </div><div className={css.btext}>
                <h2>3.9 million</h2>
                <h4>Avg. monthly transacting customers</h4>
            </div>
            </div>
            </div>

            <div className={css.card}>
            <div className={css.delivery}>
            <Card src ={i} />
                <h1>B2B<br/>SUPPLIES</h1>
            </div>
            <div className={css.text}>
                <p>Hyperpure is a B2B platform<br/>supplying high quality food<br/>
                ingredients and other products<br/><br/><br/><br/></p>
                  <h5>Q4FY23</h5>
            </div>
            <div className={css.bbtext}>
            <div className={css.btext}>
                <h2>INR 4.78 billion</h2>
                <h4>Hyperure revenue</h4>
                </div><div className={css.btext}>
                <h2>42K</h2>
                <h4>Unique outlets served</h4>
            </div>
            </div>
            </div>
        </div>
        </>
    )
}