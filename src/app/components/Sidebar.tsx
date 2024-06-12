import React from 'react';
import { FaHome } from 'react-icons/fa';
import { IoLogOut } from "react-icons/io5";
import './index.css'
import Link from 'next/link';

const Sidebar: React.FC = () => {
    return (
        <div className="sidebar">
            <div className="logo">
                <img src="/image/PSU-logo.png" alt="PSU Logo" />
            </div>
            <ul>
                <li>
                    <Link href='/Admin'>
                    <FaHome />
                    <span>หน้าหลัก</span>
                    </Link>
                </li>
                <li>
                    <Link href='/Admin'>
                    <IoLogOut />
                    <span>ออกจากระบบ</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
