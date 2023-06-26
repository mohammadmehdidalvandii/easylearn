import React, { useState } from 'react'
import './DownNavRes.css'
import { FaBars } from 'react-icons/fa'
import {Link} from 'react-router-dom'
export default function DownNavRes() {
    const [isOpenMenu , setIsOpenMenu] = useState(false)

    const clickOpenMenu = ()=>{
        setIsOpenMenu(isOpenMenu => !isOpenMenu)
    }
    return (
        <section className="downnavres">
            <div className="container">
                <div className="downnavres-bars">
                    <span className="downnavres-bar">
                        <FaBars className='downnavres-icon' onClick={clickOpenMenu} />
                    </span>
                </div>
                <div className="downnavres-menus" style={{display: isOpenMenu ? 'block': 'none'}}>
                    <ul className="downnavres-items">
                        <li className="downnavres-item">
                            <Link to='/' className="doownnavres-item-link">
                                خانه
                            </Link>
                        </li>
                        <li className="downnavres-item">
                        <a href='#Course' className="navdown-menu-link">دوره اموزشی</a>
                        </li>
                        <li className="downnavres-item">
                        <a href='#webLog' className="navdown-menu-link">بلاگ</a>
                        </li>
                        <li className="downnavres-item">
                            <Link to='/ContactUs' className="doownnavres-item-link">
                                تماس با ما
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
