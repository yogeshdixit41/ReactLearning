import React from 'react';

const CommentDetail = props => {
    console.log(props);
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={props.detail.avatarUrl}/>
            </a>
            <div className="content">
                <a href="/" className="author">
                    {props.detail.author}
                </a>
                <div className="metadata">
                    <span className="date">{props.detail.timeStamp}</span>
                </div>
                <div className="text">{props.detail.text}</div>
            </div>
        </div>
    );
};

export default CommentDetail;
