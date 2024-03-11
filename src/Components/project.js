import React from 'react'
import {HashRouter, Link } from 'react-router-dom';


export default function Project() {
  return (
    <div className="container-xxl py-6 pt-5" id="project">
    <div className="container">
        <div className="row g-5 mb-5 align-items-center wow fadeInUp" data-wow-delay="0.1s">
            <div className="col-lg-6">
                <h1 className="display-5 mb-0">My Projects</h1>
            </div>
            <div className="col-lg-6 text-lg-end">
                <ul className="list-inline mx-n3 mb-0" id="portfolio-flters">
                    <li className="mx-3 active" data-filter="*">All Projects</li>
                    <li className="mx-3" data-filter=".first">HRMS / Payroll</li>
                    <li className="mx-3" data-filter=".second">Fixed Asset Management</li>
                </ul>
            </div>
        </div>
        <div className="row g-4 portfolio-container wow fadeInUp" data-wow-delay="0.1s">
            <div className="col-lg-4 col-md-6 portfolio-item first">
                <div className="portfolio-img rounded overflow-hidden">
                    <img className="img-fluid" src="img/project-1.jpg" alt=""/>
                    <div className="portfolio-btn">
                        <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href="img/project-1.jpg"
                            data-lightbox="portfolio"><i className="fa fa-eye"></i></a>                            
                                <Link className="btn btn-lg-square btn-outline-secondary border-2 mx-1" to="hrms">
                                <i className="fa fa-link"></i></Link>                            
                        {/* <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href="HRMS.html"><i
                                className="fa fa-link"></i></a> */}
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item second">
                <div className="portfolio-img rounded overflow-hidden">
                    <img className="img-fluid" src="img/Asset_Management_Cycle.png" alt=""/>
                    <div className="portfolio-btn">
                        <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1"
                            href="img/Asset_Management_Cycle.png" data-lightbox="portfolio"><i
                                className="fa fa-eye"></i></a>
                        <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href="FAMS.html"><i
                                className="fa fa-link"></i></a>
                    </div>
                </div>
            </div>           
        </div>
    </div>
</div>
  )
}
