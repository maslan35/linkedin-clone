import { Avatar } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice'
import './Sidebar.css'

const Sidebar = () => {
    const user = useSelector(selectUser) 

    const recentItem= (topic) => {
        return (
        <div className='sidebar_recentItem'>
            <span className='sidebar_hash'>#</span>
            <p>{topic}</p>
        </div>
    )}
  return (
    <div className='sidebar'>
        <div className='sidebar_top'>
            <img src='https://avatars1.githubusercontent.com/u/52705818?s=460&u=f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f&v=4' alt=""/>
            <Avatar src={user.photoURL} className='sidebar_avatar'>
                {user.email[0]}</Avatar>
            <h2>{user.displayName} </h2>
            <h4>{user.email} </h4>
        </div>
        <div className='sidebar_stats'>
            <div className='sidebar_stat'>
                <p>Who viewed you</p>
                <p className='sidebar_statNum'>0</p>
            </div>
            <div className='sidebar_stat'>
                <p>Views on post</p>
                <p className='sidebar_statNum'>0</p>
            </div>
        </div>
        <div className='sidebar_bottom'>
            <p>recent</p>
            {recentItem('javascript')}
            {recentItem('react')}
            {recentItem('node')}
            {recentItem('mongodb')}
            {recentItem('express')}
            {recentItem('mongodb')}
        </div>
    </div>
  )
}

export default Sidebar