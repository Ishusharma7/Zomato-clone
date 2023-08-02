import React from "react";
import Apcss from './App.module.css';
export const Header =() => {
    return(
        <>
            <header>
            <div className={Apcss.head}>
                <h6>Investor Relations</h6>
                <h6>Add restraaunt</h6>
                <h6>Log in</h6>
                <h6>Sign up</h6>
                </div>
            </header>
        </>
    )
}
