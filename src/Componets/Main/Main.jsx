import React from 'react'
import "./Main.scss"
import BarChart from '../BarChart/BarChart'
import { FaAngleDown } from "react-icons/fa";

const Main = () => {

    const progress = {
        average: (78 / 100) * 360,
        top: (86 / 100) * 360,
        me: (82 / 100) * 360
    }

    return (
        <main>
            <h3>Retirement Income</h3>
            <h2>Starting Year 2056</h2>

            <div className="goals">
                <div>
                    <h1>$30000</h1>
                    <small>my goal</small>
                </div>
                <div>
                    <h1>59%</h1>
                    <small>goal achived</small>
                </div>
                <div>
                    <h1>$300</h1>
                    <small>Est. monthly income</small>
                </div>
            </div>

            <div className="chart">
                <h3>Contributions Overtime</h3>
                <BarChart />
            </div>
            <div className='bottom'>
                <h3>How do i compare to my peers?</h3>
                <small>this number represent current goal achivments.</small>
                <div className='progress'>
                    <div className="left">
                        <small><b>Age:</b>under 30 <FaAngleDown /></small> <br />
                        <small><b>Salary:</b>k20-k30 <FaAngleDown /></small> <br />
                        <small><b>Gender:</b>Male <FaAngleDown /></small>
                    </div>
                    <div className="right">
                        <div className='circle' style={{ background: `conic-gradient(#29d7ac ${progress.average}deg, #fff 0deg)` }}>
                            <span>{Math.floor(progress.average / 360 * 100)}%</span>
                            <small>Average</small>
                        </div>
                        <div className='circle' style={{ background: `conic-gradient(#29d7ac ${progress.top}deg, #fff 0deg)` }}>
                            <span>{Math.floor(progress.top / 360 * 100)}%</span>
                            <small>top</small>

                        </div>
                        <div className='circle' style={{ background: `conic-gradient(#29d7ac ${progress.me}deg, #fff 0deg)` }}>
                            <span>{Math.floor(progress.me / 360 * 100)}%</span>
                            <small>me</small>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    )
}

export default Main
