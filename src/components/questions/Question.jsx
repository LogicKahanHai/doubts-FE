import React from 'react';

const Question = ({ user }) => {
    let date = new Date(user.time);
    let showDate = date.toDateString();
    const showTime = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const amOrPm = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }).slice(-2);
    return (
        <div className="question-card">
            <div className="user-details">
                {/* <img src={user.avatar} alt={user.name} className="avatar" /> */}

                <span className="username"><strong>{user.name}</strong> - <i>{showDate} @ {showTime} {amOrPm}</i></span>
            </div>
            <div className="question-text">{user.msg}</div>
        </div>
    );
};

export default Question;
