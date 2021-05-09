import React from 'react';
import ProgressBar from './components/ProgressBar';
import "./styles.css";

export default function App() {
  return (
    <div className="container">
      <div className="timeline-header">
        <h3 className="timeline">Timeline</h3>
        <ul className="header-links">
          <li className="reminder"><i className="fa fa-bell-o mx-5" aria-hidden="true"></i>Reminder</li>
          <li className="history"><i className="fa fa-history mx-5" aria-hidden="true"></i>History</li>
        </ul>
      </div>
      <div className="progress-component">

        <ProgressBar/>
      </div>
    </div>
  );
}
