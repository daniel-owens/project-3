import React, { Component } from 'react';
import "./LessonPlans.css";

class LessonPlans extends Component {
    
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
          <div className={"sidenav"}>
            <div className={"lesson-plan-container"}>
               <h2 className={"lesson-header"}>LESSON PLANS</h2>
               <hr></hr>
                <div id={"lesson-plan-pdfs"}>
                  <a href={"images/crlp.pdf"} target="_blank">CULTURALLY RELEVANT LESSON PLAN
                    <div className="crlp">
                      <img src={"images/lesson-plan.jpg"} />
                    </div>  
                  </a>
                </div>
                <hr></hr>
                <div id={"lesson-plan-pdfs"}>
                  <a href={"images/3-4-3-lessonplan.pdf"} target="_blank">3-4-3 LESSON PLAN
                    <div className="three-four-three">
                      <img src={"images/lesson-plan1.jpg"} />
                    </div>  
                  </a>
                </div>
            </div>
          </div>  
        );
    }
}

export default LessonPlans;



  