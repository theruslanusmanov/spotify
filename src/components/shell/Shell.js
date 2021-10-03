import React, {useEffect, useState} from 'react';
import './Shell.css';
import {Sidebar} from '../sidebar/Sidebar';
import {Home} from '../home/Home';
import {TopBar} from '../top-bar/TopBar';
import {AuthorizationService} from '../../services/authorization.service';

export const Shell = () => {
  const [token,] = useState(localStorage.getItem('access_token'));

  useEffect(() => {
    if (!token) {
      AuthorizationService.authorize();
    }
  });

  return (
      <div className="shell">
        {
          token
              ? (
                  <>
                    <Sidebar/>
                    <TopBar/>
                    <div className="container">
                      <Home/>
                    </div>
                  </>
              )
              : null
        }
      </div>
  );
};
