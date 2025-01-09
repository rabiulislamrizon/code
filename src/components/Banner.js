import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Banner.css';

const Banner = () => {
  const [banners, setBanners] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/banner`)
      .then((res) => res.json())
      .then((info) => setBanners(info));
  }, []);



  const handleSubscriber = (event) => {
    event.preventDefault();
    const subscriberEmail = event.target.subscriberEmail.value;

    const sunscribe = {
      subscriberEmail

    };

    const url = `http://localhost:5000/add-subscriber`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(sunscribe),
    })
      .then((res) => res.json())
      .then((result) => {

        alert('Thanks For Subscribe..');
      });
  };



  return (




    <>

      <section className="hero-section d-flex align-items-center" id="intro">
        <div className="intro_text">
          <svg viewBox="0 0 1320 300">
            <text x="50%" y="50%" textAnchor="middle">HI</text>
          </svg>
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="hero-content-box">
                <span className="hero-sub-title">I am RiZon</span>
                <h1 className="hero-title">Web Developer &<br />SEO Expert</h1>
                <div className="hero-image-box d-md-none text-center">
                  <img src="assets/img/hero/me.png" alt />
                </div>
                <p className="lead">
                  Create a website with us for any business or SEO services. I specialize in SEO and web development tailored to your needs, including business, blog, news, eCommerce, agency, LMS, real estate, and portfolio websites. As a React and WordPress expert, MERN Stack developer, and SEO service provider, I deliver exceptional results.
                </p>
                <div className="button-box d-flex flex-wrap align-items-center">
                  <a href="https://robiulislamrijon360.blogspot.com/2024/07/rabiul-islam-rizon-cv.html" className="btn tj-btn-secondary">Download CV <i className="flaticon-download" /></a>
                  <ul className="ul-reset social-icons">
                    <li>
                      <a href="https://www.facebook.com/rabiulislamrizon" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.behance.net/me_rizon" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-behance" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/rabiul-islam-rizon-a92943281/" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-linkedin-in" />
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/rabiulislamrizon" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-github" />
                      </a>
                    </li>
                  </ul>

                </div>
              </div>
            </div>
            <div className="col-md-6 d-none d-md-block">
              <div className=" text-center">
                <img src="https://i.ibb.co/9vrGKt2/profile-pic-10.png" alt />
              </div>
            </div>
          </div>
          <div className="funfact-area">
            <div className="row">
              <div className="col-6 col-lg-3">
                <div className="funfact-item d-flex flex-column flex-sm-row flex-wrap align-items-center">
                  <div className="number"><span className="odometer" data-count={5}>0</span></div>
                  <div className="text">Years of <br />Experience</div>
                </div>
              </div>
              <div className="col-6 col-lg-3">
                <div className="funfact-item d-flex flex-column flex-sm-row flex-wrap align-items-center">
                  <div className="number"><span className="odometer" >1.2</span>+</div>
                  <div className="text">Project <br />Completed</div>
                </div>
              </div>
              <div className="col-6 col-lg-3">
                <div className="funfact-item d-flex flex-column flex-sm-row flex-wrap align-items-center">
                  <div className="number"><span className="odometer">1.1</span>k</div>
                  <div className="text">Happy <br />Clients</div>
                </div>
              </div>
              <div className="col-6 col-lg-3">
                <div className="funfact-item d-flex flex-column flex-sm-row flex-wrap align-items-center">
                  <div className="number"><span className="odometer" >20</span></div>
                  <div className="text">Winning of <br />Award</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>




    </>
  );
};

export default Banner;
