import React from 'react'
import './Title.css'
export default function Title(props) {
  return (
    <div className="title-wrapper">
        <h3 className="title-text">{props.title}</h3>
    </div>
  )
}
