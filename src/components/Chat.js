import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Avatar, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';

import './Chat.css';
import db from '../firebase';

function Chat() {
    const { roomId } = useParams();
    const [input, setInput] = useState('');
    const [seed, setSeed] = useState('');
    const [roomName, setRoomName] = useState('');

    useEffect(() => {
        if (roomId) {
            db.collection('chatrooms').doc(roomId).onSnapshot(snapshot => (
                setRoomName(snapshot.data().name)
            ))
        }
    }, [roomId])

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, [roomId])

    const sendMessage = e => {
        e.preventDefault();
        console.log(input);
    }

    return (
        <div className='chat'>
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                <div className="chat__headerInfo">
                    <h2>{roomName}</h2>
                    <p>Last seen at...</p>
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
                <p className="chat__message chat__reciever">
                    <span className="chat__name">
                        Bob Doe
                    </span>
                    Hello world
                    <span className="chat__timestamp">
                        3:51pm
                    </span>
                </p>
                <p className="chat__message">
                    <span className="chat__name">
                        Bot
                    </span>
                    ?
                    <span className="chat__timestamp">
                        3:56pm
                    </span>
                </p>
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
