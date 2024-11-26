import React from 'react';
import IPConverter from './components/IPConverter';
import { ConfigProvider } from 'antd';

const Home: React.FC = () => {
    return (
      <ConfigProvider
        componentSize="large"
        theme={{
          token: {
            colorPrimary: "#FFA500",
            colorPrimaryBorder: "#FFA500",
            colorPrimaryHover: "#b97f14",
            colorPrimaryActive: "#FFA500",
            colorBgContainer: "#121212",
            colorBorder: "#d9d9d9",
            colorPrimaryBg: "#FFA500",
            colorText: "#d9d9d9",
          },
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            backgroundColor: "#121212",
          }}
        >
          <IPConverter />
        </div>
      </ConfigProvider>
    );
};

export default Home;
