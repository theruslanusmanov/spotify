import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom/cjs/react-router-dom';

export const Auth = () => {
  const history = useHistory();

  useEffect(() => {
    const token = new URLSearchParams(window.location.hash.substr(1)).get(
        'access_token');

    // Save Token in Local Storage
    localStorage.setItem('access_token', token);

    if (localStorage.getItem('access_token')) {
      history.push('/');
    }
  });
  return <></>;
};
