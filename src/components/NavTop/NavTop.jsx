import React from 'react'
import './NavTop.css'
import {BsBasket2Fill, BsFillPersonPlusFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'
export default function NavTop() {
  return (
    <section className="navtop">
        <div className="container">
            <div className="navtop-wrapper">
                <div className="navtop-right">
                    <div className="navtop-right-logo">
                        <img src="/images/logo.jpg" alt="" className="navtop-right-logoImg" />
                    </div>
                    <div className="navtop-right-search">
                        <form action="#" className="navtop-right-searchForm">
                            <div className="navtop-right-box">
                                <input type="text" placeholder='عنوان مورد نظررا جست و جو کن...' />
                                <button>جستجو</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="navtop-left">
                    <div className="navtop-left-basket">
                        <BsBasket2Fill className='navtop-left-basketIcon'/>
                        <span className="navtop-left-basketText">2</span>
                    </div>
                    <div className="navtop-left-buttons">
                        <Link to='/Register' className="navtop-left-btn navtop-left-btnSingin">
                            <BsFillPersonPlusFill className='navtop-left-btnIcon'/>
                            ثبت نام
                        </Link>
                        <Link to='/Login' className="navtop-left-btn navtop-left-btnLogin">
                            ورود
                        </Link>
                        <Link to='/Lecturer' className="navtop-left-btn navtop-left-btnTeacher">
                            مدرس شوید
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
