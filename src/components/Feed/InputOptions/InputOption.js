import React from 'react'
import './InputOption.css'

const InputOption = ({Icon,title,color}) => {
  return (
    <div className='inputOption'>
        <Icon style={{color:color}} className="inputOption_icon"/>
        <h4 className='inputOption_title'>{title} </h4>
    </div>
  )
}

export default InputOption