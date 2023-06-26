import React from 'react'
import './Contact.css'
import { BsTelephoneFill } from 'react-icons/bs'
import { MdMail, MdLocationOn } from 'react-icons/md'
export default function Contact() {
    return (
        <section className="contact">
            <div className="container">
                <h3 className="contact-title">
                    اطلاعات تماس
                </h3>
                <div className="contact-wrapper">
                    <div className="contact-top">
                        <div className="contact-top-items">
                            <div className="contact-top-item">
                                <span className="contact-top-IconBox">
                                    <BsTelephoneFill className='contact-top-icon' />
                                </span>
                                <span className="contact-top-text">021-12345678</span>
                            </div>
                            <div className="contact-top-item">
                                <span className="contact-top-IconBox">
                                    <MdMail className='contact-top-icon' />
                                </span>
                                <span className="contact-top-text">info@sitename.com</span>
                            </div>
                            <div className="contact-top-item">
                                <span className="contact-top-IconBox">
                                    <MdLocationOn className='contact-top-icon' />
                                </span>
                                <span className="contact-top-text">ایران , تهران , زعفرانیه , ساختمان مهر</span>
                            </div>
                        </div>
                    </div>
                    <div className="contact-down">
                        <form className="contact-down-form">
                            <div className="contact-down-formTitleText">
                                <h3 className="contact-down-formTitle">ارتباط با ما</h3>
                                <p className="contact-down-formText">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.</p>

                            </div>
                            <div className="contact-down-formNameEmail">
                                <div className="contact-down-formBox">
                                    <input type="text" className='contact-down-formInput'  placeholder='نام خودرا وارد کنید'  />
                                </div>
                                <div className="contact-down-formBox">
                                    <input type="text" className='contact-down-formInput'  placeholder='ایمیل خود را وارد کنید'  />
                                </div>
                            </div>
                            <div className="contact-down-formBoxTextArea">
                                <textarea  cols="30" rows="10" className='contact-down-formText' placeholder='پیام خود را وارد کنید'  ></textarea>
                            </div>
                            <button className="contact-down-formButton">ارسال</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
