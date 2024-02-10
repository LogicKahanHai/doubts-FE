import React from 'react';
import Question from './Question';



const Questions = ({ questions }) => {
    return (
        <div className='mt-3' style={{ overflowY: 'auto', maxHeight: '55vh' }}>
            {questions.map((question) => (
                <div className='container p-3 border mb-3 rounded'>
                    <Question user={question} />
                </div>
            ))}
        </div>
    );
};

export default Questions;
