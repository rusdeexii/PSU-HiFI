'use client'
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import '../globals.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  Bs1CircleFill, Bs2CircleFill, Bs3CircleFill,
  Bs4CircleFill, Bs5CircleFill, Bs6CircleFill
} from "react-icons/bs";

function Page() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1500, // ระยะเวลาในการแสดงอนิเมชัน
      delay: 100,     // ความล่าช้าในการเริ่มต้นแอนิเมชัน
      offset: 0,      // ระยะห่างจากจุดเริ่มต้นในการเริ่มต้นแอนิเมชัน
    });

    // Simulate a loading delay
    setTimeout(() => {
      setLoading(false);
    }, 200); // ปรับเวลาตามความต้องการของคุณ
  }, []);

  return (
    <>
      {loading ? (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      ) : (
        <>
          <Header />
          <div>
            <div className='container'>
              <div className="section-title text-center mt-4">
                <h3>ที่มาและจุดเริ่มต้นของ HiFI</h3>
                <p>โครงการ PSU Hi-FI เป็นโครงการพัฒนากำลังคนระดับปริญญาโทร่วมกับภาคอุตสาหกรรม
                  เพื่อแก้ปัญหาการขาดแคลนบุคลากรที่พร้อมปฏิบัติงาน โดยใช้หลักการ demand driven
                  จากโจทย์ความต้องการของอุตสาหกรรม เป็นเป้าหมายร่วมในการดำเนินโครงการ โดยภาครัฐร่วมสนับสนุนค่าใช้จ่ายในโครงการ
                  ซึ่งจะเป็นการยกระดับความสามารถในการแข่งขันของประเทศได้อย่างเป็นรูปธรรม โครงการการอุดมศึกษาเพื่ออุตสาหกรรม
                  (Higher Education for Industry: Hi-FI)
                  จึงถูกพัฒนาขึ้นจากปัญหาการขาดบุคลากรของภาคอุตสาหกรรมในระดับที่พร้อมปฏิบัติงานได้
                  โดยที่สถานศึกษามีส่วนร่วมในการพัฒนาทั้งด้านบุคลากรและการร่วมสร้างงานวิจัยที่มีศักยภาพในการใช้ประโยชน์เชิงพาณิชย์
                  เรามาดู Timeline การก่อตั้ง PSU-HiFi</p>
              </div>
            </div>
            <div className="container mb-4">
              <div className="row">
                <div className="col-md-12">
                  <div className="main-timeline">
                    <div className="timeline" data-aos="fade-up">
                      <a href="#" className="timeline-content">
                        <div className="timeline-icon">
                          <Bs1CircleFill style={{ marginBottom: '10px' }} />
                        </div>
                        <div className="timeline-year"> 2560 </div>
                        <div className="inner-content">
                          <h3 className="title">โครงการนำร่องและการพัฒนาโมเดล</h3>
                          <p className="description">คณะวิทยาศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย (จุฬาฯ) ร่วมกับ สอวช.
                            ส่งนิสิต ป.โท
                            เข้าร่วมโครงการนำร่อง WiL (3 คน) และ RDI (8 คน)</p>
                        </div>
                      </a>
                    </div>
                    <div className="timeline" data-aos="fade-up" data-aos-delay="200">
                      <a href="#" className="timeline-content">
                        <div className="timeline-icon">
                          <Bs2CircleFill style={{ marginBottom: '10px' }} />
                        </div>
                        <div className="timeline-year"> 2561 </div>
                        <div className="inner-content">
                          <h3 className="title">พัฒนาสู่โครงการ Sci-FI</h3>
                          <p className="description">จุฬาฯ สอวช. และ สวทช.
                            เห็นชอบร่วมกันในการพัฒนาบัณฑิตศึกษาร่วมกับภาคอุตสาหกรรม
                            พัฒนาสู่โครงการวิทยาศาสตร์เพื่ออุตสาหกรรม (Science for Industry, Sci-FI)
                            โดยการพัฒนาหลักสูตรใหม่ ระดับปริญญาโท
                            ร่วมกับกลไกการสนับสนุนภาคอุตสาหกรรมยกระดับการพัฒนานวัตกรรมในสถานประกอบการ
                          </p>
                        </div>
                      </a>
                    </div>
                    <div className="timeline" data-aos="fade-up" data-aos-delay="300">
                      <a href="#" className="timeline-content">
                        <div className="timeline-icon">
                          <Bs3CircleFill style={{ marginBottom: '10px' }} />
                        </div>
                        <div className="timeline-year"> 2563 </div>
                        <div className="inner-content">
                          <h3 className="title">การพัฒนาเครือข่ายการอุดมศึกษาเพื่ออุตสาหกรรม (Hi-FI Consortium) </h3>
                          <p className="description">หารือกับมหาวิทยาลัยที่สนใจเพิ่มเติม
                            และพัฒนาเครือข่ายการอุดมศึกษาเพื่ออุตสาหกรรม (Higher Education for Industry
                            Consortium, Hi-FI Consortium)
                            เพื่อการผลิตบัณฑิตร่วมกับภาคอุตสาหกรรมโดยใช้โจทย์ความต้องการเป็นจุดเริ่มต้น
                            โดยมีสถาบันอุดมศึกษา 4 แห่ง เข้าร่วม ประกอบด้วย ม.เชียงใหม่ ม.ขอนแก่น ม.สงขลานครินท์
                            และ ม.ศรีนครินทร์วิโรฒ</p>
                        </div>
                      </a>
                    </div>
                    <div className="timeline" data-aos="fade-up" data-aos-delay="400">
                      <a href="#" className="timeline-content">
                        <div className="timeline-icon">
                          <Bs4CircleFill style={{ marginBottom: '10px' }} />
                        </div>
                        <div className="timeline-year"> 2563 </div>
                        <div className="inner-content">
                          <h3 className="title">ได้รับงบประมาณสนับสนุน</h3>
                          <p className="description">ได้รับงบประมาณสนับสนุนปี 2563 จาก บพค.
                            ภายใต้โปรแกรมที่ 1 สร้างระบบผลิตและพัฒนากำลังคนให้มีคุณภาพ
                          </p>
                        </div>
                      </a>
                    </div>
                    <div className="timeline" data-aos="fade-up" data-aos-delay="500">
                      <a href="#" className="timeline-content">
                        <div className="timeline-icon">
                          <Bs5CircleFill style={{ marginBottom: '10px' }} />
                        </div>
                        <div className="timeline-year"> 2564</div>
                        <div className="inner-content">
                          <h3 className="title">ได้รับงบประมาณสนับสนุนจาก reinventing university</h3>
                          <p className="description">ภายใต้แผนงานย่อย
                            “การส่งเสริมและพัฒนาบุคลากรผ่านการเรียนรู้ปฏิบัติจริง
                            (Experiential Learning)”สำนักงานปลัดกระทรวง กระทรวงการอุดมศึกษา วิทยาศาสตร์
                            วิจัยและนวัตกรรม”</p>
                        </div>
                      </a>
                    </div>
                    <div className="timeline" data-aos="fade-up" data-aos-delay="600">
                      <a href="#" className="timeline-content">
                        <div className="timeline-icon">
                          <Bs6CircleFill style={{ marginBottom: '10px' }} />
                        </div>
                        <div className="timeline-year"> 2564</div>
                        <div className="inner-content">
                          <h3 className="title">จัดตั้งศูนย์ประสานงาน PSU Hi-FI ภายใต้อุทยานวิทยาศาสตร์
                            มหาวิทยาลัยสงขลานครินทร์</h3>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Page;
