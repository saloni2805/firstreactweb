import React from "react";
import web from "../src/images/img2.webp";
import { NavLink } from "react-router-dom";

export default function Common(props) {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                   {props.name}
                    <strong className="brand-name"> Saloni</strong>
                  </h1>
                  <h2 className="my-3">
                    We are the team of talented developer making websites
                  </h2>
                  <div className="mt-3">
                    <NavLink to="/service">
                      <button type="button" class="btn btn-primary">
                        {props.btname}
                      </button>
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg order-1 corder-lg-2 header-img">
                  <img src={props.imgsrc} className="img-fluid animated" alt="Img"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
