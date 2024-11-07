export const convertToDecimal = (ip: string) => {
    const octets = ip.split('.').map(Number);
    return octets.join('.');
};

export const convertToHexadecimal = (ip: string) => {
    const octets = ip.split('.').map(Number);
    return octets.map((octet) => octet.toString(16).padStart(2, '0')).join('.');
};

export const convertToBinary = (ip: string) => {
    const octets = ip.split('.').map(Number);
    return octets.map((octet) => octet.toString(2).padStart(8, '0')).join('.');
};

export const convertIP = (ip: string) => {
    return {
        decimal: convertToDecimal(ip),
        hexadecimal: convertToHexadecimal(ip),
        binary: convertToBinary(ip),
    };
};
