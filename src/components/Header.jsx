import { memo } from "react";
import imgContent from '../assets/investment-calculator-logo.png';

function Header(){
    return (
        <div id="header">
            <img src={imgContent}></img>
            <h1>Investment Calculator</h1>
        </div>
    );

}

export default memo (Header);