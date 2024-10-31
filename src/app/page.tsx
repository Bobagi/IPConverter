import React from 'react';
import IPConverter from './components/IPConverter';

const Home: React.FC = () => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                backgroundColor: '#121212',
            }}
        >
            <IPConverter />
        </div>
    );
};

export default Home;
