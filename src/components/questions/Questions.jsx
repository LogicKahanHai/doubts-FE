import React from 'react';
import Question from './Question';



const Questions = ({ questions }) => {
    return (
        <div>
            {questions.map((question) => (
                <div className='container p-3 border mt-4 rounded'>
                    <Question user={question} />
                </div>
            ))}
        </div>
    );
};

export default Questions;
