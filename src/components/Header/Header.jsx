import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
export default function Header() {
  return (
    <section className="header">
        <div className="container">
            <div className="header-wrapper">
                <div className="header-content">
                    <h1 className="header-content-title">کسب مهارت های ویژه بازار کار</h1>
                    <p className="header-content-description">کسب و کار شما می‌تواند رشد کند. درآمد شما می‌تواند چند برابر شود. فقط کافی است مسیر درست را بشناسید. کافی است مشتریان خود را در زمان درست، مکان درست و به روش درست هدف قرار دهید. ما در این مسیر همراه شما هستیم.</p>
                    <div className="header-content-buttons">
                        <Link className="header-content-btn header-content-btn-start">شروع کنید</Link>
                        <Link className="header-content-btn header-content-btn-course">دوره آموزشی</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
