import React from 'react'
import './WebResult.css'
import Title from '../Title/Title'
import { FaUserGraduate, FaLaptop, FaAward } from 'react-icons/fa'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
export default function WebResult() {
    const settings = {
        dots: true,
        rtl:true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                dots: true
              }
            },
            {
              breakpoint:900,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
    
              }
            },
            {
              breakpoint:768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
    
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };
    return (
        <section className="webResult">
            <div className="container">
                <Title title='دستاورد های ما' />
                <div className="webResult-count-sliders">
                    <div className="webResult-count">
                        <div className="webResult-count-items">
                            <div className="webResult-count-item">
                                <span className="webResult-count-IconBox">
                                    <FaUserGraduate className='webResult-count-icon' />
                                </span>
                                <div className="webResult-count-content">
                                    <h5 className="webResult-count-title">دانش آموزان</h5>
                                    <span className="webResult-count-numberText">+231</span>
                                </div>
                            </div>

                            <div className="webResult-count-item">
                                <span className="webResult-count-IconBox">
                                    <FaLaptop className='webResult-count-icon' />
                                </span>
                                <div className="webResult-count-content">
                                    <h5 className="webResult-count-title"> دروه های اموزشی</h5>
                                    <span className="webResult-count-numberText">+28</span>
                                </div>
                            </div>
                            <div className="webResult-count-item">
                                <span className="webResult-count-IconBox">
                                    <FaAward className='webResult-count-icon' />
                                </span>
                                <div className="webResult-count-content">
                                    <h5 className="webResult-count-title"> جوایز</h5>
                                    <span className="webResult-count-numberText">+8</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="webResult-sliders">
                        <div className="slider-items">

                            <div>
                                <Slider {...settings}>
                                    <div>
                                        <div className="slider-item">
                                            <img src="./images/student.jpg" alt="" className="slider-img" />
                                            <div className="slider-content">
                                                <h5 className="slider-content-name">ارش سبحانی دانشجوی دوره طراحی وب </h5>
                                                <p className="slider-content-text">

                                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                                                    از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
                                                    سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع
                                                    با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته،
                                                    حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را
                                                    برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.

                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="slider-item">
                                            <img src="./images/student.jpg" alt="" className="slider-img" />
                                            <div className="slider-content">
                                                <h5 className="slider-content-name">ارش سبحانی دانشجوی دوره طراحی وب </h5>
                                                <p className="slider-content-text">

                                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                                                    از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
                                                    سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع
                                                    با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته،
                                                    حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را
                                                    برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.

                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="slider-item">
                                            <img src="./images/student.jpg" alt="" className="slider-img" />
                                            <div className="slider-content">
                                                <h5 className="slider-content-name">ارش سبحانی دانشجوی دوره طراحی وب </h5>
                                                <p className="slider-content-text">

                                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                                                    از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
                                                    سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع
                                                    با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته،
                                                    حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را
                                                    برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.

                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="slider-item">
                                            <img src="./images/student.jpg" alt="" className="slider-img" />
                                            <div className="slider-content">
                                                <h5 className="slider-content-name">ارش سبحانی دانشجوی دوره طراحی وب </h5>
                                                <p className="slider-content-text">

                                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                                                    از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
                                                    سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع
                                                    با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته،
                                                    حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را
                                                    برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.

                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="slider-item">
                                            <img src="./images/student.jpg" alt="" className="slider-img" />
                                            <div className="slider-content">
                                                <h5 className="slider-content-name">ارش سبحانی دانشجوی دوره طراحی وب </h5>
                                                <p className="slider-content-text">

                                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                                                    از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
                                                    سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع
                                                    با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته،
                                                    حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را
                                                    برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.

                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="slider-item">
                                            <img src="./images/student.jpg" alt="" className="slider-img" />
                                            <div className="slider-content">
                                                <h5 className="slider-content-name">ارش سبحانی دانشجوی دوره طراحی وب </h5>
                                                <p className="slider-content-text">

                                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                                                    از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
                                                    سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع
                                                    با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته،
                                                    حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را
                                                    برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.

                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
