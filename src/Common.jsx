import React from 'react'
import { NavLink } from 'react-router-dom'
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import a1 from "../src/images/img.svg"


const Common  = (props) => {
    return (
        <>
            <section id="header" className="d-flex align-content-center">
                <div className="container-fluid ">
                    <div className= "row">
                        <div className="col-10 mx-auto">

                            <div className="row">
                                <div className="container-fluid col-8 pt-5 pt-lg-0 order-2 order-lg-1 d-flex  justify-content-center flex-column ">
                                    <h1>{props.h1} <strong className="brand-name">{props.h3}</strong>{props.h2}
                                    </h1>
                                    <h3 className="my-3">
                                        We are a team of developers making your buisness scalable .
                                    </h3>
                                    <div className="mt-3">
                                        <NavLink to= {props.visit} className ="btn btn-outline-primary">{props.btname}
                                        </NavLink>
                                    </div>
                                    

                                </div>

                                <div className="col-4 order-1 order-lg-2 header-img">
                                <img src={props.imgsrc} className="img-fluid animated" alt="Common  img" />
                                    </div>
                                    </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Common;

