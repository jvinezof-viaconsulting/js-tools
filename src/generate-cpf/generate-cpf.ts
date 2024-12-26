export interface GenerateCpfOptions {
  formatted?: boolean;
}

export function generateCpf(options?: GenerateCpfOptions): string {
  const randomNumbers = () => Math.floor(Math.random() * 10);
  const cpf = Array.from({ length: 9 }, randomNumbers);

  const calculateDigit = (base: number[]) => {
    const sum = base.reduce((acc, num, index) => acc + num * (base.length + 1 - index), 0);
    const digit = (sum * 10) % 11;
    return digit === 10 ? 0 : digit;
  };

  // Calculate the first verification digit
  cpf.push(calculateDigit(cpf));

  // Calculate the second verification digit
  cpf.push(calculateDigit(cpf));

  const cpfString = cpf.join('');

  if (options?.formatted) {
    return cpfString.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  }

  return cpfString;
}
