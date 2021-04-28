import { getTimeStamp, getTimeTag } from '../src/helpers/formatDate.js'
const { writeTextFileSync } = Deno

// write file
// deno run --allow-write is required
export function writeJson(data, pathSubfix) {
  try {
    const timestamp = getTimeStamp()
    const today = getTimeTag('today', timestamp)
    const filePath = pathSubfix ? `src/data/${today}-${pathSubfix}.json` : `src/data/${today}.json`
    console.log('write to', filePath)
    writeTextFileSync(filePath, JSON.stringify(data))

    const dataPath = `src/data/data.json`
    const content =`{
      "lastUpdate": "${timestamp}"
    }
    `
    writeTextFileSync(dataPath, content)
    return "Written to " + dataPath

  } catch (e) {
    console.error(e.message)
  }
}
