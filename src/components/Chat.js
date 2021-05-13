import React, { useEffect, useState } from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import './Chat.css';

function Chat() {
    const [seed, setSeed] = useState('');

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, [])

    return (
        <div className='chat'>
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                <div className="chat__headerInfo">
                    <h2>Room name</h2>
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

            </div>
        </div>
    )
}

export default Chat;
