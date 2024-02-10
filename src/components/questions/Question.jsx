import React from 'react';

const Question = ({ user }) => {
    let date = new Date(user.time);
    let showDate = date.toDateString();
    let showTime = date.toLocaleTimeString().replace(/:\d+ /, ' ');
    return (
        <div className="question-card">
            <div className="user-details">
                {/* <img src={user.avatar} alt={user.name} className="avatar" /> */}
                <span className="username"><strong>{user.name}</strong> - <i>{showDate} @ {showTime}</i></span>
            </div>
            <div className="question-text">{user.msg}</div>
        </div>
    );
};

export default Question;
