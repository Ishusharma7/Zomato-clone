import React from "react";
import './Online.css'
import { Card } from "../Card";
import a from './Images/a.avif';
import b from './Images/b.avif';
import c from './Images/c.avif';
export const Online = () => {
    return(
         <div className="cards">
         <div  className="photo">
        <Card src ={c} />
        <h3>Order Online</h3>
          <p>Stay home and order at your doorstep</p>
        </div>
          <div  className="photo">
          <Card src={b} />
          <h3>Dining</h3>
          <p>View city's favorite dining venues</p>
          </div>
          <div  className="photo">
          <Card src ={a} />
          <h3>Nightlife and Clubs</h3>
          <p>Explore the city's top nightlife outlets</p>
          </div>
        </div> 
    )
}