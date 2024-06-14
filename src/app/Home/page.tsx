'use client'
import React, { useState, useEffect, useRef } from 'react';
import '../globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../responsive.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './page.css';
import { FaCirclePlay } from "react-icons/fa6";
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperCore from 'swiper/core'
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/css/modal-video.min.css';

SwiperCore.use([Navigation, Pagination, Autoplay]);

function HomePage() {
  const [loading, setLoading] = useState(true);
  const funFactsRef = useRef<HTMLDivElement>(null);
  const additionalFunFactsRef = useRef<HTMLDivElement>(null);
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 5000, // ระยะเวลาในการแสดงอนิเมชัน
      delay: 150,     // ความล่าช้าในการเริ่มต้นแอนิเมชัน
      offset: 0,      // ระยะห่างจากจุดเริ่มต้นในการเริ่มต้นแอนิเมชัน
    });

    // Simulate a loading delay
    setTimeout(() => {
      setLoading(false);
    }, 1000); // ปรับเวลาตามความต้องการของคุณ

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startCounting(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    if (funFactsRef.current) observer.observe(funFactsRef.current);
    if (additionalFunFactsRef.current) observer.observe(additionalFunFactsRef.current);

    return () => observer.disconnect();
  }, []);

  const startCounting = (element: Element) => {
    const counters = element.querySelectorAll<HTMLSpanElement>('.counter');
    const speed = 500; // ความเร็วในการเพิ่มค่า เพิ่มค่านี้เพื่อให้การนับช้าลง

    counters.forEach((counter) => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-target')!;
        const count = +counter.innerText;
        const increment = target / speed;

        if (count < target) {
          counter.innerText = Math.ceil(count + increment).toString();
          setTimeout(updateCount, 50); // เพิ่มระยะเวลา delay เพื่อให้การนับช้าลง
        } else {
          counter.innerText = target.toString();
        }
      };

      updateCount();
    });
  };

  return (
    <>
      <Header />
      <div>
        {/* Slider Area */}
        <div className="slider">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            loop
          >
            <SwiperSlide>
              <div className="single-slider web27">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-7">
                      {/* เนื้อหาของรูปภาพที่ 1 */}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-slider home1">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-7">
                      {/* เนื้อหาของรูปภาพที่ 2 */}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="single-slider logo-video">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-7">
                      {/* เนื้อหาของรูปภาพที่ 3 */}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      
        {/*/ End Slider Area */}
        {/* Clients Section */}
        <section id="clients" className="clients section">
          <div className="container" data-aos="zoom-in">
            <div className="section-title text-center mb-4">
              <h2>เครือข่ายมหาวิทยาลัย 2024</h2>
              <p>โครงการเครือข่ายการอุดมศึกษาเพื่ออุตสาหกรรม (Hi-FI) </p>
            </div>
            <Swiper
              spaceBetween={50}
              slidesPerView={5} // ปรับ slidesPerView ตามที่ต้องการ
              loop
              direction="horizontal" // เพิ่มคุณสมบัติแสดงแนวนอน
              autoplay={{ delay: 3000, disableOnInteraction: false }}
            >
              <SwiperSlide><img src="/image/cmu.png" className="img-fluid" alt="cmu" /></SwiperSlide>
              <SwiperSlide><img src="/image/cu.png" className="img-fluid" alt="cu" /></SwiperSlide>
              <SwiperSlide><img src="/image/kku.png" className="img-fluid" alt="kku" /></SwiperSlide>
              <SwiperSlide><img src="/image/KMITL.png" className="img-fluid" alt="kmitl" /></SwiperSlide>
              <SwiperSlide><img src="/image/KMUTT.png" className="img-fluid" alt="kmutt" /></SwiperSlide>
              <SwiperSlide><img src="/image/KU.png" className="img-fluid" alt="ku" /></SwiperSlide>
              <SwiperSlide><img src="/image/psu.png" className="img-fluid" alt="psu" /></SwiperSlide>
              <SwiperSlide><img src="/image/sut.jpg" className="img-fluid" alt="sut" /></SwiperSlide>
              <SwiperSlide><img src="/image/swu.png" className="img-fluid" alt="swu" /></SwiperSlide>
              <SwiperSlide><img src="/image/TU.png" className="img-fluid" alt="tu" /></SwiperSlide>
              <SwiperSlide><img src="/image/UP.png" className="img-fluid" alt="up" /></SwiperSlide>
              <SwiperSlide><img src="/image/UTCC.png" className="img-fluid" alt="utcc" /></SwiperSlide>
            </Swiper>
          </div>
        </section>
        {/* Start Fun-facts */}
        <div id="fun-facts" className="fun-facts section" ref={additionalFunFactsRef}>
          <div className="section-title text-center mb-4">
            <h2>ผลการดำเนินงาน ในปี 2564-2567</h2>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-12">
                <div className="single-fun">
                  <i className="fa-solid fa-school"></i>
                  <div className="content">
                    <span className="counter" data-target="5">0</span>
                    <p>ปีการศึกษา</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="single-fun">
                  <i className="fa-solid fa-diagram-project"></i>
                  <div className="content">
                    <span className="counter" data-target="39">0</span>
                    <p>โครงการ</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="single-fun">
                  <i className="fa-solid fa-business-time"></i>
                  <div className="content">
                    <span className="counter" data-target="27">0</span>
                    <p>สถานประกอบการ</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="single-fun">
                  <i className="fa-solid fa-school"></i>
                  <div className="content">
                    <span className="counter" data-target="5">0</span>
                    <p>คณะ</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  <section className="why-choose section">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-title text-center mt-4 mb-4">
            <h2>มาทำความรู้จักกับ HiFI PSU  <i className="fa-solid fa-magnifying-glass" /></h2>
          </div>
        </div>
      </div>
      <div className="row mt-4 mb-4">
        <div className="col-lg-6 col-12">
          {/* Start Choose Left */}
          <div className="choose-left">
            <h3>Who We Are</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra antege vel est
              lobortis, a commodo magna rhoncus. In quis nisi non emet quam pharetra commodo. </p>
            <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul className="list">
                  <li><i className="fa fa-caret-right" />นวัตกรรม </li>
                  <li><i className="fa fa-caret-right" />ธุรกิจ</li>
                  <li><i className="fa fa-caret-right" />ทุนสนับสนุน</li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul className="list">
                  <li><i className="fa fa-caret-right" />บุคลากรคุณภาพ </li>
                  <li><i className="fa fa-caret-right" />คำปรึกษา</li>
                  <li><i className="fa fa-caret-right" />ความสำเร็จ</li>
                </ul>
              </div>
            </div>
          </div>
          {/* End Choose Left */}
        </div>
        <div className="col-lg-6 col-12">
      {/* Start Choose Rights */}
      <div className="choose-right">
        <div className="video-image">
          {/* Video Animation */}
          <div className="promo-video">
            <div className="waves-block">
              <div className="waves wave-1" />
              <div className="waves wave-2" />
              <div className="waves wave-3" />
            </div>
          </div>
          {/*/ End Video Animation */}
          <button className="video video-popup mfp-iframe "  aria-label="Play video" onClick={() => setOpen(true) }>
            <FaCirclePlay style={{marginBottom:'10px'}}/>
          </button>
        </div>
      </div>
      {/* End Choose Rights */}

      <ModalVideo channel="youtube" autoplay isOpen={isOpen} videoId="Fbe8UYcbr4M" onClose={() => setOpen(false)} />
    </div>
    </div>
    </div>
    
  </section>
  {/*/ End Why choose */}
  {/* Start Fun-facts */}
  
  {/*/ End Fun-facts */}
  {/* Start Why choose */}
  {/* Start Call to action */}
 {/* Start Call to action */}
<section className="section mt-4 mb-4">
  <div className="container" data-aos="zoom-in">
    <div className="row">
      <div className="col-6 text-center mt-4">
        <h3>การพัฒนาเครือข่ายการอุดมศึกษาเพื่ออุตสาหกรรม (Hi-FI Consortium)</h3>
        <div className="mt-4">
          <p>ความร่วมมือและความต่อเนื่องกับภาคอุตสาหกรรมอย่างเป็นรูปธรรม โครงการการอุดมศึกษาเพื่ออุตสาหกรรม (Higher Education for Industry: Hi-FI) จึงถูกพัฒนาขึ้นจากปัญหาการขาดบุคลากรของภาคอุตสาหกรรมในระดับที่พร้อมปฏิบัติงานได้ โดยที่สถานศึกษามีส่วนร่วมในการพัฒนาทั้งด้านบุคลากรและการร่วมสร้างงานวิจัยที่มีศักยภาพในการใช้ประโยชน์เชิงพาณิชย์และสร้างทรัพย์สินทางปัญญาให้แก่บริษัทและมหาวิทยาลัยร่วมกัน
          </p>
        </div>
      </div>
      <div className="col-6 swiper wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.1s" data-wow-offset={0}>
        <img src="image/map.png" alt="map" />
      </div>
    </div>
  </div>
</section>


  <section>
    {/*/ End Call to action */}
    {/* End Blog Area */}
    {/* Start Contact Us */}
    <section className="contact-us section">
      <div className="container">
        <div className="contact-info">
          <div className="row text-center">
            {/* single-info */}
            <div className="col-lg-6 col-12 ">
              <div className="single-info">
                <i className="icofont icofont-ui-call" />
                <div className="content">
                  <h3>สอบถามเพิ่มเติม</h3>
                  <p>Hifipsu@gmail.com</p>
                  <p>FaceBook: PSU-HiFI</p>
                </div>
              </div>
            </div>
            {/*/End single-info */}
            {/* single-info */}

            <div className="col-lg-6 col-12 ">
              <div className="single-info">
                <i className="icofont icofont-wall-clock" />
                <div className="content text-center">
                  <h3>สามารถเข้ามาสอบถามได้ในวัน-เวลาราชการ</h3>
                  <p>จันทร์ - ศุกร์ เวลา 08.30 - 16.30</p>
                  <p>อุทยานวิทยาศาสตร์ ม.อ.</p>
                  
                </div>
              </div>
            </div>
            {/*/End single-info */}
          </div>
        </div>
      </div>
    </section>
    {/*/ End Contact Us */}
  </section></div>
    <Footer/>
  </>

  )
}

export default HomePage
