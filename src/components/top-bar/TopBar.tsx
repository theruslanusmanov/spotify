import React from 'react'
import './TopBar.scss'

export const TopBar: React.FC = () => {
  return (
    <div className="top-bar">
      <button>
        <svg role="img" focusable="false" height="24" width="24"
             viewBox="0 0 24 24"
             className="Svg-sc-1usfroi-0 fOBQdj _6fe5d5efc9b4a07d5c424071ac7cdacb-scss">
          <polyline points="16 4 7 12 16 20" fill="none"
                    stroke="#fff"></polyline>
        </svg>
      </button>
      <button>
        <svg role="img" focusable="false" height="24" width="24"
             viewBox="0 0 24 24"
             className="Svg-sc-1usfroi-0 fOBQdj _6fe5d5efc9b4a07d5c424071ac7cdacb-scss">
          <polyline points="8 4 17 12 8 20" fill="none"
                    stroke="#fff"></polyline>
        </svg>
      </button>
    </div>
  )
}
