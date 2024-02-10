import React from 'react';

const Question = ({ user }) => {
    return (
        <div className="question-card">
            <div className="user-details">
                {/* <img src={user.avatar} alt={user.name} className="avatar" /> */}
                <span className="username text-bold"><strong>{user.name}</strong></span>
            </div>
            <div className="question-text">{user.msg}</div>
        </div>
    );
};

export default Question;
