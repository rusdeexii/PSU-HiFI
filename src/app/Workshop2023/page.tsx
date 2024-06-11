import React from 'react'
import Header from '../components/Header'
import './page.css'
import '../globals.css'
import Link from 'next/link'
import Footer from '../components/Footer'

function page() {
  return (
    <>
      <Header />
      <div>
        <section id="team" className="team_member section-padding mb-4">
          <div className="container">
            <div className="text-center mt-4 mb-4">
              <h3>อบรมเชิงปฏิบัติการเครือข่ายการอุดมศึกษาเพื่ออุตสาหกรรม ประจำปี พ.ศ. 2566 </h3>
              <h5 className="mt-2">Higher Education for industry Consortium Workshop (Hi-FI Workshop 2023)</h5>
            </div>
            <div className="container">
              <h6 className="text-center mb-4">วันที่ 8-10 มิถุนายน 2566 ณ A-One The Royal Cruise Hotel พัทยา จ.ชลบุรี</h6>
              <div className="row">
                <div className="col-md-12">
                  <div id="custCarousel" className="carousel slide" data-ride="carousel">
                    {/* slides */}
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img src="image/workshop5.jpg" alt="Hills" />
                      </div>
                      <div className="carousel-item">
                        <img src="image/workshop6.jpg" alt="Hills" />
                      </div>
                      <div className="carousel-item">
                        <img src="image/workshop7.jpg" alt="Hills" />
                      </div>
                      <div className="carousel-item">
                        <img src="image/workshop8.jpg" alt="Hills" />
                      </div>
                      <div className="carousel-item">
                        <img src="image/workshop9.jpg" alt="Hills" />
                      </div>
                    </div>
                    {/* Left right */}
                    <Link className="carousel-control-prev" href="#custCarousel" data-slide="prev">
                      <i className="fa-solid fa-chevron-left" />
                    </Link>
                    <Link className="carousel-control-next" href="#custCarousel" data-slide="next">
                      <i className="fa-solid fa-chevron-right" />
                    </Link>
                    {/* Thumbnails */}
                    <ol className="carousel-indicators list-inline">
                      <li className="list-inline-item active">
                        <a id="carousel-selector-0" className="selected" data-slide-to={0} data-target="#custCarousel">
                          <img src="image/workshop6.jpg" alt="workshop1" className="img-fluid" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a id="carousel-selector-1" data-slide-to={1} data-target="#custCarousel">
                          <img src="image/workshop7.jpg" alt="workshop1" className="img-fluid" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a id="carousel-selector-2" data-slide-to={2} data-target="#custCarousel">
                          <img src="image/workshop8.jpg" alt="workshop1" className="img-fluid" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a id="carousel-selector-3" data-slide-to={3} data-target="#custCarousel">
                          <img src="image/workshop9.jpg" alt="workshop1" className="img-fluid" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a id="carousel-selector-3" data-slide-to={3} data-target="#custCarousel">
                          <img src="image/workshop5.jpg" alt="workshop1" className="img-fluid" />
                        </a>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    <section>
  <div className="text-center mt-4 mb-4">
    <h3>SHOWCASE</h3>
  </div>
  <div className="container">
    <div className="row mt-n1-9">
      <div className="col-md-6 col-lg-4 mt-3">
        <div className="card team-card mt-2 mb-2">
          <img src="/image/wityakon1.jpg" className="card-img-top" alt="..." />
          <div className="card-body team-info text-center">
            <h5 className="card-title mb-1 mt-2">คุณศิวพงษ์ เลื่อนราม</h5>
            <span className="font-weight-600 text-secondary">ประธานกรรมการ<br />เครือ บิ๊ก ดรีม</span>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-4 mt-3">
        <div className="card team-card mt-2 mb-2">
          <img src="image/wityakon2.jpg" className="card-img-top" alt="..." />
          <div className="card-body team-info text-center">
            <h5 className="card-title mb-1 mt-2">คุณมาริสา โรซัม</h5>
            <span className="font-weight-600 text-secondary">กรรมการผู้บริหาร<br />บริษัท เบญญา เมดิคอล จำกัด</span>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-4 mt-3">
        <div className="card team-card mt-2 mb-2">
          <img src="image/wityakon3.jpg" className="card-img-top" alt="..." />
          <div className="card-body team-info text-center">
            <h5 className="card-title mb-1 mt-2">คุณยศพงษ์ เต็มศิริพงศ์</h5>
            <span className="font-weight-600 text-secondary">นายกสมาคม<br />ฟาร์มจระเข้ไทย</span>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-4 mt-3">
        <div className="card team-card mt-2 mb-2">
          <img src="image/wityakon4.jpg" className="card-img-top" alt="..." />
          <div className="card-body team-info text-center">
            <h5 className="card-title mb-1 mt-2">คุณธนากร ไชยนาพงศ์</h5>
            <span className="font-weight-600 text-secondary">Chief of Technology Research and Development<br />บริษัท บิทไว้ส์ (ประเทศไทย) จำกัด</span>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-4 mt-3">
        <div className="card team-card mt-2 mb-2">
          <img src="image/wityakon5.jpg" className="card-img-top" alt="..." />
          <div className="card-body team-info text-center">
            <h5 className="card-title mb-1 mt-2">คุณยศพงษ์ เต็มศิริพงศ์</h5>
            <span className="font-weight-600 text-secondary">ผู้ช่วยฝ่ายบริหารประสานงานต่างประเทศ<br />บริษัท รีพับบลิค ฟู้ดส์ จำกัด</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


        <section>
          <div className="container">
            <div className="text-center mt-4 mb-4">
              <h3>รายละเอียดกิจกรรม</h3>
            </div>
            <div className="row text-center mt-4 mb-4">
              <div className="col-lg-6">
                <ul className="list">
                  <li><i className="fa fa-caret-right mr-2" />แนะนาอาจารย์ใหม่ที่เข้าร่วม Hi-FI </li>
                  <li><i className="fa fa-caret-right mr-2" />แบ่งปันประสบการณ์โดยอาจารย์  .</li>
                  <li><i className="fa fa-caret-right mr-2" />แนะนามหาวิทยาลยที่เข้าร่วมเครือข่ายใหม่</li>
                  <li><i className="fa fa-caret-right mr-2" />เข้ารับการอบรมเชิงปฏิบัติการ
                    “How to present like a PRO” </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul className="list">
                  <li><i className="fa fa-caret-right mr-2" />Update ระบบการบริหารจัดการเครือข่าย Hi-FI (จุฬาฯ) </li>
                  <li><i className="fa fa-caret-right mr-2" /> Update รายวิชาร่วมภายในเครือข่าย Hi-FI (จุฬาฯ) </li>
                  <li><i className="fa fa-caret-right mr-2" />แบ่งปันประสบการณ์ตรงจากนิสิตนักศึกษา Hi-FIรุ่นพี่</li>
                  <li><i className="fa fa-caret-right mr-2" /> Update รายวิชาร่วมภายในเครือข่าย Hi-FI (จุฬาฯ) </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default page
