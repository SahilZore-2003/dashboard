import React, { useState } from 'react'
import "./Aside.scss"

const Aside = () => {
    const [con, setCon] = useState(12);
    const [age, setAge] = useState(60);
    return (
        <aside>
            <h3>Retiremental Statergy</h3>
            <div className="sliders">
                <div>
                    <small>Employee Contribution</small>
                    <div>
                        <input onChange={(e) => setCon(e.target.value)} type="range" min={0} max={100} value={con} />
                        <label htmlFor="">{con}%</label>
                    </div>
                </div>
                <div>
                    <small>Retirement Age</small>
                    <div>
                        <input onChange={(e) => setAge(e.target.value)} type="range" min={40} max={80} value={age} />
                        <label htmlFor="">{age}</label>
                    </div>
                </div>
            </div>

            <div className='percentage'>
                <p>
                    <small>Employee Contribution</small>
                    <small>8.4%</small>
                </p>
                <p>
                    <small>Intrest Rate </small>
                    <small>5%</small>
                </p>

                <button className='center'>Update</button>
                <a href="#" className="center">View Help Docs ?</a>
            </div>
            <div className='bottom'>
                <small>are you consulting a <b>Housing advance ?</b> </small>
                <small>Limited time reduce intrest</small>
                <a href="#">Learn More</a>
            </div>
        </aside>
    )
}

export default Aside
