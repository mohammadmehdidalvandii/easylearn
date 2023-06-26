import React, { useState } from 'react'
import './LecturerForm.css'
import { Link } from 'react-router-dom'
import { AiOutlinePlus } from 'react-icons/ai'
import {accordionItems} from '../../Datas'
export default function LecturerForm() {

    const [isShowAccordion , setIsShowAccordion] = useState(null)

    const clickShowAccordion = (accordionsID)=>{
        setIsShowAccordion(isShowAccordion === accordionsID ? null : accordionsID)
    }

    return (
        <section className="lecturerForm">
            <div className="container">
                <div className="lecturer-wrapper">
                    <div className="lecturer-top">
                        <div className="lecturer-top-content">
                            <Link to='/' className="lecturer-top-link">صفحه اصلی</Link>
                            /
                            <span className="lecturer-top-text">تدریس در ایزی لرن</span>
                        </div>
                    </div>
                    <div className="lecturer-down">
                        <div className="lecturer-down-right">
                            <div className="lecturer-down-rightTitle">
                                <h5 className="lecturer-right-title">ثبت موضوع آموزشی</h5>
                                <span className="lecturer-right-text">لطفا ابتدا بخش‌های قوانین تولید و استانداردهای ایزی لرن را به دقت مطالعه کنید.</span>
                            </div>
                            <form action="#" className="lecturer-down-rightForm">
                                <div className="lecturer-rightForm-formBox">
                                    <label htmlFor="#" className='lecturer-rightForm-text'>نام کامل:</label>
                                    <input type="text" className='lecturer-rightForm-input' placeholder='نام و نام خانوادگی را واردکنید' />
                                </div>
                                <div className="lecturer-rightForm-formBox">
                                    <label htmlFor="#" className='lecturer-rightForm-text'>تلفن تماس :</label>
                                    <input type="text" className='lecturer-rightForm-input' placeholder='شمار تماس خودرا واردکنید' />
                                </div>
                                <div className="lecturer-rightForm-formBox">
                                    <label htmlFor="#" className='lecturer-rightForm-text'> ایمیل :</label>
                                    <input type="text" className='lecturer-rightForm-input' placeholder='ایمیل خود را واردکنید' />
                                </div>
                                <div className="lecturer-rightForm-formBox">
                                    <label htmlFor="#" className='lecturer-rightForm-text'>  عنوان :</label>
                                    <input type="text" className='lecturer-rightForm-input' placeholder='عنوان آموزش وارد کنید' />
                                </div>
                                <div className="lecturer-rightForm-formBox">
                                    <label htmlFor="#" className='lecturer-rightForm-text'>دسته بندی :</label>
                                    <select className='lecturer-rightForm-select'>
                                        <option value="" className="lecturer-rightForm-options">طراح سایت</option>
                                        <option value="" className="lecturer-rightForm-options">گرافیک</option>
                                        <option value="" className="lecturer-rightForm-options">برنامه نویس اندروید</option>
                                        <option value="" className="lecturer-rightForm-options">برنامه نویس وب</option>
                                    </select>
                                </div>
                                <div className="lecturer-rightForm-formBox">
                                    <label htmlFor="#" className='lecturer-rightForm-text'>لینک نمونه (اختیاری) :</label>
                                    <input type="text" className='lecturer-rightForm-input' placeholder='لینک نمونه خود را واردکنید' />
                                    <span className="lecturer-rightForm-alert">لینک نمونه می‌تواند ویدئوی معرفی دوره شما یا هر ویدئوی آموزشی دیگری باشد که تا به حال ضبط کرد‌ه‌اید</span>
                                </div>
                                <div className="lecturer-rightForm-formBox">
                                    <label htmlFor="#" className='lecturer-rightForm-text'>  توضیحات:</label>
                                    <textarea type="text" className='lecturer-rightForm-textarea' placeholder='توضیحاتی مختصر درباره اموزشی خود وارد کنید' />
                                </div>
                                <button className="lecturer-rightForm-button">ثبت موضوع اموزشی</button>
                            </form>
                        </div>
                        <div className="lecturer-down-left">
                                <h3 className="lecturer-down-title">
                                    استانداردهای ایزی لرن برای تولید ویدئوهای آموزشی
                                    کیفیت تصویر
                                </h3>
                            <div className="lecturer-down-leftAccordionItems">
                                {accordionItems.map((accrodions)=>(
                                <div className="lecturer-down-accordionItem" key={accrodions.id} onClick={()=>clickShowAccordion(accrodions.id)}>
                                    <div className="lecturer-accordion-titleIcon">
                                        <AiOutlinePlus className='lecturer-accordion-icon' />
                                        <span className="lecturer-accordion-text">{accrodions.title}</span>
                                    </div>
                                    {isShowAccordion === accrodions.id && (

                                        <p className="lecturer-accordion-paraph"  >
                                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                                    </p>
                                    )}
                                   
                                </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
