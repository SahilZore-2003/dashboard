import React from 'react'
import "./User.scss"
import user from "../../assets/user.png"
import { FaCaretDown } from "react-icons/fa";

const User = () => {
    return (
        <div className='user'>
            <div className="top">
                <img src={user} alt="" />
                <div>
                    <h3>Hi, Sahil</h3>
                    <p>Welcome Back.</p>
                </div>
            </div>
            <div className='middle'>
                <p>Today</p>
                <h2>$ 19,000</h2>
                <small>account balance</small>
                <div className='flex'>
                    <div>
                        <h4>$100</h4>
                        <small>year to date contribution</small>
                    </div>
                    <div>
                        <h3>$ 1800</h3>
                        <small>Total Amount</small>
                    </div>
                </div>
                <div>
                    <button>I want to <FaCaretDown /></button>
                </div>
            </div>
            <div className='last'>
                <h3>Recent Transactions</h3>
                <div className='flex'>
                    <div>
                        <small>20-09-2024</small> <br />
                        <b>Widraw Transfer to bank</b>
                    </div>
                    <div>
                        <small>20-09-2024</small> <br />
                        <b>Widraw Transfer to bank</b>
                    </div>
                    <div>
                        <small>20-09-2024</small> <br />
                        <b>Widraw Transfer to bank</b>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default User
