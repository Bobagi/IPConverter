'use client';
import React, { useState } from 'react';
import { Input, Button, Card } from 'antd';
import './style.css';
import { convertIP } from '@/app/utils/ConvertionUtils';

const IPConverter: React.FC = () => {
    const [ip, setIp] = useState<string>('');
    const [converted, setConverted] = useState<{
        decimal: string;
        hexadecimal: string;
        binary: string;
    } | null>(null);

    const handleConvert = () => {
        const result = convertIP(ip);
        setConverted(result);
    };

    return (
        <Card className="card">
            <Input
                placeholder="IP to Convert (ex: 192.168.0.1)"
                value={ip}
                onChange={(e) => setIp(e.target.value)}
                className="input"
            />
            <div className="button-container">
                <Button
                    type="primary"
                    onClick={handleConvert}
                    className="button"
                >
                    Do the magic!
                </Button>
            </div>
            {converted && (
                <div>
                    <p>Decimal: {converted.decimal}</p>
                    <p>Hexadecimal: {converted.hexadecimal}</p>
                    <p>Binário: {converted.binary}</p>
                </div>
            )}
        </Card>
    );
};

export default IPConverter;
