import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './page.css'

function page() {
  return (
    <>
    <Header/>
   <div>
  <section id="team" className="team_member section-padding mb-4">
    <div className="container">
      <div className="text-center mt-4 mb-4">
        <h3>การประชุมวิชาการ ปี 2565 </h3>
      </div>
      <div className="container">
        <h6 className="text-center mb-4">วันที่ 28-29 มีนาคม 2565  ดำเนินการโดย	คณะวิศวกรรมศาสตร์ มหาวิทยาลัยขอนแก่น</h6>
      </div>
    </div>
    <div className="container-fluid">
      <img src="image/meet65.png" alt="meet65" />
    </div>
  </section>
</div>
    <Footer />
    </>

  )
}

export default page
