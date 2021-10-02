import React, { useEffect } from 'react'
import useLocation from 'wouter/use-location'


export const Auth = () => {
  const [, setLocation] = useLocation();

  useEffect(() => {
    const token = new URLSearchParams(window.location.hash.substr(1)).get('access_token');
    console.log(token);

    // Save Token in Local Storage
    localStorage.setItem('access_token', token);

    if (localStorage.getItem('access_token')) {
      setLocation("/")
    }
  })
  return <></>
}
