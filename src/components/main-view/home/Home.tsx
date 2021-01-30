import React, {useEffect} from 'react'
import './Home.scss'
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store/root.state";
import {getUserToken} from "../../../store/user/user.selectors";
import {homeActions} from "../../../store/home";

export const Home: React.FC = () => {
  const dispatch = useDispatch();

  const token = useSelector(
    (state: RootState) => getUserToken(state))

  /*  const searchResults = useSelector(
    (state: RootState) => getSearchSelector(state)?.result?.artists?.items
  )*/

  useEffect(() => {
    console.log(token);
    if (token) {
      dispatch(homeActions.loadShortcuts())
    }
  }, [token])

  return (
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
}
