'use client'
// pages/index.tsx
import { useEffect, useRef } from 'react';
import '../globals.css';
import './page.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../components/Header';
import Link from 'next/link';


const page = () => {
  const funFactsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    AOS.init({
      duration: 5000, // ระยะเวลาในการแสดงอนิเมชัน
      delay: 150,     // ความล่าช้าในการเริ่มต้นแอนิเมชัน
      offset: 0,      // ระยะห่างจากจุดเริ่มต้นในการเริ่มต้นแอนิเมชัน
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startCounting();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    if (funFactsRef.current) {
      observer.observe(funFactsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const startCounting = () => {
    const counters = document.querySelectorAll<HTMLSpanElement>('.custom-counter');
    const speed = 30; // ความเร็วในการเพิ่มค่า เพิ่มค่านี้เพื่อให้การนับช้าลง

    counters.forEach((counter) => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-count')!;
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
    <section id="team" className="team_member section-padding mb-4">
  <div className="container">
    <div className="text-center mt-4 mb-4">
      <h3>อบรมเชิงปฏิบัติการเครือข่ายการอุดมศึกษาเพื่ออุตสาหกรรม ประจำปี พ.ศ. 2565 </h3>
      <h5 className="mt-2">Higher Education for industry Consortium Workshop (Hi-FI Workshop 2022)</h5>
    </div>
    <div className="container">
      <h6 className="text-center mb-4">วันที่ 10-12 มกราคม 2565 ณ โรงแรมพูลแมน พัทยา จี จังหวัดชลบุรี</h6>
      <div className="row">
        <div className="col-md-12 ">
          <div id="custCarousel" className="carousel slide" data-ride="carousel">
            {/* slides */}
            <div className="carousel-inner ">
              <div className="carousel-item active">
                <img src="image/workshop10.jpg" alt="Hills" />
              </div>
              <div className="carousel-item">
                <img src="image/worksho11.jpg" alt="Hills" />
              </div>
              <div className="carousel-item">
                <img src="image/workshop12.jpg" alt="Hills" />
              </div>
              <div className="carousel-item">
                <img src="image/workshop13.jpg" alt="Hills" />
              </div>
              <div className="carousel-item">
                <img src="image/worksho12.jpg" alt="Hills" />
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
                  <img src="image/workshop12.jpg" alt="workshop1" className="img-fluid" />
                </a>
              </li>
              <li className="list-inline-item">
                <a id="carousel-selector-1" data-slide-to={1} data-target="#custCarousel">
                  <img src="image/workshop12.jpg" alt="workshop1" className="img-fluid" />
                </a>
              </li>
              <li className="list-inline-item">
                <a id="carousel-selector-2" data-slide-to={2} data-target="#custCarousel">
                  <img src="image/workshop13.jpg" alt="workshop1" className="img-fluid" />
                </a>
              </li>
              <li className="list-inline-item">
                <a id="carousel-selector-3" data-slide-to={3} data-target="#custCarousel">
                  <img src="image/worksho11.jpg" alt="workshop1" className="img-fluid" />
                </a>
              </li>
              <li className="list-inline-item">
                <a id="carousel-selector-3" data-slide-to={3} data-target="#custCarousel">
                  <img src="image/workshop13.jpg" alt="workshop1" className="img-fluid" />
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    <div>
   
      <main>
        <div id="custom-fun-facts" className="custom-fun-facts section" ref={funFactsRef}>
          <div className="custom-section-title">
            <h2>ผู้เข้าร่วม</h2>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-12">
                <div className="custom-single-fun">
                  <div className="custom-content">
                    <span className="custom-counter" data-count="50">0</span>
                    <p className="mt-2">นิสิต / นักศึกษา</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="custom-single-fun">
                  <div className="custom-content">
                    <span className="custom-counter" data-count="70">0</span>
                    <p className="mt-2">ผู้บริหาร / คณาจารย์</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                <div className="custom-single-fun">
                  <div className="custom-content">
                    <span className="custom-counter" data-count="7">0</span>
                    <p className="mt-2">มหาวิทยาลัยในเครือ Hi-FI</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer>
        {/* Add your footer component here */}
      </footer>
    </div>
    </>
  );
};

export default page;
