import React from 'react';
import { useState } from 'react';

const Input = ({ sender, handleChange, handleSubmit, value }) => {
    const [slowmode, setSlowmode] = useState(false);

    const handleSlowmode = (e) => {
        handleSubmit(e);
        setSlowmode(true);
        setTimeout(() => {
            setSlowmode(false);
        }, 60000);
    }

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
                <button disabled={slowmode} onClick={handleSlowmode} className={slowmode ? "btn btn-disabled mt-2" : "btn btn-primary mt-2"}>{slowmode ? "Slowmode active..." : "Submit"}</button>
            </div>
        </div>
    );
};

export default Input;
