import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Avatar, IconButton } from '@material-ui/core';
import firebase from 'firebase';
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';

import './Chat.css';
import { useStateValue } from '../StateProvider';
import db from '../firebase';

function Chat() {
    const { roomId } = useParams();
    const [{ user }, dispatch] = useStateValue();
    const [input, setInput] = useState('');
    const [seed, setSeed] = useState('');
    const [roomName, setRoomName] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        if (roomId) {
            db.collection('chatrooms').doc(roomId).onSnapshot(snapshot => (
                setRoomName(snapshot.data().name)
            ));

            db
                .collection('chatrooms')
                .doc(roomId)
                .collection('messages')
                .orderBy('timestamp', 'asc')
                .onSnapshot(snapshot => (
                    setMessages(snapshot.docs.map(doc => doc.data()))
            ));
        }
    }, [roomId])

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, [roomId])

    const sendMessage = e => {
        e.preventDefault();
        
        db.collection('chatrooms').doc(roomId).collection('messages').add({
            message: input,
            name: user.displayName,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });

        setInput("");
    }

    return (
        <div className='chat'>
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                <div className="chat__headerInfo">
                    <h2>{roomName}</h2>
                    <p>last seen {new Date(messages[messages.length - 1]?.timestamp?.toDate()).toUTCString()}</p>
                </div>

                <div className="chatheaderRight">
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>

            <div className="chat__body">
                {messages.map(message => (
                     <p className={`chat__message ${message.name === user.displayName && 'chat__reciever'}`}>
                        <span className="chat__name">
                            {message.name}
                        </span>
                        {message.message}
                        <span className="chat__timestamp">
                            {new Date(message.timestamp?.toDate()).toUTCString()}
                        </span>
                    </p>
                ))}
            </div>

            <div className="chat__footer">
                <InsertEmoticonIcon />
                <form>
                    <input
                        type="text"
                        placeholder="Type a message..."
                        value={input}
                        onChange={e => setInput(e.target.value)} />
                    <button onClick={sendMessage}>
                        Send a message
                    </button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
}

export default Chat;
