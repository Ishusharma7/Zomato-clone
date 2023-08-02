import React from "react";
import { Online } from "./cards/Online";
import { Collection } from "./Collections/Collection";
import { Footer } from "./Footer";
import { Header } from "./Header";
import './App.css'
import { TextField } from "@mui/material";
const Zomato =() =>{
    return(<>
           <Header />
        <div className="user">
        <img
            src= 'https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png'
            className="zom"
            width={300}
            height={60}
            alt= " should be here"
          />
          <br/>
          <br/>
            <h4>Discover the best food & drinks in Delhi NCR</h4>
            <br/>
            <div className="text">
         <TextField
         className="address"
          placeholder="ADDRESS"
          variant="outlined"
          type="text"
          required
        />
        <TextField
            className="search"
          placeholder="Search for restaurant,cuisine or a dish"
          variant="outlined"
          type="text"
          required
        />
        </div>
            </div>
            <Online />
            <Collection />
            <Footer />
    </>
    )
}
export default Zomato;