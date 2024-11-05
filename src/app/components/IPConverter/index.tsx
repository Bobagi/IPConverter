'use client';
import React, { useState } from 'react';
import { Input, Button, Card } from 'antd';
import './style.css';

const IPConverter: React.FC = () => {
    const [ip, setIp] = useState<string>('');
    const [converted, setConverted] = useState<{
        decimal: string;
        hexadecimal: string;
        binary: string;
    } | null>(null);

    const handleConvert = () => {
        const octets = ip.split('.').map(Number);
        const decimal = octets.join('.');
        const hexadecimal = octets
            .map((octet) => octet.toString(16).padStart(2, '0'))
            .join('.');
        const binary = octets
            .map((octet) => octet.toString(2).padStart(8, '0'))
            .join('.');

        setConverted({ decimal, hexadecimal, binary });
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
                    Converter
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
