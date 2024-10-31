'use client';
import React, { useState } from 'react';
import { Input, Button, Card } from 'antd';

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
        <Card style={{ backgroundColor: '#1d1d1d', color: '#fff' }}>
            <Input
                placeholder="Digite o endereço IP (ex: 192.168.0.1)"
                value={ip}
                onChange={(e) => setIp(e.target.value)}
                style={{ marginBottom: 10 }}
            />
            <Button
                type="primary"
                onClick={handleConvert}
                style={{ marginBottom: 20 }}
            >
                Converter
            </Button>
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
