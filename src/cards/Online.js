import React from "react";
import onl from './Online.module.css'
import { Card } from "../Card";
import a from './Images/a.avif';
import b from './Images/b.avif';
import c from './Images/c.avif';
export const Online = () => {
    return(
         <div className={onl.cards}>
         <div  className={onl.photo}>
        <Card src ={c} />
       <div className={onl.bot}> <h3>Order Online</h3>
          <p>Stay home and order at your doorstep</p> </div>
        </div>
          <div  className={onl.photo}>
          <Card src={b} />
          <div className={onl.bot}><h3>Dining</h3>
          <p>View city's favorite dining venues</p></div>
          </div>
          <div  className={onl.photo}>
          <Card src ={a} />
          <div className={onl.bot}><h3>Nightlife and Clubs</h3>
          <p>Explore the city's top nightlife outlets</p></div>
          </div>
        </div> 
    )
}