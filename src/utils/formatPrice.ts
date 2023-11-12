export function formatPrice(price: number) {
  return Number(price).toLocaleString("es-ES", {
    style: "currency",
    currency: "EUR",
  });
}
