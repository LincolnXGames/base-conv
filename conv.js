const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

export const convDec = (n, base) => {
    let dec = Number(n);
    let vars = {}
    if (Array.isArray(base)) { vars = base[1]; base = base[0]; }
    let negative = false;
    if (dec < 0) {
        negative = true;
        dec = Math.abs(dec);
    }

    let intP = Math.floor(dec);
    let fracP = dec - intP;

    const nu = base;
    const de = vars.de || 1;
    let precision = vars.precision || 10;

    let intPlaces = [];
    while (intP > 0) {
        intPlaces.push(intP % nu);
        intP = Math.floor(intP / nu) * de;
    }
    let result = intPlaces.map(el => digits[el]).reverse().join('') || 0

    let fracPlaces = [];
    while (fracP > 0 && precision > 0) {
        fracP *= nu / de;
        let digit = Math.floor(fracP);
        fracPlaces.push(digit);
        fracP -= digit;
        precision--;
    }
    let fracResult = fracPlaces.map(el => digits[el]).join('') || ''
    if (fracResult) result += '.' + fracResult;
    return negative ? '-'+result : result;
};

export const toDec = (n, base) => {
    if (!n || n.length === 0) return 0;

    let vars = {}
    if (Array.isArray(base)) { vars = base[1]; base = base[0]; }
    base = base / (vars.de || 1);
    const precision = vars.precision || 10;

    let negative = false;
    if (n[0] === '-') {
        negative = true;
        n = n.slice(1);
    }

    const parts = n.split('.');
    const int = parts[0];
    const frac = parts[1] || '';

    let result = 0;

    for (let i = 0; i < int.length; i++) {
        let digit = digits.indexOf(int[i]);
        result = result * base + digit;
    }

    for (let i = 0; i < frac.length; i++) {
        let digit = digits.indexOf(frac[i]);
        result += digit / base ** (i + 1);
    }
    if (negative) result = -result;

    return Number(result.toFixed(precision));
};