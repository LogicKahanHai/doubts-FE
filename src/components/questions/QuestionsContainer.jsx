import React from 'react';
import Input from './Input';
import { useState, useEffect } from 'react';
import Questions from './Questions';
import axios from 'axios';
import io from 'socket.io-client';

const socket = io("http://13.233.79.221:3000"); // Connect to the server
console.log(socket);

// const questions = [
//     {
//         name: "Anonymous",
//         text: 'What is your favorite color?',
//     },
//     {
//         name: "Anonymous",
//         text: 'What is your favorite food?',
//     },
//     // Add more dummy questions here...
// ];
const QuestionsContainer = () => {
    const [value, setValue] = useState('');
    const [sender, setSender] = useState({
        name: "Anonymous",
        msg: "",
        email: "i.love.aws@gmail.com"
    });

    const [questions, setQuestions] = useState([]);
    const [connected, setConnected] = useState(false);

    const handleSubmit = (e) => {
        if (sender.msg) {
            console.log(sender);
            socket.emit("newMessage", sender);
            setQuestions((prevMessages) => [...prevMessages, sender]);
            setSender({ ...sender, msg: "" });
        }
        setValue('');
    }

    const updateSender = (e) => {
        console.log(e.target);
        setSender({ ...sender, [e.target.name]: e.target.value });
        console.log(sender);
        handleSubmit(e);
    }

    const handleChange = (e) => {
        setSender({ ...sender, [e.target.name]: e.target.value });
        setValue(e.target.value);
    }

    useEffect(() => {

        axios.get("http://13.233.79.221:3000/loadMsgs").then((res) => {
            setQuestions(res.data);
        });

        // Listen for "connected" event from the server
        socket.on("connected", (message) => {
            console.log(message); // Log the message from the server
            setConnected(true);
        });

        // Listen for "disconnect" event from the server
        socket.on("disconnect", () => {
            setConnected(false);
        });

        // Listen for "newMessage" events from the server
        socket.on("newMessage", (msg) => {
            setQuestions((prevMessages) => [...prevMessages, msg]);
        });

        // Clean up event listeners when component unmounts
        return () => {
            socket.off("connected");
            socket.off("disconnect");
            socket.off("newMessage");
        };
    }, []);

    return (
        <div className='mb-4'>
            {connected ? (
                <p>Connected to server</p>
            ) : (
                <p>Disconnected from server</p>
            )}
            <Input handleChange={handleChange} handleSubmit={updateSender} value={value} />
            <Questions questions={questions} />
        </div>
    );
};

export default QuestionsContainer;
