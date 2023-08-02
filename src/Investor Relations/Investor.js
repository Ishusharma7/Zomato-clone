import React from "react";
import css from './Investor.module.css';
import { Card } from "../Card";
import a from './Images/a.webp';
import b from './Images/b.webp'
import c from './Images/c.webp'
import d from './Images/d.avif'
import e from './Images/e.webp'
import f from './Images/f.webp'
import g from './Images/g.webp'
export const Investor = () => {
    return(
        <div className={css.investor}>
        <div className={css.mleft}>
    <div className={css.left}>
        <h1>Better food for more people</h1>
        <br/>
        <Card src ={d} />
    </div>
    <div className={css.left}>
        <h1>Instant commerce indistinguishable from magic</h1>
        <br/>
        <Card src ={e} />
    </div>
    <div className={css.left}>
        <h1>Make India malnutrition free</h1>
        <br/>
        <Card src = {f} />
    </div>
    </div>

    <div className={css.right}>
        <h3>Q4FY23 results</h3>
        <div className={css.image}>
        <Card src ={a} />
        <p>Shareholder'd Letter</p> <div className={css.arrow}><Card src = {g} /></div>
        </div>
        <div className={css.image}>
        <Card src ={b} />
        <p>Earnings Call Replay</p> <div className={css.arrow}><Card src ={g} /></div>
        </div>
        <div className={css.image}>
        <Card src ={c} />
        <p>Earnings Call Transcript</p> <div className={css.arrow}><Card src ={g} /></div>
        </div>
    </div>
    </div>
    )
}