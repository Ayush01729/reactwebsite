import React from 'react'
import { NavLink } from 'react-router-dom'
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import a1 from "../src/images/Android_robot.svg"
import Common from "./Common"


const About  = () => {
    return (
        <>
            {/* <section id="header" className="d-flex align-content-center">
                <div className="container-fluid nav_bg">
                    <div className= "row">
                        <div className="col-10 mx-auto">

                            <div className="row">
                                <div className="container-fluid col-8 pt-5 pt-lg-0 order-2 order-lg-1 d-flex  justify-content-center flex-column ">
                                    <h1>Welcome to <strong className="brand-name">About</strong> Page
                                    </h1>
                                    <h3 className="my-3">
                                        We are a team of developers making your buisness scalable .
                                    </h3>
                                    <div className="mt-3">
                                        <NavLink to= "/service" className ="btn btn-outline-primary">Contact Now
                                        </NavLink>
                                    </div>
                                    

                                </div>

                                <div className="col-4 order-1 order-lg-2 header-img">
                                <img src={a1} className="img-fluid animated" alt="About  img" />
                                    </div>
                                    </div>
                        </div>
                    </div>
                </div>
            </section> */}


            <Common  
            h1 = "Welcome to"
            h3 = "About"
            h2 = "Page"
            imgsrc = {a1}
            visit = "/contact" 
            btname = "Contact Now"
            />
        </>
    )
}

export default About;

