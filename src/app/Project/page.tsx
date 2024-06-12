'use client'
// pages/index.tsx
import { useEffect, useRef } from 'react';
import Head from 'next/head';
import { Chart, registerables } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './page.css'

Chart.register(...registerables);
Chart.register(ChartDataLabels);




const page: React.FC = () => {
  const barChartRef = useRef<Chart | null>(null);
  const doughnutChartRef = useRef<Chart | null>(null);

  useEffect(() => {
    const barCtx = document.getElementById('barChart') as HTMLCanvasElement;
    const doughnutCtx = document.getElementById('doughnutChart') as HTMLCanvasElement;

    const footer = (tooltipItems: any) => {
      let u = 0;
      let t = '';

      tooltipItems.forEach((tooltipItem: any) => {
        u += tooltipItem.parsed.x;
      });

      if (u === 0) {
        t = 'คณะที่เข้าร่วม: ' + 'วิศวกรรมศาสตร์ 4 โครงการ' + ',' + 'วิทยาศาสตร์ 6 โครงการ';
      } else if (u === 1) {
        t = 'คณะที่เข้าร่วม: ' + 'วิทยาศาสตร์ 3 โครงการ';
      } else if (u === 2) {
        t = 'คณะที่เข้าร่วม: ' + 'วิศวกรรมศาสตร์ 2 โครงการ' + ',' + 'วิทยาศาสตร์ 5 โครงการ' + ',' + 'วิทยาศาสตร์และเทคโนโลยีอุตสาหกรรม 5 โครงการ';
      } else if (u === 3) {
        t = 'คณะที่เข้าร่วม: ' + 'วิทยาศาสตร์ 2 โครงการ' + ',' + 'วิศวกรรมศาสตร์ 4 โครงการ' + ',' +
          'เภสัชศาสตร์ 1 โครงการ' + ',' + 'การแพทย์แผนไทย 1 โครงการ' + ',' + 'วิทยาศาสตร์และเทคโนโลยีอุตสาหกรรม 2 โครงการ';
      } else if (u === 4) {
        t = 'คณะที่เข้าร่วม: ' + 'วิทยาศาสตร์ 3 โครงการ' + ',' + 'วิศวกรรมศาสตร์ 1 โครงการ';
      }
      return t;
    };

    if (barChartRef.current) {
      barChartRef.current.destroy();
    }
    barChartRef.current = new Chart(barCtx, {
      type: 'bar',
      data: {
        labels: ['2563', '2564', '2565', '2566', '2567'],
        datasets: [
          {
            label: 'เป้าหมายโครงการ',
            data: [10, 10, 10, 15, 20],
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
          },
          {
            label: 'จำนวนโครงการ',
            data: [10, 3, 12, 10, 4],
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
          {
            label: 'สถานประกอบการ',
            data: [7, 2, 8, 10, 4],
            backgroundColor: 'rgba(30, 144, 255, 0.6)',
            borderColor: 'rgba(30, 144, 255, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          x: {
            title: {
              display: true,
              text: 'ปีการศึกษา',
              color: '#000',
              font: {
                size: 16,
                family: 'Sarabun, sans-serif',
              },
            },
            ticks: {
              color: '#000',
            },
          },
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'จำนวนโครงการ',
              color: '#000',
              font: {
                size: 16,
                family: 'Sarabun, sans-serif',
              },
            },
            ticks: {
              color: '#000',
            },
          },
        },
        plugins: {
          tooltip: {
            callbacks: {
              footer: footer,
            },
            bodyFont: {
              size:14,
              family: 'Sarabun, sans-serif',
            },
            titleFont: {
              size:14,
              family: 'Sarabun, sans-serif',
            },
            footerFont: {
              size:14,
              family: 'Sarabun, sans-serif',
            },
          },
          legend: {
            display: true,
            position: 'top',
            labels: {
              color: '#000',
              font: {
                family: 'Sarabun, sans-serif',
              },
            },
          },
        },
      },
    });

    if (doughnutChartRef.current) {
      doughnutChartRef.current.destroy();
    }
    doughnutChartRef.current = new Chart(doughnutCtx, {
      type: 'doughnut',
      data: {
        labels: ['เป้าหมายโครงการ', 'สถานประกอบการ', 'คณะ'],
        datasets: [{
          label: 'จำนวน',
          data: [39, 27, 5],
          backgroundColor: [
            'rgba(54, 162, 235, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(75, 192, 192, 0.6)',
          ],
          borderColor: [
            'rgba(54, 162, 235, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(75, 192, 192, 1)',
          ],
          hoverOffset: 4,
        }],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
            labels: {
              font: {
                family: 'Sarabun, sans-serif',
              },
            },
          },
          datalabels: {
            formatter: (value, ctx) => {
              let sum = 0;
              let dataArr = ctx.chart.data.datasets[0].data as number[];
              dataArr.map(data => {
                sum += data;
              });
              let percentage = (value * 100 / sum).toFixed(2) + '%';
              return percentage;
            },
            color: '#fff',
            font: {
              family: 'Sarabun, sans-serif',
              weight: 'bold',
              size: 16,
            },
          },
        },
      },
      plugins: [ChartDataLabels],
    });

    // Clean up function to destroy charts on unmount
    return () => {
      if (barChartRef.current) {
        barChartRef.current.destroy();
      }
      if (doughnutChartRef.current) {
        doughnutChartRef.current.destroy();
      }
    };
  }, []);

  return (
    <>
    <Header/>
      <Head>
        <title>สรุปผลการดำเนินงาน ปี 2563-2567</title>
      </Head>
      <section className="">
        <div className="container-fluid mb-4">
          <div className="section-title text-center mt-4">
            <h3>สรุปผลการดำเนินงาน ปี 2563-2567</h3>
          </div>
          <div className="row large-screen">
            <div className="col-lg-9 col-md-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.1s" data-wow-offset="0">
              <canvas id="barChart" className="w-100"></canvas>
            </div>
            <div className="col-lg-3 col-md-12 d-flex flex-column justify-content-center wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.1s" data-wow-offset="0">
              <canvas id="doughnutChart" className="w-100"></canvas>
            </div>
          </div>
          <div className="row small-screen">
         
    
      
        <div className="container-fluid mt-4 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.1s" data-wow-offset={0}>
          <div className="row">
            <div className="col-md-4 mx-auto">
              <div className="table-caption">
                <h4>ข้อมูลโครงการแยกตามกลุ่มลักษณะโครงการ</h4>
              </div>
              <div className="table-responsive">
                <table className="table table-bordered table-hover table-striped">
                  <thead>
                    <tr>
                      <th scope="col">ลักษณะโครงการ</th>
                      <th className='text-center' scope="col">จำนวน</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>พัฒนาผลิตภัณฑ์ใหม่</td>
                      <td className='text-center'>19</td>
                    </tr>
                    <tr>
                      <td>ปรับปรุงกระบวนการผลิต</td>
                      <td className='text-center'>8</td>
                    </tr>
                    <tr>
                      <td>Software application</td>
                      <td className='text-center'>3</td>
                    </tr>
                    <tr>
                      <td>ยางพารา</td>
                      <td className='text-center'>4</td>
                    </tr>
                    <tr>
                      <td>Health &amp; wellness</td>
                      <td className='text-center'>2</td>
                    </tr>
                    <tr>
                      <td>อื่นๆ</td>
                      <td className='text-center'>3</td>
                    </tr>
                    {/* ข้อมูลโครงการอื่นๆ ตามลำดับ */}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-md-4 mx-auto">
              <div className="table-caption">
                <h4>ข้อมูลโครงการแยกตามกลุ่มอุตสาหกรรม</h4>
              </div>
              <div className="table-responsive">
                <table className="table table-bordered table-hover table-striped">
                  <thead>
                    <tr>
                      <th scope="col">กลุ่มอุตสาหกรรม</th>
                      <th className='text-center' scope="col">จำนวน</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>อาหาร</td>
                      <td className='text-center'>8</td>
                    </tr>
                    <tr>
                      <td>ยางพารา</td>
                      <td className='text-center'>4</td>
                    </tr>
                    <tr>
                      <td>ยาสมุนไพร</td>
                      <td className='text-center'>7</td>
                    </tr>
                    <tr>
                      <td>เกษตรและสิ่งแวดล้อม</td>
                      <td className='text-center'>7</td>
                    </tr>
                    <tr>
                      <td>Health &amp; wellness</td>
                      <td className='text-center'>2</td>
                    </tr>
                    <tr>
                      <td>อื่นๆ</td>
                      <td className='text-center'>11</td>
                    </tr>
                    {/* ข้อมูลโครงการอื่นๆ ตามลำดับ */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      </section>
      
     <section>
  <h1 className="section-title text-center mt-4">Projects by Year</h1>
  <div className="container-fluid mt-4 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.1s" data-wow-offset={0}>
    <div className="row">
      <div className="col-md-10 mx-auto">
        <div className="table-caption mt-4">
          <h5>โครงการ ปี2563</h5>
        </div>
        <div className="table-responsive">
          <table className="table table-bordered table-hover table-striped">
            <thead>
              <tr>
                <th scope="col">บริษัท</th>
                <th scope="col">โจทย์ปัญหา/ความต้องการ</th>
                <th scope="col">คณะ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>บมจ.อินเทอร์เน็ต ประเทศไทย</td>
                <td>โพรโทคอลแบบเน้นเนื้อหาข้อมูลสำหรับการจัดระเบียบตัวเองในเครือข่ายเซนเซอร์ไร้สาย</td>
                <td>วิศวกรรมศาสตร์</td>
              </tr>
              <tr>
                <td>บจก.เอเอฟ อินโนเวชั่น</td>
                <td>การศึกษาความเป็นไปได้และพัฒนากระบวนการผลิตสารในกลุ่มอนุพันธ์ของออกซิเจนเป็นสารต้านเชื้อโรค </td>
                <td>วิทยาศาสตร์</td>
              </tr>
              <tr>
                <td>บจก.เอเอฟ อินโนเวชั่น</td>
                <td>การศึกษาความเป็นไปได้และพัฒนากระบวนการบำบัดไนเตรทในน้ำเสียชุมชนด้วยวิธีการไม่ใช้สารเคมี</td>
                <td>วิทยาศาสตร์</td>
              </tr>
              <tr>
                <td>บจก.ไบโอแอ็กซ์เซล</td>
                <td>การพัฒนาดินอินทรีย์ที่ได้จากการแปรรูปขยะเปียกครัวเรือนสำหรับปลูกผักสลัดในระบบกระถาง</td>
                <td>วิทยาศาสตร์</td>
              </tr>
              <tr>
                <td>บจก.ที.ซี.กรุ๊ป</td>
                <td>การพัฒนาสารตั้งต้นปุ๋ย ชีวภาพจากกากขแป้งอุตสาหกรรมน้ำยางข้น </td>
                <td>วิทยาศาสตร์</td>
              </tr>
              <tr>
                <td>บจก.พัทลุงพาราเท็กซ์</td>
                <td>การศึกษาความเป็นไปได้ในการสร้างกลุ่มเกษตรกรและพัฒนาสวนยาง</td>
                <td>วิทยาศาสตร์</td>
              </tr>
              <tr>
                <td>บจก.อีเกิ้ลดรีม</td>
                <td>นวัตกรรมผลิตภัณฑ์ธรรมชาติเพื่อสุขภาพจากปูดเบญกานี </td>
                <td>วิทยาศาสตร์</td>
              </tr>
              <tr>
                <td>บจก.วนาวัฒน์วัสดุ</td>
                <td>ระบบแนะนำสินค้าแบบการรับรู้บริบทสำหรับอีคอมเมิร์ซ</td>
                <td>วิศวกรรมศาสตร์</td>
              </tr>
              <tr>
                <td>บจก.วนาวัฒน์วัสดุ</td>
                <td>การพัฒนาระบบการจัดเก็บสินค้าหน่วยย่อย</td>
                <td>วิศวกรรมศาสตร์</td>
              </tr>
              <tr>
                <td>บจก.วนาวัฒน์วัสดุ</td>
                <td>การพัฒนาระบบการจัดการคลังสินค้า</td>
                <td>วิศวกรรมศาสตร์</td>
              </tr>
              {/* ข้อมูลโครงการอื่นๆ ตามลำดับ */}
            </tbody>
          </table>
        </div>
      </div>
      <div className="col-md-10 mx-auto">
        <div className="table-caption mt-4">
          <h5>โครงการปี 2564</h5>
        </div>
        <div className="table-responsive">
          <table className="table table-bordered table-hover table-striped">
            <thead>
              <tr>
                <th scope="col">บริษัท</th>
                <th scope="col">โจทย์ปัญหา/ความต้องการ</th>
                <th scope="col">คณะ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>บจก.เบญญา เมดดิคอล อินโนเวชั่น</td>
                <td>นวัตกรรมน้ำยาบ้วนปากจากพืชวงศ์ชมพู่</td>
                <td>วิทยาศาสตร์</td>
              </tr>
              <tr>
                <td>บจก.เบญญา เมดดิคอล อินโนเวชั่น</td>
                <td>แผ่นแปะแผลที่มีสารสกัดปูดเบญกานี</td>
                <td>วิทยาศาสตร์</td>
              </tr>
              <tr>
                <td>บจก.เอเอฟ อินโนเวชั่น</td>
                <td>การศึกษาความเป็นไปได้และพัฒนากระบวนการบำบัดไนเตรทในน้ำเสียชุมชนด้วยวิธีการไม่ใช้สารเคมี</td>
                <td>วิทยาศาสตร์</td>
              </tr>
              <tr>
                <td>บจก.ไบโอแอ็กซ์เซล</td>
                <td>Bacillus spp. เพื่อส่งเสริมการเจริญเติบโตของต้นข้าว</td>
                <td>วิทยาศาสตร์</td>
              </tr>
              {/* ข้อมูลโครงการอื่นๆ ตามลำดับ */}
            </tbody>
          </table>
        </div>
      </div>
      <div className="col-md-10 mx-auto">
        <div className="table-caption mt-4">
          <h5>โครงการปี 2565</h5>
        </div>
        <div className="table-responsive">
          <table className="table table-bordered table-hover table-striped">
            <thead>
              <tr>
                <th scope="col">บริษัท</th>
                <th scope="col">โจทย์ปัญหา/ความต้องการ</th>
                <th scope="col">คณะ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>บจก.สยามมิชลิน (หาดใหญ่) </td>
                <td>การเพิ่ม ประสิทธิภาพ WWTP dry sludge โดยใช้ไอน้ำ</td>
                <td>วิศวกรรมศาสตร์</td>
              </tr>
              <tr>
                <td>หจก.ออลอะเบาท์ คอนสตรัคชั่น</td>
                <td>ศึกษาไบโอดีเซลจากกากน้ำมันปาล์ม</td>
                <td>วิทยาศาสตร์และเทคโนโลยี</td>
              </tr>
              <tr>
                <td>บจก.เอส.ซี.พี.ดี.ซี</td>
                <td>การพัฒนาสารสกัดจากลำไยที่มีประสิทธิภาพในการต้านเชื้อไวรัส HIV</td>
                <td>วิทยาศาสตร์</td>
              </tr>
              <tr>
                <td>บจก.เค.อี.ซี.อินโนเวชั่น</td>
                <td>การพัฒนาสารสกัดจากลูกหม่อนเพื่อเป็นสารต้านเชื้อไวรัส HSV</td>
                <td>วิทยาศาสตร์</td>
              </tr>
              <tr>
                <td>บจก.แอดวานซ์ ฟาร์มา อินโนเวชั่น</td>
                <td>การพัฒนาสารสกัดจากลำไยที่มีประสิทธิภาพในการต้านเชื้อไวรัส HIV</td>
                <td>วิทยาศาสตร์</td>
              </tr>
              {/* ข้อมูลโครงการอื่นๆ ตามลำดับ */}
            </tbody>
          </table>
        </div>
      </div>
      <div className="col-md-10 mx-auto">
        <div className="table-caption mt-4">
          <h5>โครงการปี 2566</h5>
        </div>
        <div className="table-responsive">
          <table className="table table-bordered table-hover table-striped">
            <thead>
              <tr>
                <th scope="col">บริษัท</th>
                <th scope="col">โจทย์ปัญหา/ความต้องการ</th>
                <th scope="col">คณะ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>บจก.ไบโอแอ็กเซลล์</td>
                <td>ผลิตภัณฑ์กาแฟหมักจุลินทรีย์</td>
                <td>วิทยาศาสตร์</td>
              </tr>
              <tr>
                <td>บจก.ไบโอแอ็กเซลล์</td>
                <td>การพัฒนาผลิตภัณฑ์สมุนไพรบำรุงสุขภาพจากกากกาแฟ</td>
                <td>วิทยาศาสตร์</td>
              </tr>
              <tr>
                <td>บจก.สยามรักษ์โลก</td>
                <td>การพัฒนาวัสดุจากธรรมชาติทดแทนไม้ยางพารา</td>
                <td>วิทยาศาสตร์</td>
              </tr>
              <tr>
                <td>บจก.แอดวานซ์ ฟาร์มา อินโนเวชั่น</td>
                <td>การพัฒนาสารสกัดจากใบหม่อนเพื่อเป็นสารต้านเชื้อไวรัส COVID-19</td>
                <td>วิทยาศาสตร์</td>
              </tr>
              {/* ข้อมูลโครงการอื่นๆ ตามลำดับ */}
            </tbody>
          </table>
        </div>
      </div>
      <div className="col-md-10 mx-auto">
        <div className="table-caption mt-4">
          <h5>โครงการปี 2567</h5>
        </div>
        <div className="table-responsive">
          <table className="table table-bordered table-hover table-striped">
            <thead>
              <tr>
                <th scope="col">บริษัท</th>
                <th scope="col">โจทย์ปัญหา/ความต้องการ</th>
                <th scope="col">คณะ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>บจก.สยามรักษ์โลก</td>
                <td>พัฒนาผลิตภัณฑ์นวัตกรรมผนังดิน ผสมใยธรรมชาติ</td>
                <td>วิทยาศาสตร์</td>
              </tr>
              <tr>
                <td>บจก.เค.อี.ซี.อินโนเวชั่น</td>
                <td>การพัฒนาผลิตภัณฑ์จากใยแมงมุมเพื่อใช้ในอุตสาหกรรมสิ่งทอ</td>
                <td>วิทยาศาสตร์</td>
              </tr>
              <tr>
                <td>บจก.แอดวานซ์ ฟาร์มา อินโนเวชั่น</td>
                <td>การพัฒนาผลิตภัณฑ์จากสมุนไพรท้องถิ่นเพื่อใช้ในอุตสาหกรรมยา</td>
                <td>วิทยาศาสตร์</td>
              </tr>
              <tr>
                <td>บจก.ไบโอแอ็กเซลล์</td>
                <td>ผลิตภัณฑ์เสริมอาหารจากจุลินทรีย์ในน้ำพุร้อน</td>
                <td>วิทยาศาสตร์</td>
              </tr>
              <tr>
                <td>บจก.สยามรักษ์โลก</td>
                <td>การพัฒนาผลิตภัณฑ์จากเส้นใยธรรมชาติเพื่อใช้ในอุตสาหกรรมสิ่งทอ</td>
                <td>วิทยาศาสตร์</td>
              </tr>
              <tr>
                <td>บจก.เอส.ซี.พี.ดี.ซี</td>
                <td>การพัฒนาผลิตภัณฑ์จากข้าวสาลีเพื่อใช้ในอุตสาหกรรมอาหาร</td>
                <td>วิทยาศาสตร์</td>
              </tr>
              <tr>
                <td>บจก.เอส.ซี.พี.ดี.ซี</td>
                <td>การพัฒนาผลิตภัณฑ์จากใยแมงมุมเพื่อใช้ในอุตสาหกรรมสิ่งทอ</td>
                <td>วิทยาศาสตร์</td>
              </tr>
              <tr>
                <td>บจก.สยามรักษ์โลก</td>
                <td>การพัฒนาผลิตภัณฑ์จากเส้นใยธรรมชาติเพื่อใช้ในอุตสาหกรรมสิ่งทอ</td>
                <td>วิทยาศาสตร์</td>
              </tr>
              {/* ข้อมูลโครงการอื่นๆ ตามลำดับ */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</section>

      <Footer/>
    </>
  );
};

export default page;
