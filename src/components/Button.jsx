import React from "react";

import './button.css'

const Button = ({ valueBtt, url}) => {
    return (
       <div className="links">
         <a href={url} target="_blank">{valueBtt}</a>
       </div>
    )
}

export default Button;