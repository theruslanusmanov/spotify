import React, {useEffect, useState} from 'react';
import './Shell.css';
import {Sidebar} from '../sidebar/Sidebar';
import {Home} from '../home/Home';
import {TopBar} from '../top-bar/TopBar';
import {AuthorizationService} from '../../services/authorization.service';

export const Shell = () => {
  const [token, setToken] = useState();

  useEffect(() => {
    const savedToken = localStorage.getItem('access_token')

    console.log(savedToken);
    if (!savedToken && savedToken == null) {
      AuthorizationService.authorize();
    }

    setToken(savedToken);
  }, []);

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
