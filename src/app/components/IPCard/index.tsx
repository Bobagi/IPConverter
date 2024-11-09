import React from 'react';
import { Card, Button, message } from 'antd';
import './style.css';

interface IPCardProps {
    title: string;
    value: string;
}

const IPCard: React.FC<IPCardProps> = ({ title, value }) => {
    const handleCopy = () => {
        navigator.clipboard.writeText(value);
        message.success('Copied to clipboard!');
    };

    return (
        <Card
            title={title}
            className="ip-card"
            extra={<Button onClick={handleCopy}>Copy</Button>}
        >
            <p>{value}</p>
        </Card>
    );
};

export default IPCard;
