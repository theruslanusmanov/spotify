import React from 'react'
import './TopBar.scss'

export const TopBar: React.FC = () => (
  <div className="top-bar">
    <button>
      <svg
        role="img"
        focusable="false"
        height="24"
        width="24"
        viewBox="0 0 24 24"
      >
        <polyline
          points="16 4 7 12 16 20"
          fill="none"
          stroke="#fff"
        />
      </svg>
    </button>
    <button>
      <svg
        role="img"
        focusable="false"
        height="24"
        width="24"
        viewBox="0 0 24 24"
      >
        <polyline
          points="8 4 17 12 8 20"
          fill="none"
          stroke="#fff"
        />
      </svg>
    </button>
  </div>
)
