import React from 'react'
import "../globals.css";
import "../responsive.css"
import Image from 'next/image';
import logo from '/public/image/PSU-Logo.png'
import { FaFacebook } from "react-icons/fa";
import Link from 'next/link';
import '../globals.css'
import '../responsive.css'
import { RiArrowDropDownLine } from "react-icons/ri";
import { BsFillTelephoneInboundFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

function Header() {
  return (

     <header className="header">
  <div className="topbar">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-5 col-12">
          <ul className="top-link">
            <li><a href="#">HiFl-Science Park PSU</a></li>
          </ul>
        </div>
        <div className="col-lg-6 col-md-7 col-12">
          <ul className="top-contact">
            <li><BsFillTelephoneInboundFill style={{marginRight:'6px',color:'#1A76D1'}}/>074-8595212</li>
            <li><MdEmail style={{marginRight:'6px',color:'#1A76D1'}}/><Link href="mailto:hifipsu@gmail.com">Hifipsu@gmail.com</Link></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div className="header-inner">
    <div className="container">
      <div className="inner">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-12">
            <div className="logo">
              <Link href="/Home "><Image src={logo} alt="logo" priority={false} /></Link>
            </div>
            <div className="m  obile-nav" />
          </div>
          <div className="col-lg-7 col-md-9 col-12">
            {/* Main Menu */}
            <div className="main-menu">
              <nav className="navigation">
                <ul className="nav menu">
                  <li><Link href="/Home">หน้าหลัก</Link>
                  </li>
                  <li><Link href="/AboutMe">เกี่ยวกับเรา</Link></li>
                  <li><Link href="/Team">บุคลากร</Link></li>
                  <li><Link href="/Project">ข้อมูลโครงการ</Link>
                  </li>
                  <li><Link href="#" className='mr-4'>กิจกรรม HiFI<RiArrowDropDownLine /></Link>
                    <ul className="dropdown">
                      <li><Link href="/Workshop2022">อบรมเชิงปฎิบัติการ 2565</Link></li>
                      <li><Link href="/Workshop2023">อบรมเชิงปฎิบัติการ 2566</Link></li>
                      <li><Link href="/Meeting2022">ประชุมวิชาการ 2565</Link></li>
                      <li><Link href="/GranOpening">PSU Hi-FI Grand Opening</Link></li>
                    </ul>
                  </li>
                  <li><Link href="/News">ข่าวสาร</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="col-lg-2 col-12">
            <div className="get-quote">
              <Link href="https://www.facebook.com/HiFIPSU" className="btn"><FaFacebook style={{marginRight:'6px', marginBottom:'4px'}}/> Hi-FI PSU </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>

	

  )
}

export default Header
