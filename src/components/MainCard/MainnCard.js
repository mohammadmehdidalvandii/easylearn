import React from 'react'
import './MainCard.css'
export default function MainCard() {
  return (
    <section className="maincard">
      <div className="container">
        <div className="maincard-wrapper">
            <div className="maincard-items">
              <div className="maincard-item">
                <img src="./images/website-design.png" alt="code" className="maincard-item-img" />
                <h3 className="maincard-item-title">طراحی سایت</h3>
              </div>
              <div className="maincard-item">
                <img src="./images/graphic-desig.png" alt="code" className="maincard-item-img" />
                <h3 className="maincard-item-title"> گرافیک</h3>
              </div>
              <div className="maincard-item">
                <img src="./images/computing-code.png" alt="code" className="maincard-item-img" />
                <h3 className="maincard-item-title">برنامه نویسی وب</h3>
              </div>
              <div className="maincard-item">
                <img src="./images/programming.png" alt="code" className="maincard-item-img" />
                <h3 className="maincard-item-title"> برنامه نویسی اندروید</h3>
              </div>
            </div>
        </div>
      </div>
    </section>
  )
}
