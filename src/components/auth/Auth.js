import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom/cjs/react-router-dom';

export const Auth = () => {
  // const history = useHistory();

  useEffect(() => {
    const token = new URLSearchParams(window.location.hash.substr(2)).get(
        'access_token');
    const expiresIn = new URLSearchParams(window.location.hash.substr(2)).get(
        'expires_in');

    const date = new Date().getTime();
    const expiresTime = +date + (expiresIn * 1000);

    // Save Token in Local Storage
    localStorage.setItem('access_token', token);
    localStorage.setItem('expires_time', expiresTime.toString());

    if (localStorage.getItem('access_token')) {
      // history.push('/');
    }
  });
  return <></>;
};
