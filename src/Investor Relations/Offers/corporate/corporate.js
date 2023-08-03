import React from "react";
import css from './corporate.module.css'
export const Corporate = () =>{
    const data =[
        {date:"31 July 2023",det:"Zomato - Intimation of allotment of shares under ESOP"},
        {date:"25 July 2023",det:"Zomato announces Board meeting date and schedule of earnings conference call for Q1FY24"}
    ];
    return(
        <div className={css.toop}>
    <div className={css.top}>
        <div className={css.low}>
            <h1>Corporate announcment</h1>
        </div>
        {data.map((item,index) =>(
        <div className={css.text} key ={index}>
            <h2>{item.date}</h2>
            <h3>{item.det}</h3>
            <button>Read More</button>
        </div>
        ))}
        <div className={css.anounce}>
        <button>See all announcments</button></div>
    </div>
            </div>
    )
        }