'use client'
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../globals.css';

function Page() {
  useEffect(() => {
    AOS.init({
      duration: 1500, // ระยะเวลาในการแสดงอนิเมชัน
      delay: 100,     // ความล่าช้าในการเริ่มต้นแอนิเมชัน
      offset: 0,      // ระยะห่างจากจุดเริ่มต้นในการเริ่มต้นแอนิเมชัน
    });
  }, []);

  return (
    <>
      <Header />
      <section id="team" className="team_member section-padding">
        <div className="container">
          <div className="text-center mt-4 mb-4">
            <h3>บุคลากรดำเนินโครงการ PSU-HiFi</h3>
          </div>
          <div className="row text-center">
            <div className="col-md-3 col-sm-6 col-xs-12" data-aos="fade-up" data-aos-delay="100">
              <div className="our-team">
                <div className="team_img">
                  <img src="/image/team-1.jpg" alt="team-image" />
                  <ul className="social">
                    <li><a href="#"><i className="fa fa-facebook" /></a></li>
                    <li><a href="#"><i className="fa fa-line" /></a></li>
                  </ul>
                </div>
                <div className="team-content">
                  <h3 className="title">Stephen Cronin</h3>
                  <span className="post">Product Manager</span>
                </div>
              </div>
            </div>{/*- END COL */}
            <div className="col-md-3 col-sm-6 col-xs-12" data-aos="fade-up" data-aos-delay="200">
              <div className="our-team">
                <div className="team_img">
                  <img src="/image/team-2.jpg" alt="team-image" />
                  <ul className="social">
                    <li><a href="#"><i className="fa fa-facebook" /></a></li>
                    <li><a href="#"><i className="fa fa-line" /></a></li>
                  </ul>
                </div>
                <div className="team-content">
                  <h3 className="title">Rachel Park</h3>
                  <span className="post">Developer</span>
                </div>
              </div>
            </div>{/*- END COL */}
            <div className="col-md-3 col-sm-6 col-xs-12" data-aos="fade-up" data-aos-delay="300">
              <div className="our-team">
                <div className="team_img">
                  <img src="image/team-3.jpg" alt="team-image" />
                  <ul className="social">
                    <li><a href="#"><i className="fa fa-facebook" /></a></li>
                    <li><a href="#"><i className="fa fa-line" /></a></li>
                  </ul>
                </div>
                <div className="team-content">
                  <h3 className="title">Dan Billson</h3>
                  <span className="post">Marketer</span>
                </div>
              </div>
            </div>{/*- END COL */}
            <div className="col-md-3 col-sm-6 col-xs-12" data-aos="fade-up" data-aos-delay="400">
              <div className="our-team">
                <div className="team_img">
                  <img src="image/team-4.jpg" alt="team-image" />
                  <ul className="social">
                    <li><a href="#"><i className="fa fa-facebook" /></a></li>
                    <li><a href="#"><i className="fa fa-line" /></a></li>
                  </ul>
                </div>
                <div className="team-content">
                  <h3 className="title">Gina Mellow</h3>
                  <span className="post">Co-founder</span>
                </div>
              </div>
            </div>{/*- END COL */}
            <div className="col-md-3 col-sm-6 col-xs-12">
            </div>{/*- END COL */}
          </div>{/*- END ROW */}
        </div>{/*- END CONTAINER */}
      </section>
      <Footer />
    </>
  );
}

export default Page;
