import React from "react";
import { Card } from "../../Card";
import h from '../Images/h.avif'
import l from '../Images/l.avif'
import css from './Offer.module.css'
import k from '../Images/k.avif'
import i from '../Images/i.avif'
import j from '../Images/j.avif'
import m from '../Images/m.avif'
import n from '../Images/n.avif'
import o from '../Images/o.avif'
import { Corporate } from "./corporate/corporate";
export const Offering = () => {
    const text =[
        {usrc:h,heading:"FOOD DELIVERY",para:"Food ordering and delivery platform where customers can search and discover local restaurants, order food, and have it delivered reliably and quickly",ucount:"7,318",lcount:"17.5 million",avg:"Avg. monthly transacting customers",del:"Food delivery GOV"},
        {usrc:i,heading:"QUICK COMMERCE",para:"Quick commerce platform where customers can order everyday needs across thousands of products and have them delivered within minutes",ucount:"2,140",lcount:"3.9million",avg:"Avg. monthly transacting customers",del:"Quick commerce GOV"},
        {usrc:j,heading:"B2B SUPPLIES",para:"Hyperpure is a B2B platform supplying high quality food ingredients and other products",ucount:"617",lcount:"8",avg:"# of cities present in",del:"Hyperpure revenue"}
    ];
    const qtext = [
        {heading:"EV-Based delivering", para:"100% adoption of electric vehicles for order deliveries by 2030",src: m},
        {heading: "Voluntary carbon offsets", para:"~500k tonnes of carbon offset units purchased voluntarily for use in FY22 & FY23", src:n},
        {heading:"Reducing plastic waste", para:"100% plastic neutral deliveries since April 2022", src:o}
    ];
    return(
        <div className={css.back}>
        <h6>Our core offerings</h6>
        <div className={css.offer}>
        {text.map((item,index) =>(<>
        <div className={css.card}>
            <div className={css.delivery} key={index}>
            <Card src ={item.usrc} />
                <h1>{item.heading}</h1>
            </div>
            <div className={css.cont}>
            <div className={css.text}>
                <p>{item.para}</p>
                  <h5>Q4FY23</h5>
            </div>
            <div className={css.bbtext}>
            <div className={css.btext}>
                <h2>INR {item.ucount} crore</h2>
                <h4>{item.del}</h4>
                </div><div className={css.btext}>
                <h2>{item.lcount}</h2>
                <h4>{item.avg}</h4>
            </div>
            </div>
            </div>
            </div>
            </>
        ))}
            </div>
            <div className={css.full}>
            <div className={css.beyond}>
                <h6>Beyond business</h6>
                <p>At Zomato, our business approach is guided by our commitment to 
                responsible and sustainable growth. Our ESG update outlines the many ways in 
                which we make the impact of our business more sustainable and help make the world a 
                better place for everyone. Some of our key sustainability initiatives include:</p>                               
            </div>
            <div className={css.image}>
                <Card src={k} />
                <div className={css.inner}>
                <p>Feeding India (FI) by Zomato is a not-for-profit organisation,
                 designing interventions to reduce hunger and malnutrition among underserved
                  communities in India. Feeding India works with on-ground non-profit partners
                   working on education and child/maternal malnutrition by providing regular meals
                    to dependents.</p>
                    <Card src = {l} />
                    </div>
            </div>
            </div><br/><br/>
            <div className={css.last}>
            {qtext.map ((item,index) =>(<>
            <div className={css.botom} key ={index}>
            <div className={css.botomimage}>
            <h7>{item.heading}</h7>
            <p>{item.para}</p>               
            </div>
            <Card src = {item.src} />
            </div>
            </>
            ))}
                </div>
                <Corporate />
        </div>
    )
}