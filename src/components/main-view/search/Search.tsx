import React, {useEffect} from 'react'
import './Search.scss'
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store/root.state";
import {getUserToken} from "../../../store/user/user.selectors";
import {searchActions} from "../../../store/search";
import {getSearchSelector} from "../../../store/search/search.selectors";

export const Search: React.FC = () => {
  const dispatch = useDispatch();

  const token = useSelector(
    (state: RootState) => getUserToken(state))

  const searchResults = useSelector(
    (state: RootState) => getSearchSelector(state)?.result?.artists?.items
  )

  useEffect(() => {
    dispatch(searchActions.search())
  }, [token])

  return (
    <>
      <h1>Search</h1>
      <ul>
        {searchResults ? searchResults.map((item: any, k: any) => {
          return (
            <li key={k}>{item?.name}</li>
          )
        }) : null}
      </ul>
    </>
  )
}
