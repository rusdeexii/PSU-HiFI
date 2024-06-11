import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './page.css'
import { FaCalendarAlt } from "react-icons/fa";


function page() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="row mt-n5">
          <div className="col-md-6 col-lg-4 mt-5">
            <div className="blog-grid">
              <div className="blog-grid-img position-relative"><img alt="img" src="https://static.naewna.com/uploads/files2017/images/01-(19).jpg" /></div>
              <div className="blog-grid-text p-4">
                <h3 className="h5 mb-3"><a href="#!">Business tool for your customer</a></h3>
                <p className="display-30">Exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
                <div className="meta meta-style2">
                  <ul>
                    <li><a href="#!"><FaCalendarAlt style={{marginBottom:'6px'}}/> 10 Jul, 2022</a></li>
                    <li><a href="#!"><i className="fas fa-user" /> User</a></li>
                    <li><a href="#!"><i className="fas fa-comments" /> 38</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mt-5 wow fadeInUp">
            <div className="blog-grid">
              <div className="blog-grid-img position-relative"><img alt="img" src="https://static.naewna.com/uploads/files2017/images/01-(19).jpg" /></div>
              <div className="blog-grid-text p-4">
                <h3 className="h5 mb-3"><a href="#!">Growth your business strategy</a></h3>
                <p className="display-30">Exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
                <div className="meta meta-style2">
                  <ul>
                    <li><a href="#!"><i className="fas fa-calendar-alt" /> 25 Jun, 2022</a></li>
                    <li><a href="#!"><i className="fas fa-user" /> User</a></li>
                    <li><a href="#!"><i className="fas fa-comments" /> 68</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mt-5 wow fadeInUp">
            <div className="blog-grid">
              <div className="blog-grid-img position-relative"><img alt="img" src="https://static.naewna.com/uploads/files2017/images/01-(19).jpg" /></div>
              <div className="blog-grid-text p-4">
                <h3 className="h5 mb-3"><a href="#!">Business people success master plan</a></h3>
                <p className="display-30">Exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
                <div className="meta meta-style2">
                  <ul>
                    <li><a href="#!"><i className="fas fa-calendar-alt" /> 16 May, 2022</a></li>
                    <li><a href="#!"><i className="fas fa-user" /> User</a></li>
                    <li><a href="#!"><i className="fas fa-comments" /> 58</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mt-5 wow fadeInUp">
            <div className="blog-grid">
              <div className="blog-grid-img position-relative"><img alt="img" src="https://static.naewna.com/uploads/files2017/images/01-(19).jpg" /></div>
              <div className="blog-grid-text p-4">
                <h3 className="h5 mb-3"><a href="#!">Results professional report</a></h3>
                <p className="display-30">Exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
                <div className="meta meta-style2">
                  <ul>
                    <li><a href="#!"><i className="fas fa-calendar-alt" /> 02 Apr, 2022</a></li>
                    <li><a href="#!"><i className="fas fa-user" /> User</a></li>
                    <li><a href="#!"><i className="fas fa-comments" /> 38</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mt-5 wow fadeInUp">
            <div className="blog-grid">
              <div className="blog-grid-img position-relative"><img alt="img" src="https://static.naewna.com/uploads/files2017/images/01-(19).jpg" /></div>
              <div className="blog-grid-text p-4">
                <h3 className="h5 mb-3"><a href="#!">Business strategy concept</a></h3>
                <p className="display-30">Exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
                <div className="meta meta-style2">
                  <ul>
                    <li><a href="#!"><i className="fas fa-calendar-alt" /> 25 Mar, 2022</a></li>
                    <li><a href="#!"><i className="fas fa-user" /> User</a></li>
                    <li><a href="#!"><i className="fas fa-comments" /> 68</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mt-5 wow fadeInUp">
            <div className="blog-grid">
              <div className="blog-grid-img position-relative"><img alt="img" src="https://static.naewna.com/uploads/files2017/images/01-(19).jpg" /></div>
              <div className="blog-grid-text p-4">
                <h3 className="h5 mb-3"><a href="#!">Business people meeting</a></h3>
                <p className="display-30">Exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
                <div className="meta meta-style2">
                  <ul>
                    <li><a href="#!"><i className="fas fa-calendar-alt" /> 10 Feb, 2022</a></li>
                    <li><a href="#!"><i className="fas fa-user" /> User</a></li>
                    <li><a href="#!"><i className="fas fa-comments" /> 58</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-6 wow fadeInUp">
          <div className="col-12">
            <div className="pagination text-small text-uppercase text-extra-dark-gray">
              <ul>
                <li><a href="#!"><i className="fas fa-long-arrow-alt-left me-1 d-none d-sm-inline-block" /> Prev</a></li>
                <li className="active"><a href="#!">1</a></li>
                <li><a href="#!">2</a></li>
                <li><a href="#!">3</a></li>
                <li><a href="#!">Next <i className="fas fa-long-arrow-alt-right ms-1 d-none d-sm-inline-block" /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default page
