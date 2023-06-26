import React from 'react'
import './LoginForm.css'
import { BsFillPersonFill, BsFillLockFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
export default function LoginForm() {
    return (
        <section className="LoginForm">
            <div className="container">
                <div className="LoginForm-wrapper">
                    <from className="LoginForm-form">
                        <div className="LoginForm-Form-title">
                            <h3 className="LoginForm-title-text"> ورود به سایت</h3>
                        </div>
                        <div className="LoginForm-FormBox">
                            <label htmlFor="" className='LoginForm-FormText'  >نام کاربری:</label>
                            <div className="LoginForm-FormInputIcon">
                                <span className="LoginForm-FormIcon">
                                    <BsFillPersonFill />
                                </span>
                                <input type="text" placeholder='نام خود را وارد کنید' className='LoginForm-FormInput' />
                            </div>
                        </div>
                        <div className="LoginForm-FormBox">
                            <label htmlFor="" className='LoginForm-FormText' >رمز عبور:</label>
                            <div className="LoginForm-FormInputIcon">
                                <span className="LoginForm-FormIcon">
                                    <BsFillLockFill />
                                </span>
                                <input type="text" placeholder='نام خود را وارد کنید' className='LoginForm-FormInput' />
                            </div>
                        </div>
                        <div className="LoginForm-FormCheckBox">
                            <input type="checkbox" className='LoginForm-Form-checkBox' />
                            یادآوری رمز عبور
                        </div>
                        <button className='LoginForm-Form-button'>ورود</button>
                        <div className="LoginForm-Form-Links">
                            <div className="LoginForm-Form-LinksTexts">
                                <span className="LoginForm-Form-LinkText">رمز عبور خود را فراموش کرده اید؟</span>
                                <Link className='LoginForm-Form-link'>بازیابی رمز عبور</Link>
                            </div>
                            <div className="LoginForm-Form-LinksTexts">
                                <span className="LoginForm-Form-LinkText"> هنوز در سایت ثبت نام نکرده اید ؟</span>
                                <Link className='LoginForm-Form-link'>ثبت نام</Link>
                            </div>
                        </div>
                    </from>
                </div>
            </div>
        </section>
    )
}
