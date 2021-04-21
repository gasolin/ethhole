export function getTimeStamp(tag = false) {
  const now = new Date()
  return tag ? now.toISOString().split('T')[0] : now.toISOString()
}

export function getTimeTag(day, timestamp) {
  const date = new Date(timestamp)
  let time
  switch(day) {
    case 'yesterday':
      time = date.setDate(date.getDate() - 1)
      break
    case 'week':
      time = date.setDate(date.getDate() - 7)
      break
    case 'month':
      time = date.setDate(date.getDate() - 30)
      break
    case 'today':
    default:
      time = date
      break
  }
  return time.toISOString().split('T')[0]
}
