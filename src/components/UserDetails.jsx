import React, { useState } from 'react';

function UserDetails({ addSender, prevName, prevEmail }) {
    const [name, setName] = useState(prevName ? prevEmail : '');
    const [email, setEmail] = useState(prevEmail ? prevEmail : '');


    const handleSubmit = (e) => {
        e.preventDefault();
        addSender(name, email);
        let overlay = document.getElementById('overlay');
        overlay.style.display = 'none';
    }

    return (
        <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '10px',
        }}>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Registration No:</label>
                    <input
                        type="number"
                        className="form-control"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary mt-2">Submit</button>
            </form>
        </div>
    );
}

export default UserDetails;
