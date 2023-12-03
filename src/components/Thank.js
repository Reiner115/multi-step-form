import thankImg from "../images/icon-thank-you.svg";
import React from "react";
function Thank(props){
    return(
            <div className="thank-container">
                <img src={thankImg} alt="" />
                <h2 className="">Thank you</h2>
                <div className="subtitle">
                    Thanks for confirming your subscription! we hope you have fun using our platform.if you ever need suppot,please feel free to email as at support@loremgaming.com
                </div>
            </div>
    );
}
export default  Thank;