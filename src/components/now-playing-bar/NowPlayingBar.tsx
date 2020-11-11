import React from 'react'
import './NowPlayingBar.scss'
import {RootState} from "../../store/root.state";
import {connect, ConnectedProps} from "react-redux";
import {pause, play} from "../../store/player/player.actions";

const mapState = (state: RootState) => ({
    isPlaying: state.player.isPlaying
})

const mapDispatch = {
    play: () => play(),
    pause: () => pause(),
}

const connector = connect(mapState, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux

const NowPlayingBar: React.FC<Props> = (props: Props) => {
    return (
        <div className="now-playing-bar">
            <div className="now-playing-bar__left">
                <div className="now-playing__cover-art"></div>
                <div className="now-playing__song">
                    <div className="now-playing__song__name">Soneg name</div>
                    <div className="now-playing__song__author">Song Author</div>
                </div>
            </div>
            <div className="now-playing-bar__center">
                <div className="now-playing__controls">
                    <div className="now-playing__controls__top">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24"
                             viewBox="0 0 24 24" width="24">
                            <path d="M0 0h24v24H0z" fill="none"/>
                            <path
                                fill="#fff"
                                d="M10.59 9.17L5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41l-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24"
                             viewBox="0 0 24 24" width="24">
                            <path d="M0 0h24v24H0z" fill="none"/>
                            <path fill="#fff" d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/>
                        </svg>
                        {
                            props.isPlaying
                                ?
                                <svg
                                    onClick={() => props.pause()}
                                    xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                                    <path d="M0 0h24v24H0z" fill="none"/>
                                    <path
                                        fill="#fff"
                                        d="M9 16h2V8H9v8zm3-14C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-4h2V8h-2v8z"/>
                                </svg>
                                :
                                <svg onClick={() => props.play()}
                                     xmlns="http://www.w3.org/2000/svg" height="24"
                                     viewBox="0 0 24 24" width="24">
                                    <path d="M0 0h24v24H0z" fill="none"/>
                                    <path
                                        fill="#fff"
                                        d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                                </svg>
                        }
                        <svg xmlns="http://www.w3.org/2000/svg" height="24"
                             viewBox="0 0 24 24" width="24">
                            <path d="M0 0h24v24H0z" fill="none"/>
                            <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" fill="#fff"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24"
                             viewBox="0 0 24 24" width="24">
                            <path d="M0 0h24v24H0z" fill="none"/>
                            <path
                                fill="#fff"
                                d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z"/>
                        </svg>
                    </div>
                    <div className="playback-bar">
                        <div className="playback-bar__progress-time">0:00</div>
                        <div className="progress-bar"></div>
                        <div className="playback-bar__progress-time">2:34</div>
                    </div>
                </div>
            </div>
            <div className="now-playing-bar__right">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24"
                     width="24">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path
                        fill="#fff"
                        d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                </svg>
                <div className="progress-bar" style={{width: "40px"}}></div>
            </div>
        </div>
    )
}

export default connector(NowPlayingBar)
