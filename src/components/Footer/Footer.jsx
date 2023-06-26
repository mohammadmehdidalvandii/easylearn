import React from 'react'
import './Footer.css'
import {FaMapMarkerAlt, FaInstagram} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'
import {BsTelephoneFill, BsTelegram, BsYoutube, BsTwitter} from 'react-icons/bs'
export default function Footer() {
    return (
        <section className="footer">
            <div className="container">
                <div className="footer-top">
                    <div className="footer-top-items">
                        <ul className="footer-top-menus">
                            <li className="footer-top-menu">
                                <img src="/images/logo.jpg" alt="" className="footer-top-img" />
                            </li>
                            <li className="footer-top-menu">
                                <p className="footer-top-paraph">
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطر آنچنان که لازم است.\
                                </p>
                            </li>
                            <li className="footer-top-menu">
                                <div className="footer-top-textIcon">
                                    <FaMapMarkerAlt className='footer-top-icon'/>
                                    <span className="footer-top-text">ایران , تهران , زعفرانیه , ساختمان مهر</span>
                                </div>
                            </li>
                            <li className="footer-top-menu">
                                   <div className="footer-top-textIcon">
                                    <MdEmail className='footer-top-icon'/>
                                    <span className="footer-top-text"> info@sitename.com</span>
                                </div>
                            </li>
                            <li className="footer-top-menu">
                                   <div className="footer-top-textIcon">
                                    <BsTelephoneFill className='footer-top-icon'/>
                                    <span className="footer-top-text"> 021-12345678</span>
                                </div>
                            </li>
                        </ul>
                        <ul className="footer-top-menus">
                            <li className="footer-top-menu">
                                <a href="#" className="footer-top-link">
                                دسترسی سریع
                                </a>
                            </li>
                            <li className="footer-top-menu">
                                <a href="#" className="footer-top-link">
                                درباره ما
                                </a>
                            </li>
                            <li className="footer-top-menu">
                                <a href="#" className="footer-top-link">                
                                تماس با ما
                                </a>
                            </li>
                            <li className="footer-top-menu">
                                <a href="#" className="footer-top-link">
                                سوالات متداول
                                </a>
                            </li>
                            <li className="footer-top-menu">
                                <a href="#" className="footer-top-link">
                                تاریخچه سفارشات
                                </a>
                            </li>
                        </ul>
                        <ul className="footer-top-menus">
                            <li className="footer-top-menu">
                                <a href="#" className="footer-top-link">
                                لینک های مفید
                                </a>
                            </li>
                            <li className="footer-top-menu">
                                <a href="#" className="footer-top-link">
                                حساب کاربری
                                </a>
                            </li>
                            <li className="footer-top-menu">
                                <a href="#" className="footer-top-link">
                                بازپرداخت
                                </a>
                            </li>
                            <li className="footer-top-menu">
                                <a href="#" className="footer-top-link">
                                تخفیف
                                </a>
                            </li>
                            <li className="footer-top-menu">
                                <a href="#" className="footer-top-link">
                                رهگیری سفارش
                                </a>
                            </li>
                        </ul>
                        <ul className="footer-top-menus">
                            <li className="footer-top-menu">
                                <h4 className="footer-top-newsText"> برای اطلاع از تازه ترین ها به خبرنامه ما بپیوندید!</h4>
                            </li>
                            <li className="footer-top-menu">
                                <form action="#" className="footer-top-form">
                                    <div className="footer-top-formBox">
                                        <input type="text" placeholder='ایمیل خود را وارد کنید' />
                                        <button>اشتراک</button>
                                    </div>
                                </form>
                            </li>
                            <li className="footer-top-menu">
                                <div className="footer-top-media">
                                    <a href="#" className="footer-top-mediaLink">
                                        <BsTelegram className='footer-top-mediaIcon'/>
                                    </a>
                                    <a href="#" className="footer-top-mediaLink">
                                        <BsYoutube className='footer-top-mediaIcon'/>
                                    </a>
                                    <a href="#" className="footer-top-mediaLink">
                                        <BsTwitter className='footer-top-mediaIcon'/>
                                    </a>
                                    <a href="#" className="footer-top-mediaLink">
                                        <FaInstagram className='footer-top-mediaIcon'/>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer-down"></div>
            </div>
        </section>
    )
}
