import React from "react";
import col from'./collection.module.css';
import a from './images/a.avif';
import b from './images/b.avif'
import c from './images/c.avif'
import d from './images/d.avif'
import { Card } from "../Card";

export const Collection = () =>{
    return(
      <>
      <div className={col.heading}>
      <h5>Collections</h5>
      <p>Explore curated lists of top restaurants, cafes, pubs, and bars in Delhi NCR, based on trends</p>
      </div>
      <div className={col.card}>
      <div  className={col.photos}>
     <Card src ={b} />
       <h2>10 Unique Dining Experiences</h2>
       </div>
       <div  className={col.photos}>
       <Card src ={a} />
       <h2>21 Best Insta-worthly</h2>
       </div>
       <div  className={col.photos}>
       <Card src ={c} />
       <h2>Nightlife and Clubs</h2>
       </div>
       <div  className={col.photos}>
       <Card src ={d} />
       <h2>Nightlife and Clubs</h2>
       </div>
     </div> 
     </>
 )
}