import React from 'react';
import './progressBar.css';

const ProgressBar = () => {
    // const listProp = ["Drafting", "Mentor Review", "Quality Check"];
    const listProp = [{ text: "Drafting", date: "17 May 2020" }, { text: "Mentor Review", date: "22 June 2020" }, { text: "Quality Check", date: "" }];
    const listLength = listProp.length;
    const slideWidth = 11*listLength;
    const slideWidthStyle = {
        width: `${slideWidth}%`
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
                        <p key={list.text} className={list.text==='Quality Check'? "Quality": "list"} >
                            {list.text} {list.date}
                        </p>
                    ))
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
                       listProp.map(list=>  <div className="circle"></div>)
                    }
                 
                </div>
            </div>
        </div>
    )
}



export default ProgressBar;