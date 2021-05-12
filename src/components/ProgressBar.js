import React from 'react';
import './progressBar.css';

const ProgressBar = () => {
    const listProp = ["Drafting", "Mentor Review","Quality Check"];
    const dateProps=["17 May 2020", "25 june 20"]
    const listLength = listProp.length;
    const dateLength=dateProps.length;
    const dateWidth = 11*dateLength;
    const slideWidth = 11*listLength;
    const slideWidthStyle = {
        width: `${slideWidth}%`
    }
    const dateWidthStyle = {
        width: `${dateWidth}%`
    }

    return (
        <div className="progress-parent">
            <div className="progress-details" style={slideWidthStyle}>
                {
                   listProp && listProp.map((list) => (
                        <p key={list} className={list==='Quality Check'? "Quality": "list"} >
                            {list} 
                        </p>
                    ))
                }
            </div>
                <div className=" dateList my-0" style={dateWidthStyle}>

                {
                   dateProps && dateProps.map((date) =><span key={date}>{date}</span>)
                }
                </div>
            <div className="progressbar ">
                <div className="bar-width" style={slideWidthStyle}>
                    {
                       listProp.map(list=>  <div key={list} className="circle"></div>)
                    }
                 
                </div>
            </div>
        </div>
    )
}

export default ProgressBar;