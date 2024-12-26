"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateCpf = generateCpf;
function generateCpf(options) {
    var randomNumbers = function () { return Math.floor(Math.random() * 10); };
    var cpf = Array.from({ length: 9 }, randomNumbers);
    var calculateDigit = function (base) {
        var sum = base.reduce(function (acc, num, index) { return acc + num * (base.length + 1 - index); }, 0);
        var digit = (sum * 10) % 11;
        return digit === 10 ? 0 : digit;
    };
    // Calculate the first verification digit
    cpf.push(calculateDigit(cpf));
    // Calculate the second verification digit
    cpf.push(calculateDigit(cpf));
    var cpfString = cpf.join('');
    if (options === null || options === void 0 ? void 0 : options.formatted) {
        return cpfString.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    }
    return cpfString;
}
