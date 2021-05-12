import React from 'react';
import './progressBar.css';

const ProgressBar = () => {
    const listProp = ["Drafting", "Mentor Review", "Quality Check"];
    const dateProps=["17 May 2020", "22 June 2020"]
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
    // const FirstFilteredList = listProp.filter(list => {
    //     return list.text === "Quality Check"
    // });
    // const SecondFilteredList = listProp.filter(list => {
    //     return list != "Quality Check"
    // });



    return (
        <div className="progress-parent">
            <div className="progress-details" style={slideWidthStyle}>
                {/* {SecondFilteredList.map(list => {
                   return <p className="list-second">{list}</p>
               })}
               {FirstFilteredList.map(list => {
                   return <p className="list-first">{list}</p>
               })} */}
                {
                   listProp && listProp.map((list) => (
                        <p key={list} className={list==='Quality Check'? "Quality": "list"} >
                            {list} 
                        </p>
                    ))
                }
            </div>
                <div className="list dateList my-0" style={dateWidthStyle}>

                {
                   dateProps && dateProps.map((date) =><span key={date}>{date}</span>)
                }
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
                    {
                       listProp.map(list=>  <div key={list} className="circle"></div>)
                    }
                 
                </div>
            </div>
        </div>
    )
}



export default ProgressBar;