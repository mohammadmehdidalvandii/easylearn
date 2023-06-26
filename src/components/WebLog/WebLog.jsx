import React from 'react'
import './WebLog.css'
import {BsEye} from 'react-icons/bs'
import Title from '../Title/Title'
import {Link, useNavigate} from 'react-router-dom'
import {webLog} from '../../Datas'
export default function WebLog() {
    const  navigate = useNavigate()
    
    const clickShowWebLog = (weblogID)=>{
        navigate(`/DetailsWebLog/${weblogID}`)
    }
  return (
    <section className="webLog" id='webLog'>
        <div className="container">
            <div className="webLog-wrapper">
                <Title title='تازه ترین مقالات آموزشی'/>
                <div className="webLog-items">
                    {webLog.map((wLog)=>(
                    <div className="webLog-item" key={wLog.id}>
                        <img src={wLog.img} alt="weblog1" className="webLog-item-img" />
                        <div className="webLog-item-content">
                            <h5 className="webLog-item-title">{wLog.title}</h5>
                            <p className="webLog-item-paraph">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
                        </div>
                        <div className="webLog-item-author">
                            <span className="webLog-item-authorText">
                                ادمین
                                <BsEye className='webLog-item-authorIcon'/>
                                140
                            </span>
                            <Link to={`/DetailsWebLog/${wLog.id}`} className="webLog-item-authorLink" onClick={()=> clickShowWebLog(wLog.id)}>بیشتر بخوانید</Link>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}
