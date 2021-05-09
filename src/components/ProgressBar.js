import React from 'react';
import './progressBar.css';

const ProgressBar = () => {
    return (
        <div className="progress-parent">
            <div className="progress-details">
               <p className="drafting-date"> 
                   Drafting 17 May 20
               </p>
               <p className="mentor-review-date"> 
                   Mentor Review 22 Jun 20
               </p>
               <p className="quality-check"> 
                   Quality Check
               </p>
            </div>
            <div className="progressbar">
                <div className="bar-width">
                    <div className="circle-start"></div>
                    <div className="circle-mid"></div>
                    <div className="circle-end"> </div>
                </div>
            </div>
        </div>
    )
}

export default ProgressBar;