import React from 'react';
import './MainView.scss';

export const MainView: React.FC = () => {
  return (
    <div className="Root__main-view">
      <div className="main-view-container">
        <section>
          <div className="contentSpacing">
            <section>
              <div className="grid">
                <div className="title">
                  <h2>Shortcuts</h2>
                </div>
              </div>
            </section>
          </div>
        </section>
      </div>
    </div>
  )
}
