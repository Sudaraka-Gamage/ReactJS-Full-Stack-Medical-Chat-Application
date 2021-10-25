import React from 'react'
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';


import { ChannelContainer, ChannelListContainer } from './components';

const apiKey = '5j7a2ubvgtck';

const client = StreamChat.getInstance(apiKey);

const App = () => {
    return (
        <div className="app_wrapper">

            <Chat Client={client} theme="team light">

                <ChannelListContainer/>
                <ChannelContainer/>

            </Chat>
            
        </div>
    );
}

export default App
