import { useEffect, useState } from "react"
import { getTimeTag } from '../helpers/formatDate'

// comment out for debug
// import debugData from '../data/2021-06-05.json'
const debugData = ''

const DAY_WHITELIST = ['yesterday']

export const useChainData = (day) => {
  const [data, setData] = useState('{}')
  const [timestamp, setTimestamp] = useState('')
  const baseUrl = 'https://raw.githubusercontent.com/gasolin/ethhole'

  useEffect(() => {
    async function fetchTimestamp() {
      try {
        const result = await fetch(`${baseUrl}/main/src/data/data.json`)
        const data = await result.json()
        setTimestamp(data.lastUpdate)
      } catch (e) {
        console.error(e.message)
      }
    }

    fetchTimestamp()
  }, [])

  useEffect(() => {
    async function fetchData() {
      try {
        if (debugData) {
          setData(JSON.stringify(debugData))
        } else {
          const tag = DAY_WHITELIST.includes(day)
            ? timestamp
              ? getTimeTag(day, new Date(timestamp))
              :getTimeTag(day, new Date())
            : timestamp
              ? getTimeTag('today', new Date(timestamp))
              : getTimeTag('yesterday', new Date())
          // console.warn('time ', tag)
          const res =  await fetch(`${baseUrl}/main/src/data/${tag}.json`)
          const chainData = await res.json()
          setData(JSON.stringify(chainData))
        }
      } catch (e) {
        console.error(e.message)
      }
    }

    timestamp && fetchData()
  }, [timestamp, day])

  // console.log('timestamp ', timestamp)
  return [JSON.parse(data), timestamp]
}
