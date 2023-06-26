import React from 'react'
import './Course.css'
import Title from '../../components/Title/Title'
import {Link, useNavigate} from 'react-router-dom'
import {BsFillBasketFill} from 'react-icons/bs'
import {courseItem} from '../../Datas'

export default function Course() {
    const navigate = useNavigate()

    const showDetailsCourse =(courseID)=>{
        navigate(`/CourseDetails/${courseID}`)
    }
  return (
    <section className="course" id='Course'>
        <div className="container">
            <div className="course-wrapper">
                <Title title='جدیدترین دوره های آموزشی'/>
                <div className="course-items">
                    {courseItem.map((crs)=>(
                              <div className="course-item" key={crs.id}>
                              <div className="course-img-buy">
                                  <img src={crs.img} alt="course" className="course-img" />
                                  <div className="course-buy">
                                      <span className="course-buy-count">
                                          30
                                          <BsFillBasketFill className='course-but-countIcon'/>
                                      </span>
                                      <Link to={`/CourseDetails/${crs.id}`} className="course-buy-btn" onClick={()=> showDetailsCourse(crs.id)}>مشاهد وخرید</Link>
                                  </div>
                              </div>
                              <div className="course-title-text">
                                  <h4 className="course-title">{crs.name}</h4>
                                  <p className="course-text"> {crs.text}</p>
                              </div>
                              <div className="course-prices">
                                  <div className="course-price-texts">
                                      <span className="course-price  course-price-discount">{crs.price} تومان</span>
                                      <span className="course-price  course-price-sale">{crs.priceDiscount} تومان</span>
                                  </div>
                                  <span className="course-discount-percent">60%</span>
                              </div>
                          </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}
