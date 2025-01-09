import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const AboutSection = () => {

  const [about, setAbout] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/about`)
      .then((res) => res.json())
      .then((info) => setAbout(info));
  }, []);





  return (



    <>
      <div>
        {/* PORTFOLIO SECTION START */}
        <section className="portfolio-section" id="recent-sec">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-header text-center">
                  <h2 className="section-title wow fadeInUp" data-wow-delay=".3s">My Recent Works</h2>
                  <p className="wow fadeInUp" data-wow-delay=".4s">
                    I showcase my latest projects, highlighting my expertise in WordPress, SEO, and MERN Stack development. Explore my innovative solutions.

                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="portfolio-filter text-center wow fadeInUp" data-wow-delay=".5s">
                  <div className="button-group filter-button-group">
                    <button data-filter="*" className="active">All</button>
                    <button data-filter=".uxui">WordPress Website</button>
                    <button data-filter=".branding">React Js Website</button>
                    <button data-filter=".mobile-app">SEO Rank</button>
                    <div className="active-bg" />
                  </div>
                </div>
                <div className="portfolio-box wow fadeInUp" data-wow-delay=".6s">
                  <div className="portfolio-sizer" />
                  <div className="gutter-sizer" />
                  <div className="portfolio-item branding">
                    <div className="image-box">
                      <img src="https://i.ibb.co.com/SJ4NFfr/Marketing3.png" alt />
                    </div>
                    <div className="content-box">
                      <h3 className="portfolio-title">
                        React Js


                      </h3>
                      <p>This React js Responsive Website</p>
                      <i className="flaticon-up-right-arrow" />
                      <button data-mfp-src="#portfolio-wrapper" className="portfolio-link modal-popup" />
                    </div>
                  </div>
                  <div className="portfolio-item uxui">
                    <div className="image-box">
                      <img src="https://i.ibb.co.com/jH6CY1X/ecommrece11.png" alt />
                    </div>
                    <div className="content-box">
                      <h3 className="portfolio-title">
                        WordPress


                      </h3>
                      <p>This is eCommerce WordPress website</p>
                      <i className="flaticon-up-right-arrow" />
                      <button data-mfp-src="#portfolio-wrapper" className="portfolio-link modal-popup" />
                    </div>
                  </div>
                  <div className="portfolio-item mobile-app">
                    <div className="image-box">
                      <img src="https://i.ibb.co.com/x6NxG59/SEO-4.png" alt />
                    </div>
                    <div className="content-box">
                      <h3 className="portfolio-title">SEO SucessFull Project</h3>
                      <p>

                        SEO Rank Fast Page

                      </p>
                      <i className="flaticon-up-right-arrow" />
                      <button data-mfp-src="portfolio-wrapper" className="portfolio-link modal-popup" />
                    </div>
                  </div>
                  <div className="portfolio-item branding">
                    <div className="image-box">
                      <img src="https://i.ibb.co.com/H2Z70PX/Portfolio6.png
" alt />
                    </div>
                    <div className="content-box">
                      <h3 className="portfolio-title">React Js</h3>
                      <p>100% Mobile friendly Portfolio Website</p>
                      <i className="flaticon-up-right-arrow" />
                      <button data-mfp-src="#portfolio-wrapper"  />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* PORTFOLIO SECTION END */}
        {/* start: Portfolio Popup */}
        
        {/* end: Portfolio Popup */}
        {/* RESUME SECTION START */}
        <section className="resume-section" id="resume-section">
          <div className="container ">
            <div className="row">
              <div className="col-md-6">
                <div className="section-header wow fadeInUp" data-wow-delay=".3s">
                  <h2 className="section-title"><i className="flaticon-recommendation" id="about-sec" /> My Experience</h2 >
                </div>
                <div className="resume-widget">
                  <div className="resume-item wow fadeInLeft" data-wow-delay=".4s">
                    <div className="time">2020 - Present</div>
                    <h3 className="resume-title">WoedPress Developer</h3>
                    <div className="institute">WPThemeGuru, Bangladesh</div>
                  </div>
                  <div className="resume-item wow fadeInLeft" data-wow-delay=".5s">
                    <div className="time">2021 - Present</div>
                    <h3 className="resume-title">Full Stack Web Developer</h3>
                    <div className="institute">AtTheRate, Bangladesh</div>
                  </div>
                  <div className="resume-item wow fadeInLeft" data-wow-delay=".6s">
                    <div className="time">2020 - Present</div>
                    <h3 className="resume-title">SEO Expert</h3>
                    <div className="institute">1SEOaudit.com, USA</div>
                  </div>
                  <div className="resume-item wow fadeInLeft" data-wow-delay=".7s">
                    <div className="time">2021 - Present</div>
                    <h3 className="resume-title">Web Developer</h3>
                    <div className="institute">FlipBundle.com, Bangladesh</div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="section-header wow fadeInUp" data-wow-delay=".4s">
                  <h2 className="section-title"><i className="flaticon-graduation-cap" /> My Education</h2>
                </div>
                <div className="resume-widget">
                  <div className="resume-item wow fadeInRight" data-wow-delay=".5s">
                    <div className="time">2020 - 2024</div>
                    <h3 className="resume-title">Dip in Computer Engineer </h3>
                    <div className="institute">TTEI (Bogura)</div>
                  </div>
                  <div className="resume-item wow fadeInRight" data-wow-delay=".6s">
                    <div className="time">2021 - 2023</div>
                    <h3 className="resume-title">WordPress Expert Award</h3>
                    <div className="institute">AtTherate</div>
                  </div>
                  <div className="resume-item wow fadeInRight" data-wow-delay=".7s">
                    <div className="time">2021 - 2024</div>
                    <h3 className="resume-title">SEO Award</h3>
                    <div className="institute">AbsoluteSquad.com</div>
                  </div>
                  <div className="resume-item wow fadeInRight" data-wow-delay=".8s">
                    <div className="time">2018 - 2019</div>
                    <h3 className="resume-title">SSC </h3>
                    <div className="institute">G.A.J.BL , High School</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* RESUME SECTION END */}
      </div>


    </>
  );
};

export default AboutSection;
