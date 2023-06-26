import React from 'react'
import './RegisterForm.css'
import {BsFillPersonFill} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
import {AiTwotoneLock} from 'react-icons/ai'
import {Link} from 'react-router-dom'
export default function RegisterForm() {
    

  return (
        <section className="registerForm">
            <div className="container">
                <div className="registerForm-wrapper">
                    <form action="#" className="registerForm-form">
                        <div className="registerForm-formTitle">
                            <h3 className="registerForm-formTitle-text">عضویت در سایت</h3>
                        </div>
                        <div className="registerForm-formBox">
                            <label htmlFor="#" className='registerForm-formBox-text'>نام:</label>
                            <div className="registerForm-formBox-InputIcon">
                                <span className="registerForm-formBox-icon">
                                    <BsFillPersonFill/>
                                </span>
                                <input type="text" id='registerName'  className='registerForm-formBox-input' placeholder='نام خود را واردکنید'/>
                            </div>
                        </div>
                        <div className="registerForm-formBox">
                            <label htmlFor="#" className='registerForm-formBox-text'>نام خانوادگی:</label>
                            <div className="registerForm-formBox-InputIcon">
                                <span className="registerForm-formBox-icon">
                                    <BsFillPersonFill/>
                                </span>
                                <input type="text"  className='registerForm-formBox-input' placeholder='نام خانوادگی خود را وارد کنید'/>
                            </div>
                        </div>
                        <div className="registerForm-formBox">
                            <label htmlFor="#" className='registerForm-formBox-text'>ایمیل:</label>
                            <div className="registerForm-formBox-InputIcon">
                                <span className="registerForm-formBox-icon">
                                    <MdEmail/>
                                </span>
                                <input type="text"  className='registerForm-formBox-input' placeholder=' ایمیل وارد کنید'/>
                            </div>
                        </div>
                        <div className="registerForm-formBox">
                            <label htmlFor="#" className='registerForm-formBox-text'>نام کاربری:</label>
                            <div className="registerForm-formBox-InputIcon">
                                <span className="registerForm-formBox-icon">
                                    <BsFillPersonFill/>
                                </span>
                                <input type="text"  className='registerForm-formBox-input' placeholder='نام کاربری وارد کنید'/>
                            </div>
                        </div>
                        <div className="registerForm-formBox">
                            <label htmlFor="#" className='registerForm-formBox-text'>رمز عبور:</label>
                            <div className="registerForm-formBox-InputIcon">
                                <span className="registerForm-formBox-icon">
                                    <AiTwotoneLock/>
                                </span>
                                <input type="text"  className='registerForm-formBox-input' placeholder='رمز عبور را وارد کنید'/>
                            </div>
                        </div>
                        <button className="registerForm-formBox-button">ثبت نام</button>
                        <div className="registerForm-formBox-Links">
                            <span className="registerForm-formBox-LinkText">قبلا در سایت ثبت نام کرده اید ؟</span>
                            <Link to='/Login' className="registerForm-formBox-link">وارد شوید</Link>
                        </div>
                    </form>
                </div>
            </div>
        </section>
  )
}
