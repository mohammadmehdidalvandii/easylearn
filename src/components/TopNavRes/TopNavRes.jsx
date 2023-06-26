import React, { useState } from 'react'
import './TopNavRes.css'
import { BsFillPersonPlusFill, BsFillLockFill, BsBasketFill, BsSearch } from 'react-icons/bs'
import {FaGraduationCap} from 'react-icons/fa'
import { Link } from 'react-router-dom'
export default function TopNavRes() {
    const [showSearch , setShowSearch] = useState(false)

    const clickShowBtnSearch = ()=>{
        setShowSearch(showSearch => ! showSearch)
    }
    return (
        <section className="topnavres">
            <div className="container">
                <div className="topnavres-menus">
                    <div className="topnavres-logo">
                        <img src="/images/logo.jpg" alt="logo" className="topnavres-logo-img" />
                    </div>
                    <div className="topnavres-menu">
                        <Link to='/Register' className="topnavres-menu-link">
                            <BsFillPersonPlusFill className='topnavres-menu-linkIcon' />
                        </Link>
                        <Link to='/Login' className="topnavres-menu-link">
                            <BsFillLockFill className='topnavres-menu-linkIcon' />
                        </Link>
                        <Link to='/Lecturer' className="topnavres-menu-link">
                            <FaGraduationCap className='topnavres-menu-linkIcon' />
                        </Link>
                        <Link className="topnavres-menu-link">
                            <BsBasketFill className='topnavres-menu-linkIcon' />
                        </Link>
                        <Link className="topnavres-menu-link" onClick={clickShowBtnSearch}>
                            <BsSearch className='topnavres-menu-linkIcon' />
                        </Link>
                    </div>
                    <div className="tonavres-search" style={{display : showSearch ? 'block' : 'none'}}>
                        <form action="#" className="topnavres-search-form">
                            <div className="topnavres-search-box">
                                <input type="text" placeholder='جست وجو..' />
                                <button>جستجو</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
