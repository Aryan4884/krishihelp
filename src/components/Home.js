import React from "react";
import video from '../assets/farming.mp4'
import { FaTractor } from 'react-icons/fa'
import tractor from '../img/tractor.jpg'
import firstpro1 from '../img/firstpro1.jpg'
import harvesting from '../img/harvesting.jpg'
import { BsFillArrowDownCircleFill } from 'react-icons/bs'
import "./Home.css"
import Navbar from "./Navbar";
// import { Link } from "react router dom";
//import farming from "../assets/farming.mp4";
export const Home = () => {
  return (
    <>
    <Navbar/>
      <div>
        <video controls autoPlay loop muted style={{ width: '100%', height: '100%', position: 'absolute', left: '0', objectFit: 'cover', objectPosition: 'center' }}>
          <source src={video} type="video/mp4" />
        </video>
        <div className="text dynamic-text" style={{ height: '90vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center', zIndex: '1', color: 'white', fontWeight: 'bold', opacity: '0.6' }}>

            <h1 style={{ fontSize: '6vw' }} className="h1tag video-text">Welcome To</h1>

            <h2 style={{ fontSize: '3vw' }} className="video-text">INNOVATIVE <FaTractor />  Farming</h2>

            <h3 style={{ fontSize: '1.5vw' }} className="video-text">It is a platform that provides information and resources
              for farmers to <br /> enhance their agricultural practices.</h3>

            <button type="button" className="btn btn-light"><a href="/signup" style={{ textDecoration: 'none', color: 'darkgreen', fontWeight: 'bold' }}>Explore Now</a> <span><BsFillArrowDownCircleFill style={{ fontSize: '23px' }} /></span></button>
          </div>

        </div>

        <div className="homepageCard">
          <div class="container text-center homepageCard">
            <div class="row">
              <div class="homePageCardcol col">
                <div className="card homePageCardBody eitherSideCard " >
                  <img src={harvesting} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Smart Farming Solutions</h5>
                    <p className="card-text">Explore cutting-edge agricultural technologies and smart farming practices tailored to boost productivity and sustainability.</p>
                    <a href="https://www.cropin.com/smart-farming" className="btn homepageCardBtn btn-primary">Visit Site</a>
                  </div>
                </div>
              </div>
              <div class="homePageCardcol col">
                <div className="card homePageCardBody eitherSideCard " >
                  <img src={firstpro1} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Farmer's Community</h5>
                    <p className="card-text">Connect with skilled agricultural professionals or find rewarding job opportunities in the farming sector.</p>
                    <a href="https://www.syngentafoundation.org/agriservices/whatwedo/farmershub" className="btn homepageCardBtn btn-primary">Visit Site</a>
                  </div>
                </div>
              </div>
              <div class="homePageCardcol col">
                <div className="card homePageCardBody eitherSideCard " >
                  <img src={tractor} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Modern Machinery and Tools</h5>
                    <p className="card-text">Discover a vast array of quality farm machinery and tools in our marketplace. 
                    </p>
                    <a href="https://forkify.com/guides/types-of-farm-machinery/" className="btn homepageCardBtn btn-primary">Visit Site</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>


    </>
  );
};

export default Home;
