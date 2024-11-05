import React from 'react';
import IPConverter from './components/IPConverter';
import { ConfigProvider } from 'antd';

const Home: React.FC = () => {
    return (
        <ConfigProvider
            componentSize="large"
            theme={{
                token: {
                    colorPrimary: '#FFA500',
                },
            }}
        >
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
        </ConfigProvider>
    );
};

export default Home;
