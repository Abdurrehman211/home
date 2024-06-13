import React from "react";
import { useState, useEffect } from 'react';
import bag from "./images/briefcase.svg";
import bag1 from "./images/bags.png";
import cube from "./images/cube.gif";
import Layout from "./images/icons8-layout.gif";
import database from "./images/database.gif";
import developer from "./images/developer.gif";
import protect from "./images/protect.gif";
import aos from 'aos';
import 'aos/dist/aos.css';
import './Service.css';

function Service(){
    useEffect(() => {
        aos.init({ duration: 2000 });
      })
    return(
        <>
            <section id="service"  >
                <div className="header1-1" >
                <div className="header1" data-aos="fade-left">
                <h1>Our Services</h1>
                </div>
                </div>
                <div className="block1" data-aos="fade-left">
                    <div className="Card1" data-aos="fade-left">
                        <div className="card" >
                            <img src={bag1} alt="bag" id="bag-logo" />
                            <div class="container">
                                <h4><b>Different Layouts</b></h4>
                                <p  id="p">
                                    Our website offers a range of layout options tailored to diverse content needs and
                                    user preferences.From the simplicity and readability of single-column layouts.
                                   </p>
                            </div>
                        </div>
                        <div className="card" >
                            <img src={cube} alt="cube" id="cube-logo" />
                            <div class="container">
                                <h4><b>Unique Design</b></h4>
                                <p id="p">Experience a digital journey through our website,
                                    where sleek design meets intuitive navigation,
                                    guiding you seamlessly to discover our innovative solutions.
                                  </p>
                            </div>
                        </div>
                        <div className="card" >
                            <img src={database} alt="bag" id="database-logo" />
                            <div class="container">
                                <h4><b>Make it Database</b></h4>
                                <p id="p">Experience a digital journey through our website,
                                    where sleek design meets intuitive navigation,
                                    guiding you seamlessly to discover our innovative solutions.
                                    </p>
                            </div>
                        </div>
                    </div>
                    <div className="Card2" data-aos="fade-right"> 
                        <div className="card"> 
                            <img src={Layout} alt="bag" id="bag-logo" />
                            <div class="container">
                                <h4><b>Responsiveness</b></h4>
                                <p  id="p">
                                "We specialize in optimizing website responsiveness,
                                     ensuring fast loading times and seamless user experiences
                                      across all devices and screen sizes."</p>
                            </div>
                        </div>
                        <div className="card" >
                            <img src={protect} alt="cube" id="cube-logo" />
                            <div class="container">
                                <h4><b>Testing</b></h4>
                                <p id="p">Our testing services focus on evaluating website responsiveness,
                                     ensuring optimal performance across devices and screen sizes
                                      for a seamless user experience</p>
                            </div>
                        </div>
                        <div className="card" >
                            <img src={developer} alt="bag" id="database-logo" />
                            <div class="container">
                                <h4><b>Make it Simple</b></h4>
                                <p id="p">We offer testing services to ensure your codebase is optimized for responsiveness, providing smooth user experiences through efficient
                                      coding practices</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Service;