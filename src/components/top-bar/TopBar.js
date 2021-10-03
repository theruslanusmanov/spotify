import React, {useEffect, useState} from 'react';
import './TopBar.css';
import {ReactComponent as Profile} from './profile.svg'
import {ReactComponent as ArrowDown} from './arrow-down.svg'
import {UserProfileApi} from '../../api/user-profile.api';

export const TopBar = () => {
  const [profile, setProfile] = useState()

  useEffect(() => {
    UserProfileApi.getCurrentUsersProfile()
      .then(response => setProfile(response));
  }, [])

  return (
      <div className="topbar">
        <div className="account-btn">
          <div className="account-icon">
            <Profile/>
          </div>
          <span>{profile?.display_name}</span>
          <ArrowDown/>
        </div>
      </div>
  )
}
