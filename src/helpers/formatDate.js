import { timestamp } from '../data/data'

export function getTimeStamp(tag = false) {
  const now = new Date()
  return tag ? now.toISOString().split('T')[0] : now.toISOString()
}

export function getTodayTag() {
  return (new Date(timestamp)).toISOString().split('T')[0]
}
