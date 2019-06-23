import React from 'react';

const ApprovalCard = props => {
    console.log(props.children);
    return (
        <div className="ui card">
            <div className="content"> {props.children} </div>
            <div classname="extra content">
                <div className="ui two buttons">
                  <div className="ui basic green button">Approve</div>
                  <div className="ui basic red button">Decline</div>
                </div>
            </div>
      </div>
    );
};

export default ApprovalCard;
