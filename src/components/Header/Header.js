import React from 'react'
import './Header.css'
import { useDispatch } from 'react-redux';
import HeaderOption from '../HeaderOption/HeaderOption';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { logout } from '../../features/userSlice';
import { auth } from '../../firebase';

const Header = () => {
  const dispatch = useDispatch()
  
  const logOutApp = () => {
    dispatch(logout())
    auth.signOut()
  }

  return (
    <div className='header'>
        <div className='header__left'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png?20140125013055'
             alt='Linkedin Logo' />
            <div className='header__search'>
                <SearchIcon />
                <input type='text' placeholder='Search' />
            </div>
        </div>
        <div className='header__right'>
            <HeaderOption Icon={HomeIcon} title='Home' />
            <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
            <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
            <HeaderOption Icon={ChatIcon} title='Messages' />
            <HeaderOption Icon={NotificationsIcon} title='Notifications' />
            <HeaderOption avatar={true}
            title="me"
            onClick={logOutApp}/>
        </div>
    </div>
  )
}

export default Header