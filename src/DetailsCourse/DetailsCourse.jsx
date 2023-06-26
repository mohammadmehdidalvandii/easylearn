import React, { useState } from 'react'
import './DetailsCourse.css'
import { Link, useParams } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import { courseItem } from '../Datas'
export default function DetailsCourse() {

    const {id} =useParams()
    const foundCourse = courseItem.find(iCourse=> iCourse.id === parseInt(id))




    const [isShowMenu, setIsShowMenu] = useState('course')

    const clickShowMenu = (menuNow) => {
        setIsShowMenu(menuNow)
    }

    return (
        <section className="detailsCourse">
            <div className="container">
                <div className="detailsCourse-wrapper">
                    <div className="detailsCourse-top">
                        <div className="detailsCourse-top-content">
                            <Link to='/' className='detailsCourse-top-link'>صفحه اصلی </Link>
                            /
                            <span className="detailsCourse-top-text">دوره آموزشی</span>
                            /
                            <span className="detailsCourse-top-text">{foundCourse.name}</span>
                        </div>
                    </div>
                    <div className="detailsCourse-down">
                        <div className="detailsCourse-down-rightLeft">
                            <div className="detailsCourse-down-right">
                                <ul className="detailsCourse-right-menus">
                                    <li className="detailsCourse-right-menu">
                                        <img src={foundCourse.img} alt="" className="detailsCourse-right-img" />
                                    </li>
                                    <li className="detailsCourse-right-menu">
                                        <span className="detailsCourse-right-title">عنوان دوره :</span>
                                        <span className="detailsCourse-right-text">{foundCourse.name}</span>
                                    </li>
                                    <li className="detailsCourse-right-menu">
                                        <span className="detailsCourse-right-title">مدرس :</span>
                                        <span className="detailsCourse-right-text">علی نوروزی</span>
                                    </li>
                                    <li className="detailsCourse-right-menu">
                                        <span className="detailsCourse-right-title">سطخ دوره :</span>
                                        <span className="detailsCourse-right-text">مقدماتی تا پیشرفت</span>
                                    </li>
                                    <li className="detailsCourse-right-menu">
                                        <span className="detailsCourse-right-title">وضعیت دوره :</span>
                                        <span className="detailsCourse-right-text">درحال برگداری</span>
                                    </li>
                                    <li className="detailsCourse-right-menu">
                                        <span className="detailsCourse-right-title">قسممت های ارسال شد :</span>
                                        <span className="detailsCourse-right-text">12</span>
                                    </li>
                                    <li className="detailsCourse-right-menu">
                                        <span className="detailsCourse-right-title">قیمت دوره :</span>
                                        <span className="detailsCourse-right-text">{foundCourse.price} تومان </span>
                                    </li>
                                </ul>
                                <button className="detailsCourse-right-button">
                                    <FaShoppingCart className='detailsCourse-right-BtnIcon' />
                                    افزودن به سبد خرید
                                </button>
                            </div>
                            <div className="detailsCourse-down-left">
                                <div className="detailsCourse-down-TopDown">
                                    <div className="detailsCourse-left-top">
                                        <div className="detailsCourse-left-TopButtons">
                                            <button className={`detailsCourse-left-TopBtn ${isShowMenu === 'course' ? 'detailsCourse-left-TopBtnActive' : ''}`}
                                                onClick={() => clickShowMenu('course')}> معرفی دوره</button>
                                            <button className={`detailsCourse-left-TopBtn ${isShowMenu === 'question' ? 'detailsCourse-left-TopBtnActive' : ''}`}
                                                onClick={() => clickShowMenu('question')}>پرسش پاسخ</button>
                                            <button className={`detailsCourse-left-TopBtn ${isShowMenu === 'teacher' ? 'detailsCourse-left-TopBtnActive' : ''}`}
                                                onClick={() => clickShowMenu('teacher')}>درباره مدرس</button>
                                        </div>
                                    </div>
                                    <div className="detailsCourse-left-down">
                                        <div className="detailsCourse-left-downContent">
                                            {isShowMenu === 'course' && (
                                                <div className="detailsCourse-left-DownCourse">
                                                    <div className="detailsCorse-DownCourse">
                                                        <h5 className="detailsCorse-downCourse-title">
                                                           {foundCourse.name}
                                                        </h5>
                                                        <img src={foundCourse.img} className="detailsCorse-downCourse-video"/>    
                                                        <p className="detailsCorse-downCourse-paraph">
                                                            برای اینکه وارد دنیای طراحی وب شوید اولین چیزی که باید با آن آشنا شوید HTML است، HTML یک زبانه نشانگذاری برای ایجاد وبسایت ها است که به ما این اجازه را میدهد، اسکلت وبسایت خود را به وجود آوریم . در این دوره من قصد دارم بدونه نیاز به هیچ پیش شرط به شما HTML را آموزش دهم تا به شما کمک کنم اولین قدم برای ایجاد یک وبسایت را بر دارید .
                                                        </p>
                                                        <ul className="detailsCorse-downCourse-menus">
                                                            <h4 className="detailsCorse-downCourse-menusTitle">سر فصل ها :</h4>
                                                            <li className="detailsCorse-downCourse-menu">
                                                                <span className="detailsCorse-downCourse-number">1</span>
                                                                <span className="detailsCorse-downCourse-text">{foundCourse.headline}</span>
                                                            </li>
                                                            <li className="detailsCorse-downCourse-menu">
                                                                <span className="detailsCorse-downCourse-number">2</span>
                                                                <span className="detailsCorse-downCourse-text">{foundCourse.headline}</span>
                                                            </li>
                                                            <li className="detailsCorse-downCourse-menu">
                                                                <span className="detailsCorse-downCourse-number">3</span>
                                                                <span className="detailsCorse-downCourse-text"> {foundCourse.headline}</span>
                                                            </li>
                                                            <li className="detailsCorse-downCourse-menu">
                                                                <span className="detailsCorse-downCourse-number">4</span>
                                                                <span className="detailsCorse-downCourse-text">{foundCourse.headline}</span>
                                                            </li>
                                                            <li className="detailsCorse-downCourse-menu">
                                                                <span className="detailsCorse-downCourse-number">5</span>
                                                                <span className="detailsCorse-downCourse-text">{foundCourse.headline}</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            )}
                                            {isShowMenu === 'question' && (
                                                <div className="detailsCourse-left-DownQuestion">
                                                    <div className="detailsCourse-DownQuestion">
                                                        <from className="detailsCourse-DownQuestion-formQuestion">
                                                            <div className="detailsCourse-DownQuestion-formBox">
                                                                <div className="detailsCourse-DownQuestion-formBoxInput">
                                                                    <input type="text" className='detailsCourse-DownQuestion-formInput' placeholder='نام خود را وارد کنید' />
                                                                </div>
                                                                <div className="detailsCourse-DownQuestion-formBoxInput">
                                                                    <input type="text" className='detailsCourse-DownQuestion-formInput' placeholder='ایمیل خود را وارد کنید' />
                                                                </div>
                                                            </div>
                                                            <textarea rows="10" className='detailsCourse-DownQuestion-formTextArea' placeholder='موضوع خود را بگوید'></textarea>
                                                            <button className="detailsCourse-DownQuestion-formBtn">ارسال</button>
                                                        </from>
                                                    </div>
                                                </div>
                                            )}
                                            {isShowMenu === 'teacher' && (
                                                <div className="detailsCourse-left-DownTeacher">
                                                    <div className="detailsCourse-DownTeacher">
                                                        <img src="./images/teacher/teacher4.jpg" alt="" className="detailsCourse-DownTeacher-img" />
                                                        <p className="detailsCourse-DownTeacher-description">اول داستان، طراح گرافیک بودم و ۲ سالی به عنوان طراح مشغول بودم، بعد به برنامه‌نویسی علاقمند شدم و الان بیشتر از ۱۰ ساله که عاشق کدزنی و چالش‌های پروژه‌های مختلفم. به تدریس علاقه خاصی دارم و دوست دارم دانشی که در این راه بدست آوردم را در اختیار دیگران هم قرار بدم.</p>
                                                        <div className="detailsCourse-DownTeacher-skillItems">
                                                            <h4 className="detailsCourse-DownTeacher-skillTitle">مهارت ها :</h4>
                                                            <div className="detailsCourse-DownTeacher-skill">
                                                                <span className='detailsCourse-DownTeacher-skillChart' id='skillChart-html'>
                                                                    <span className='detailsCourse-DownTeacher-skillText'>html (95%)</span>
                                                                </span>
                                                            </div>
                                                            <div className="detailsCourse-DownTeacher-skill">
                                                                <span className='detailsCourse-DownTeacher-skillChart' id='skillChart-css'>
                                                                    <span className='detailsCourse-DownTeacher-skillText'>css (90%)</span>
                                                                </span>
                                                            </div>
                                                            <div className="detailsCourse-DownTeacher-skill">
                                                                <span className='detailsCourse-DownTeacher-skillChart' id='skillChart-javascript'>
                                                                    <span className='detailsCourse-DownTeacher-skillText'>javascript (70%)</span>
                                                                </span>
                                                            </div>
                                                            <div className="detailsCourse-DownTeacher-skill">
                                                                <span className='detailsCourse-DownTeacher-skillChart' id='skillChart-react'>
                                                                    <span className='detailsCourse-DownTeacher-skillText'>react (50%)</span>
                                                                </span>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
