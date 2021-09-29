import React from 'react';
import './TopBar.css';
import {ReactComponent as Profile} from './profile.svg'
import {ReactComponent as ArrowDown} from './arrow-down.svg'

export const TopBar = () => (
  <div className="topbar">
    <div className="account-btn">
      <div className="account-icon">
        <Profile/>
      </div>
      <span>Name</span>
      <ArrowDown/>
    </div>
  </div>
)
