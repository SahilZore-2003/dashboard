import React, { useState } from 'react'
import "./Sidebar.scss"
import logo from "../../assets/logo.svg"
import { GoHome } from "react-icons/go";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { HiCalendar } from "react-icons/hi2";
import { FaRegUser } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";
import { IoExitOutline } from "react-icons/io5";
const Sidebar = () => {

    const [active, setActive] = useState(2);

    return (
        <div className='sidebar'>
            <div className="logo">
                <img src={logo} alt="" />
                <div className={active == 1 && "active"}>
                    <IoSearchOutline onClick={() => setActive(1)} />
                </div>
            </div>

            <div className='main'>
                <div className='middle'>
                    <div className={active == 2 && 'active'}>
                        <GoHome onClick={() => setActive(2)} />
                    </div>
                    <div className={active == 3 && "active"}>
                        <MdOutlineCalendarMonth onClick={() => setActive(3)} />
                    </div>
                    <div className={active == 4 && "active"}>
                        <HiCalendar onClick={() => setActive(4)} />
                    </div>
                    <div className={active == 5 && "active"}>
                        <FaRegUser onClick={() => setActive(5)} />
                    </div>
                </div>
                <div className='last'>
                    <div className={active == 6 && "active"}>
                        <FaRegBell onClick={() => setActive(6)} />
                    </div>
                    <div className={active == 7 && "active"}>
                        <IoExitOutline onClick={() => setActive(7)} />
                    </div>
                </div>
            </div>






        </div>
    )
}

export default Sidebar
