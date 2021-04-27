import { useEffect, useState } from "react"
import { getTimeTag } from '../helpers/formatDate'

export const useChainData = () => {
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
        const tag = timestamp
          ? getTimeTag('today', new Date(timestamp))
          : getTimeTag('yesterday', new Date())
        const res =  await fetch(`${baseUrl}/main/src/data/${tag}.json`)
        const chainData = await res.json()
        setData(JSON.stringify(chainData))
      } catch (e) {
        console.error(e.message)
      }
    }

    timestamp && fetchData()
  }, [timestamp])
console.log('timestamp ', timestamp)

  return [JSON.parse(data), timestamp]
}
