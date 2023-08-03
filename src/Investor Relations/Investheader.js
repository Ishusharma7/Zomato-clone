import React from "react";
import { Card } from "../Card";
import d from './Images/d.avif'
import css from './head.module.css'
export const Investheader =() => {
    return(
        <>
        <div className={css.head}>
            <div className={css.image}>
                <Card src={d} /> <p>|  Investor Relations</p>
            </div>
            <div className={css.text}>
                <h6>Home</h6>
                <h6>Financials</h6>
                <h6>Announcments</h6>
                <h6>Blog</h6>
                <h6>Governance</h6>
                <h6>ESG</h6>
                <h6>Resources</h6>
            </div>
        </div>
        </>
    )
}