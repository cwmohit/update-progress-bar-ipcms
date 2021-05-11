import React from 'react';
import './progressBar.css';

const ProgressBar = () => {
    const listProp = ["Drafting","Mentor Review","Quality Check"];
    const listLength = listProp.length;
    const slideWidth = 100/listLength;
    const slideWidthStyle = {
        width: `${slideWidth}%`
    }

    const FirstFilteredList = listProp.filter(list => {
        return list === "Quality Check"
    });
    const SecondFilteredList = listProp.filter(list => {
        return list != "Quality Check"
    });
    
    return (
        <div className="progress-parent">
            <div className="progress-details">
               {SecondFilteredList.map(list => {
                   return <p className="list-second">{list}</p>
               })}
               {FirstFilteredList.map(list => {
                   return <p className="list-first">{list}</p>
               })}
            </div>
            {/* <div className="progress-details">
               <p className="drafting-date"> 
                   Drafting 17 May 20
               </p>
               <p className="mentor-review-date"> 
                   Mentor Review 22 Jun 20
               </p>
               <p className="quality-check"> 
                   Quality Check
               </p>
            </div> */}
            <div className="progressbar">
                <div className="bar-width" style={slideWidthStyle}>
                    <div className="circle-start"></div>
                    <div className="circle-mid"></div>
                    <div className="circle-end"> </div>
                </div>
            </div>
        </div>
    )
}



export default ProgressBar;