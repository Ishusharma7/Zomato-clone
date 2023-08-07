import React from "react";
import Apcss from './App.module.css';
import { Link } from "react-router-dom";
export const Header =() => {
    return(
        <>
            <header>
            <div className={Apcss.head}>
            <Link to='/Investor'><h6>Investor Relations</h6></Link>
                <h6>Add restraaunt</h6>
                <h6>Log in</h6>
                <h6>Sign up</h6>
                </div>
            </header>
        </>
    )
}
