import React from "react";
import css from "./Investor.module.css";
import {Footer} from '../Footer'
import a from "./Images/a.webp";
import b from "./Images/b.webp";
import c from "./Images/c.webp";
import d from "./Images/d.avif";
import e from "./Images/e.webp";
import f from "./Images/f.webp";
import g from "./Images/g.webp";
import { Card } from "../Card";
import { Investheader } from "./Investheader";
import { Offering } from "./Offers/Offering";
export const Investor = () => {
  const text = [
    { text: "Better food for more People", src: d },
    { text: "Instant commerce indistinguishable from Magic", src: e },
    { text: "Make India malnutrition free", src: f },
  ];
  const btext = [
    { usrc: a, para: "Shareholder's Letter", bsrc: g },
    { usrc: b, para: "Earnings Call Replay", bsrc: g },
    { usrc: c, para: "Earnings Call Transcript", bsrc: g },
  ];
  return (
    <>
       <Investheader />
      <div className={css.investor}>
        <div className={css.mleft}>
          {text.map((item, index) => (
            <div className={css.left} key={index}>
              <h1>{item.text}</h1>
              <br />
              <Card src={item.src} />
            </div>
          ))}
        </div>
        <div className={css.right}>
          <h3>Q4FY23 results</h3>
          {btext.map((item, index) => (
            <div className={css.image} key={index}>
              <Card src={item.usrc} />
              <p>{item.para}</p>{" "}
              <div className={css.arrow}>
                <Card src={item.bsrc} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <Offering />
      <Footer />
    </>
  );
};
