import React from "react";
import { Card } from "../../Card";
import h from '../Images/h.avif'
import css from './Offer.module.css'
import i from '../Images/i.avif'
import j from '../Images/j.avif'
export const Offering = () => {
    const text =[
        {usrc:h,heading:"FOOD DELIVERY",para:"Food ordering and delivery platform where customers can search and discover local restaurants, order food, and have it delivered reliably and quickly",ucount:"7,318",lcount:"17.5 million",avg:"Avg. monthly transacting customers",del:"Food delivery GOV"},
        {usrc:i,heading:"QUICK COMMERCE",para:"Quick commerce platform where customers can order everyday needs across thousands of products and have them delivered within minutes",ucount:"2,140",lcount:"3.9million",avg:"Avg. monthly transacting customers",del:"Quick commerce GOV"},
        {usrc:j,heading:"B2B SUPPLIES",para:"Hyperpure is a B2B platform supplying high quality food ingredients and other products",ucount:"617",lcount:"8",avg:"# of cities present in",del:"Hyperpure revenue"}
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
        </div>
    )
}