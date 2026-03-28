export const convDec = (n, base) => {
    return n.toString(base)
};

export const toDec = (n, base) => {
    let result = 0;
    for (let i = 0; i < n.length; i++) {
        let digit = parseInt(n[i], 10);
        result = result * base + digit;
    }
    return result;
};