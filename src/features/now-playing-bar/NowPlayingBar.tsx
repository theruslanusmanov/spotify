import React from 'react'
import './NowPlayingBar.scss'

export const NowPlayingBar: React.FC = () => {
  return (
    <div className="Root__now-playing-bar">
      <footer className="now-playing-bar-container"
              data-testid="now-playing-bar-ad-type-none">
        <div className="now-playing-bar" role="complementary">
          <div className="now-playing-bar__left">
            <div className="now-playing" role="contentinfo"
                 aria-label="Now playing: HOME by Baauer, Bipolar Sunshine">
              <div data-testid="CoverSlotCollapsed__container"
                   className="cdcb31cb77ef60299919c13b5735bb48-scss"
                   aria-hidden="false">
                <div draggable="true"><a
                  aria-label="Now playing: HOME by Baauer, Bipolar Sunshine"
                  href="/playlist/37i9dQZF1DXaIrEwuQ3hyy">
                  <div className="now-playing__cover-art">
                    <div className="cover-art shadow" aria-hidden="true">
                      <div>
                        <div className="icon">
                          <svg width="52" height="52" viewBox="0 0 52 52"
                               xmlns="http://www.w3.org/2000/svg"><title>Add
                            Song Icon</title>
                            <path
                              d="M26 0C11.64 0 0 11.643 0 26c0 14.36 11.64 26 26 26s26-11.64 26-26S40.36 0 26 0zm0 50C12.767 50 2 39.234 2 26S12.767 2 26 2c13.234 0 24 10.766 24 24S39.234 50 26 50zm0-32c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.58-8-8-8zm0 14c-3.308 0-6-2.69-6-6s2.692-6 6-6 6 2.69 6 6-2.69 6-6 6z"
                              fill="currentColor" fill-rule="evenodd"></path>
                          </svg>
                        </div>
                        <img aria-hidden="false" draggable="false"
                             loading="eager"
                             src="https://i.scdn.co/image/ab67616d000048510cb2833df681f7c7fffe0b3f"
                             alt=""
                             className="_64acb0e26fe0d9dff68a0e9725b2a920-scss cover-art-image"/>
                      </div>
                    </div>
                  </div>
                </a>
                </div>
                <button className="_9329f4018e3f8175af6dd8af74580f3b-scss"
                        aria-label="Expand">
                  <svg height="24" role="img" width="24" viewBox="0 0 24 24"
                       className="a579ecb030fe9f96fabfba7dbb775251-scss">
                    <polygon
                      points="15.54,21.151 5.095,12.229 15.54,3.309 16.19,4.069 6.635,12.229 16.19,20.39 "></polygon>
                  </svg>
                </button>
              </div>
              <div
                className="_5c9e3ef76ffc5bc2927fdf51d789e2e6-scss ellipsis-one-line">
                <div
                  className="_3773b711ac57b50550c9f80366888eab-scss ellipsis-one-line"
                  dir="auto">
                  <div className="react-contextmenu-wrapper"><span
                    draggable="true"><a data-testid="nowplaying-track-link"
                                        href="/album/6uqNRIEzOXHDQRTXsOBqSW">HOME</a></span>
                  </div>
                </div>
                <div
                  className="b6d18e875efadd20e8d037931d535319-scss ellipsis-one-line"
                  dir="auto"><span><span
                  className="react-contextmenu-wrapper"><span
                  draggable="true"><a
                  href="/artist/25fqWEebq6PoiGQIHIrdtv">Baauer</a></span></span></span><span>, <span
                  className="react-contextmenu-wrapper"><span
                  draggable="true"><a href="/artist/0CjWKoS55T7DOt0HJuwF1H">Bipolar Sunshine</a></span></span></span>
                </div>
              </div>
              <div className="control-button-wrapper">
                <div className="control-button control-button-heart">
                  <button type="button"
                          className="_07bed3a434fa59aa1852a431bf2e19cb-scss"
                          title="Save to Your Library">
                    <div className="spoticon-heart-16"></div>
                  </button>
                </div>
              </div>
              <div className="now-playing__pip-toggle">
                <button className="picture-in-picture-button control-button">
                  <div className="icon">
                    <svg width="16" height="16"
                         xmlns="http://www.w3.org/2000/svg">
                      <g fill="currentColor" fill-rule="evenodd">
                        <path
                          d="M1 3v9h14V3H1zm0-1h14a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"
                          fill-rule="nonzero"></path>
                        <path d="M10 8h4v3h-4z"></path>
                      </g>
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="now-playing-bar__center">
            <div className="player-controls" dir="ltr" role="complementary"
                 aria-label="Player controls">
              <div className="player-controls__buttons">
                <div className="control-button-wrapper">
                  <button className="control-button spoticon-shuffle-16"
                          data-testid="control-button-shuffle"
                          title="Enable shuffle"></button>
                </div>
                <div className="control-button-wrapper">
                  <button className="control-button spoticon-skip-back-16"
                          data-testid="control-button-skip-back"
                          title="Previous"></button>
                </div>
                <div className="control-button-wrapper">
                  <button
                    className="control-button spoticon-play-16 control-button--circled"
                    data-testid="control-button-play" title="Play"></button>
                </div>
                <div className="control-button-wrapper">
                  <button className="control-button spoticon-skip-forward-16"
                          data-testid="control-button-skip-forward"
                          title="Next"></button>
                </div>
                <div className="control-button-wrapper">
                  <button className="control-button spoticon-repeat-16"
                          data-testid="control-button-repeat"
                          title="Enable repeat"></button>
                </div>
              </div>
              <div className="playback-bar">
                <div
                  className="playback-bar__progress-time _5f899d811cf206c5925f6450626fb0aa-scss">0:00
                </div>
                <div className="progress-bar">
                  <div className="middle-align progress-bar__bg">
                    <div className="progress-bar__fg_wrapper">
                      <div className="progress-bar__fg"></div>
                    </div>
                    <button aria-label="Change progress"
                            className="middle-align progress-bar__slider"></button>
                  </div>
                </div>
                <div className="playback-bar__progress-time _5f899d811cf206c5925f6450626fb0aa-scss">
                  2:50
                </div>
              </div>
            </div>
          </div>
          <div className="now-playing-bar__right">
            <div className="ExtraControls">
              <div className="GlueDropTarget GlueDropTarget--tracks">
                <div className="control-button-wrapper">
                  <button className="control-button spoticon-queue-16"
                          data-testid="control-button-undefined"
                          title="Queue"></button>
                </div>
              </div>
              <div className="ExtraControls__connect-device-picker"><span
                className="connect-device-picker"><button
                className="spoticon-devices-16 control-button"
                aria-label="Connect to a device"></button></span></div>
              <div className="volume-bar" dir="ltr">
                <button
                  className="spoticon-volume-16 control-button volume-bar__icon"
                  aria-label="Mute"></button>
                <div className="progress-bar">
                  <div className="middle-align progress-bar__bg">
                    <div className="progress-bar__fg_wrapper">
                      <div className="progress-bar__fg"></div>
                    </div>
                    <button aria-label="Change volume"
                            className="middle-align progress-bar__slider"></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
