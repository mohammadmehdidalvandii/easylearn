import React from 'react'
import './NavDown.css'
import { Link } from 'react-router-dom'
export default function NavDown() {
  return (
    <section className="navdown">
        <div className="container">
            <div className="navdown-wrapper">
                <ul className="navdown-menus">
                    <li className="navdown-menu">
                        <Link to='/' className="navdown-menu-link">خانه</Link>
                    </li>
                    <li className="navdown-menu">
                        <a href='#Course' className="navdown-menu-link">دوره اموزشی</a>
                    </li>
                    <li className="navdown-menu">
                        <a href='#webLog' className="navdown-menu-link">بلاگ</a>
                    </li>
                    <li className="navdown-menu">
                        <Link to='/ContactUs' className="navdown-menu-link">تماس با ما</Link>
                    </li>
                </ul>
            </div>
        </div>
    </section>
  )
}
