const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

const asDigIn = (d, base) => {
    return digits[d];
};

const digVal = d => {
    return digits.indexOf(d);
};

export const convDec = (n, base) => {
    let dec = Number(n);
    let vars = {}
    if (Array.isArray(base)) { vars = base[1]; base = base[0]; }
    if (Object.hasOwn(vars, 'de')) {
        const nu = base;
        const de = vars.de;
        let places = [];
        while (dec > 0) {
            places.push(dec % nu);
            dec = Math.floor(dec / nu) * de;
        }
        return places.map(el => digits[el]).reverse().join('') || 0;
    }
    return dec.toString(base).toUpperCase();
};

export const toDec = (n, base) => {
    let result = 0;
    for (let i = 0; i < n.length; i++) {
        let digit = digVal(n[i]);
        result = result * base + digit;
    }
    return result;
};