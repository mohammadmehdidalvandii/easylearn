import React from 'react'
import './NewCourse.css'
import Title from '../Title/Title'
export default function NewCourse() {
  return (
        <section className="NewCourse" >
            <div className="container">
                <div className="newCourse-wrapper">
                    <Title title='دوره های آموزشی آینده'/>
                    <div className="newCourse-items">
                        <div className="newCourse-right">
                            <img src="./images/bg-1.png" alt="background" className="newCourse-right-img" />
                        </div>
                        <div className="newCourse-Left">
                            <div className="newCourse-left-content">
                                <h4 className="newCourse-left-title">دوره آموزشی UI / UX</h4>
                                <p className="newCourse-left-text">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است</p>
                                <div className="newCourse-left-data">
                                    <span className="newCourse-left-data-text">
                                        تاریخ برگذاری : 23/8/1401
                                    </span>
                                    <span className="newCourse-left-accept">ادامه مطلب</span>
                                </div>
                            </div>
                            <div className="newCourse-left-content">
                                <h4 className="newCourse-left-title">دوره آموزشی UI / UX</h4>
                                <p className="newCourse-left-text">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است</p>
                                <div className="newCourse-left-data">
                                    <span className="newCourse-left-data-text">
                                        تاریخ برگذاری : 23/8/1401
                                    </span>
                                    <span className="newCourse-left-accept">ادامه مطلب</span>
                                </div>
                            </div>
                            <div className="newCourse-left-content">
                                <h4 className="newCourse-left-title">دوره آموزشی UI / UX</h4>
                                <p className="newCourse-left-text">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است</p>
                                <div className="newCourse-left-data">
                                    <span className="newCourse-left-data-text">
                                        تاریخ برگذاری : 23/8/1401
                                    </span>
                                    <span className="newCourse-left-accept">ادامه مطلب</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
