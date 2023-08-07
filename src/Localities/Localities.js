import React from "react";
import {Card} from '../Components/Card'
import e from '../Collections/images/e.avif'
import css from './Localities.module.css'
export const Local =() => {
    const data =[
        {place: "Connaught Place", no:"257"},
        {place: "Sector 29", no:"145"},
        {place: "Sector 18, Noida", no:"209"},
        {place: "Rajouri Garden", no:"314"},
        {place: "Saket", no:"322"},
        {place: "DLF Cyber City", no:"163"},
        {place: "Golf Course Road", no:"156"},
        {place: "DLF Phase 4", no:"223"},
        {place: "Garden City", no:"155"}
    ];
    return(
        <>
        <div className={css.fl}>
            <div className={css.first}>
            <h1>Popular localities in and around Delhi NCR</h1>
            </div>
    <div className={css.second}>
            {data.map((item,index) =>(
        <div className={css.third} key = {index}>
        <h2>{item.place}</h2>
        <p>{item.no} Places</p>
        </div>
            ))}
        </div>
        </div>
        

        <div className={css.down}>
            <div className={css.imge}>
                <Card src={e}/>
            </div>
            <div className={css.app}>
                <h3>Get the Zomato app</h3>
                <p>We will send you a link, open it on your phone to download the app</p>
                <label>
                    <input 
                        type="radio"
                    />
                    Email
                </label>
                <label>
                    <input 
                        type="radio"
                        checked
                    />
                    Phone
                </label><br/>
                <input 
                    placeholder="Email"
                    type="text"
                />
                <button>Share App Link</button>
            </div>
            
        </div>

        </>
    )
}