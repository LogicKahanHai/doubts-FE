import React from 'react';

const Input = ({ sender, handleChange, handleSubmit, value }) => {
    return (
        <div>
            <textarea
                className="form-control"
                name='msg'
                value={value}
                onChange={handleChange}
                rows={3}
                cols={50}
                placeholder="Ask your question here..."
            />
            <div className="d-flex justify-content-end">
                <button onClick={handleSubmit} className="btn btn-primary mt-2">Submit</button>
            </div>
        </div>
    );
};

export default Input;
