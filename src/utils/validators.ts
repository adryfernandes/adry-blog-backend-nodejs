/**
 * Verifica se a string é um hexadecimal
 * @param str
 * @returns
 */
export const validateHexadecimalCode = (str: string): boolean => {
  const regex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
  return regex.test(str);
};
