export function getTimeStamp() {
  const now = new Date()
  return now.toISOString()
}

export function getTimeTag(day, timestamp) {
  const date = new Date(timestamp)
  switch(day) {
    case 'yesterday':
      date.setDate(date.getDate() - 1)
      break
    case 'week':
      date.setDate(date.getDate() - 7)
      break
    case 'month':
      date.setDate(date.getDate() - 30)
      break
    // case 'today':
    default:
      break
  }
  return date.toISOString().split('T')[0]
}
