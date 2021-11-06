import human from 'millify'

import { MAX_AMOUNT } from './constants'

export function getTVL(amount, price, /* optional */ token) {
  if (amount > MAX_AMOUNT) {
    console.warn(token, 'has unusual amount', amount)
  }
  return human(amount * price)
}
