import React from 'react'
import './WebLogContent.css'
import { BsPencilFill, BsFillEyeFill } from 'react-icons/bs'
import { MdDateRange } from 'react-icons/md'
import {webLog} from '../../Datas'
import { useParams } from 'react-router-dom';
export default function WebLogContent() {
    const { id } = useParams();
    const foundWebLog = webLog.find(w => w.id === parseInt(id));
    return (
        <section className="webLogContent">
            <div className="container">
                <div className="webLogContent-wrapper">
                    <div className="webLogContent-Details">
                        <img src={foundWebLog.img} alt="" className="webLogContent-Details-img" />
                        <h3 className="webLogContent-Details-title">{foundWebLog.title}</h3>
                        <div className="webLogContent-Details-text">
                            <span className="webLogContent-Details-author">
                                <BsPencilFill className='webLogContent-Details-Icon' />
                                علی نوروزی
                            </span>
                            <span className="webLogContent-Details-data">
                                <MdDateRange className='webLogContent-Details-Icon' />
                                1401/08/12
                            </span>
                            <span className="webLogContent-Details-view">
                                <BsFillEyeFill className='webLogContent-Details-Icon' />
                                223
                            </span>
                            <span className="webLogContent-Details-group">
                                دسته بندی : برنامه نویسی
                            </span>
                        </div>
                    </div>
                    <div className="webLogContent-description">
                        <p className="webLogContent-description-text">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.

                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                        </p>
                        <div className="webLogContent-description-sticky">
                            <h5 className="webLogContent-description-stickyTitle">برچسب ها :</h5>
                            <spna className="webLogContent-description-stickyText">#برنامه نویسی</spna>
                            <spna className="webLogContent-description-stickyText">#اچ تی ام ال</spna>
                            <spna className="webLogContent-description-stickyText"># HTML</spna>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
