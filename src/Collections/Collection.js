import React from "react";
import col from'./collection.module.css';
import a from './images/a.avif';
import b from './images/b.avif'
import c from './images/c.avif'
import d from './images/d.avif'
import { Card } from "../Card";
import { Local } from "../Localities/Localities";

export const Collection = () =>{
  const data =[
    {src:a,h:"10 Unique Dining Experiences"},
    {src:b,h:"21 Best Insta-worthly"},
    {src:c,h:"Nightlife and Clubs"},
    {src:d,h:"Fresh mornings"}
  ];
    return(
      <>
      <div className={col.heading}>
      <h5>Collections</h5>
      <p>Explore curated lists of top restaurants, cafes, pubs, and bars in Delhi NCR, based on trends</p>
      </div>
      <div className={col.card} >
      {data.map((item,index) => (
      <div  className={col.photos} key ={index}>
     <Card src ={item.src} />
       <h2>{item.h}</h2>
       </div>
      ))}
     </div> 
     <Local />
     </>
 )
}