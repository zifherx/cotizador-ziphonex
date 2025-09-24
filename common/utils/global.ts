export const formatPriceForPEN = (
  amount: number,
  includeDecimals: boolean = true
): string => {
  if (isNaN(amount)) {
    throw new Error("El monto debe ser un número válido");
  }

  const formatter = new Intl.NumberFormat("es-PE", {
    style: "currency",
    currency: "PEN",
    minimumFractionDigits: includeDecimals ? 2 : 0,
    maximumFractionDigits: includeDecimals ? 2 : 0,
  });

  return formatter.format(amount);
};
