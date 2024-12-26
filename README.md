# JS Tools

A TypeScript library with useful tools, such as a CPF generator, currency converter, date and percentage calculator. Easy to use and tested with Jest!

## 📦 Installation

Use npm or another installer to install the library:

```bash
npm install js-tools
```

## 🚀 Features

### 1. CPF Generator

Generates a valid CPF with or without formatting.

**Import**
```ts
import { generateCpf } from 'my-js-tools';
```

**Use**
- No formatting (default):
```ts
const cpf = generateCpf();
console.log(cpf); // Exemplo: 12345678909
```

- Formatting:
```ts
const cpf = generateCpf({ formatted: true });
console.log(cpf); // Exemplo: 123.456.789-09
```
