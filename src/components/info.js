import React from "react"
import ProfilePic from "../images/portrait.jpg";

export default function Info() {
    return (
        <div className="row">
            
            <div className="col-12">
                <img src={ProfilePic} className="header--image" alt="Mathias" />
            </div>

            <div className="col-12">
                <h1 className="header--name">Mathias Nielsen</h1>
                <p className="header--profession">Frontend Developer</p>
                <p className="header--website">MathiasNielsen.website</p>
            </div>

            <div className="col-5 offset-1">
                <button type="submit" className="btn_email">Email</button>
            </div>
            
            <div className="col-5">
                <button type="submit" className="btn_linkedin"><i className="fa-brands fa-linkedin"></i> LinkedIn</button>
            </div>

        </div>
    )
}