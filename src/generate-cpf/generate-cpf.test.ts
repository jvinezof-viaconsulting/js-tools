import { generateCpf } from "./generate-cpf";

describe("generateCpf test suit", () => {
  it("should generate a CPF with 11 digits when no options are provided", () => {
    const cpf = generateCpf();

    expect(cpf).toHaveLength(11);
    expect(cpf).toMatch(/^\d{11}$/);
  });

  it("should generate a formatted CPF when options.formatted is true", () => {
    const cpf = generateCpf({ formatted: true });

    expect(cpf).toHaveLength(14);
    expect(cpf).toMatch(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/);
  });
});
