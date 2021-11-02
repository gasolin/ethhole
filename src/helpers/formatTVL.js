import human from 'millify'

export function getTVL(amount, price, /* optional */ token) {
  if (amount > 100000000) {
    console.warn(token, 'has unusual amount', amount)
  }
  return human(amount * price)
}
