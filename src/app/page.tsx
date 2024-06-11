'use client'
import './globals.css'
import HomePage from './Home/page';
import './responsive.css'
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
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
    }, 1000); // ปรับเวลาตามความต้องการของคุณ
  }, []);
  return (
    <>
      {loading ? (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      ) : (
        <>
          <HomePage />

        </>
      )}
    </>
  );
}
