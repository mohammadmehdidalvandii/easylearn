import React from 'react'
import './Teacher.css'
import Title from '../Title/Title'
import {FaWhatsapp,FaTelegram,FaInstagram} from 'react-icons/fa'
export default function Teacher() {
  return (
    <section className="teacher">
        <div className="container">
            <div className="teacher-wrapper">
                <Title title='بهترین مدرسین ما'/>
                <div className="teacher-items">
                    <div className="teacher-item">
                            <img src="./images/teacher/teacher1.jpg" alt="" className="teacher-item-img" />
                            <div className="teacher-item-titleText">
                                <span className="teacher-item-title">مریم صالحی</span>
                                <span className="teacher-item-text">مدرس حرفه ای طراحی سایت</span>
                            </div>
                            <div className="teacher-item-media">
                                <a href="#" className="teacher-item-mediaLink">
                                    <FaWhatsapp className='mediaLinkIcon'/>
                                </a>
                                <a href="#" className="teacher-item-mediaLink">
                                <FaTelegram className='mediaLinkIcon'/>
                                </a>
                                <a href="#" className="teacher-item-mediaLink">
                                <FaInstagram className='mediaLinkIcon'/>
                                </a>
                            </div>
                    </div>
                    <div className="teacher-item">
                            <img src="./images/teacher/teacher2.jpg" alt="" className="teacher-item-img" />
                            <div className="teacher-item-titleText">
                                <span className="teacher-item-title">محمد انصاری</span>
                                <span className="teacher-item-text"> مدرس حرفه ای اندروید</span>
                            </div>
                            <div className="teacher-item-media">
                                <a href="#" className="teacher-item-mediaLink">
                                    <FaWhatsapp className='mediaLinkIcon'/>
                                </a>
                                <a href="#" className="teacher-item-mediaLink">
                                <FaTelegram className='mediaLinkIcon'/>
                                </a>
                                <a href="#" className="teacher-item-mediaLink">
                                <FaInstagram className='mediaLinkIcon'/>
                                </a>
                            </div>
                    </div>
                    <div className="teacher-item">
                            <img src="./images/teacher/teacher3.jpg" alt="" className="teacher-item-img" />
                            <div className="teacher-item-titleText">
                                <span className="teacher-item-title">سارا یگانه </span>
                                <span className="teacher-item-text"> مدرس حرفه ای گرافیک </span>
                            </div>
                            <div className="teacher-item-media">
                                <a href="#" className="teacher-item-mediaLink">
                                    <FaWhatsapp className='mediaLinkIcon'/>
                                </a>
                                <a href="#" className="teacher-item-mediaLink">
                                <FaTelegram className='mediaLinkIcon'/>
                                </a>
                                <a href="#" className="teacher-item-mediaLink">
                                <FaInstagram className='mediaLinkIcon'/>
                                </a>
                            </div>
                    </div>
                    <div className="teacher-item">
                            <img src="./images/teacher/teacher4.jpg" alt="" className="teacher-item-img" />
                            <div className="teacher-item-titleText">
                                <span className="teacher-item-title"> علی نوروزی</span>
                                <span className="teacher-item-text"> مدرس حرفه ای برنامه نویسی وب </span>
                            </div>
                            <div className="teacher-item-media">
                                <a href="#" className="teacher-item-mediaLink">
                                    <FaWhatsapp className='mediaLinkIcon'/>
                                </a>
                                <a href="#" className="teacher-item-mediaLink">
                                <FaTelegram className='mediaLinkIcon'/>
                                </a>
                                <a href="#" className="teacher-item-mediaLink">
                                <FaInstagram className='mediaLinkIcon'/>
                                </a>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
