import React from "react";
import onl from './Online.module.css'
import { Card } from "../Components/Card";
import a from './Images/a.avif';
import b from './Images/b.avif';
import c from './Images/c.avif';
export const Online = () => {
  const data =[
    {src:c,h:"Order Online",para:"Stay home and order at your doorstep"},
    {src:b, h:"Dining",para:"View city's favorite dining venues"},
    {src:a,h:"Nightlife and Clubs",para:"Explore the city's top nightlife outlets"}
  ];
    return(
         <div className={onl.cards}>
         {data.map((item,index) => (
         <div key ={index}  className={onl.photo}>
        <Card src ={item.src} />
       <div> <h3>{item.h}</h3>
          <p>{item.para}</p> </div>
        </div>
         ))}
        </div> 
    )
}