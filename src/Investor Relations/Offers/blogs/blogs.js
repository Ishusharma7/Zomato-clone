import React from "react";
import {Card} from '../../../Card'
import p from '../../Images/p.png'
import q from '../../Images/q.png'
import r from '../../Images/r.png'
import css from './blog.module.css'
export const Blogs=() =>{
    const data =[
        {src:p, caption:"Deepinder Goyal | 03 Aug 2023",heading:"Q1FY24 shareholder's letter and results",para:"A quick capture of headline results from this quarter" },
        {src:q,caption:"Deepinder Goyal | 31 july 2023",heading: "A new kind of CFO",para:"“Physical activity is not what you do separate from your job, but rather an integral part of your job” - Brad Stulberg"},
        {src:r,caption: "Data Platform Team | 20 july 2023",heading:"Building a cost-effective logging platform",para:"Deep dive into how we leveraged ClickHouse for our logging platform to handle 150 million logs per minute."}
    ];
    return(
        <>
                <h1>From our blogs</h1>
        <div className={css.main}>
        {data.map((item,index) =>(
            <div className={css.head} key ={index}>
                <Card src={item.src} />
                <p>{item.caption}</p>
                <h2>{item.heading}</h2>
                <h3>{item.para}</h3>
            </div>
        ))}
        </div>
        </>
    )
}