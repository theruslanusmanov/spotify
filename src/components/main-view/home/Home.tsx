import React from 'react'
import './Home.scss'

export const Home: React.FC = () => (
  <>
    <h1 className="title">Shortcuts</h1>
    <div className="shortcuts">
      <div className="shortcuts__item"></div>
      <div className="shortcuts__item"></div>
      <div className="shortcuts__item"></div>
      <div className="shortcuts__item"></div>
    </div>
    <h2 className="title">Recently played</h2>
    <div className="recently">
      <div className="recently__item"></div>
      <div className="recently__item"></div>
      <div className="recently__item"></div>
      <div className="recently__item"></div>
    </div>
  </>
)
