import React from 'react';
import { FormattedDate } from 'react-intl';
import { FormattedMessage } from 'react-intl';

const name = "Shiva";
const unreadCount = 116;

const Home = () => (
    <div>
        <h2>Home</h2>
        <p>
            Today is {' '}
            <FormattedDate value={Date.now()} />
            <br/>
            <FormattedMessage
                id="welcome"
                defaultMessage={`Hello {name}, you have {unreadCount, number} {unreadCount, plural,
                    one {message}
                    other {messages}
                }`}
                values={{name: <b>{name}</b>, unreadCount}}
            />
        </p>
    </div>
);
export default Home;
