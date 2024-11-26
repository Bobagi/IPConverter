"use client";
import React, { useState } from "react";
import { Input, Button, Card } from "antd";
import "./style.css";
import { convertIP } from "@/app/utils/ConvertionUtils";
import IPCard from "../IPCard";

const IPConverter: React.FC = () => {
  const [ip, setIp] = useState<string>("");
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
        <div className="converted-container">
          <IPCard title="Decimal" value={converted.decimal} />
          <IPCard title="Hexadecimal" value={converted.hexadecimal} />
          <IPCard title="Binary" value={converted.binary} />
        </div>
      )}
    </Card>
  );
};

export default IPConverter;
