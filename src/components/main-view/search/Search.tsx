import React, {useEffect} from 'react'
import './Search.scss'
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store/root.state";
import {getUserToken} from "../../../store/user/user.selectors";
import {searchActions} from "../../../store/search";

export const Search: React.FC = () => {
  const dispatch = useDispatch();

  const token = useSelector(
    (state: RootState) => getUserToken(state))

  useEffect(() => {
    dispatch(searchActions.search())
  }, [token])

  return (
    <h1>Search</h1>
  )
}
