import React from 'react'
import './Home.css'
import Header from '../../components/Header/Header';
import MainCard from '../../components/MainCard/MainnCard';
import Course from '../../components/Course/Course';
import NewCourse from '../../components/NewCourse/NewCourse';
import WebResult from '../../components/WebResult/WebResult';
import Teacher from '../../components/Teacher/Teacher'
import WebLog from '../../components/WebLog/WebLog';



export default function Home() {
  return (
    <div >
      {/* header section */}
      <Header />
      {/* main section  */}
      <main className="main">
        <MainCard />
        <Course />
        <NewCourse />
        <WebResult />
        <Teacher/>
        <WebLog/>
      </main>
    </div>
  )
}
