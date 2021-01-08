import React, {useEffect} from 'react'
import './Tracks.scss'
import {useDispatch, useSelector} from "react-redux";
import {tracksActions} from "../../../store/tracks";
import {RootState} from "../../../store/root.state";
import {getTracksItemsSelector} from "../../../store/tracks/tracks.selectors";

export const Tracks: React.FC = () => {
  const dispatch = useDispatch();
  const tracks = useSelector((state: RootState) => getTracksItemsSelector(state))

  useEffect(() => {
    dispatch(tracksActions.loadTracks())
  }, [])

  useEffect(() => {
    console.log(tracks);
  }, [tracks])

  return (
    <>
      <h1>Tracks</h1>
      <ul>
        {tracks ? tracks.map((track: any, k: any) => {
          return (
            <li key={k}>{track?.track?.name}</li>
          )
        }) : null}
      </ul>
    </>
  )
}
