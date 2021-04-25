// import { Treemap, Hint } from 'react-vis'
// import human from 'millify'
import { Chart } from "react-google-charts"

export const TokensTree = ({project, data, width = 400}) => {
  const tokens = data.bridges.map(bridge => bridge.items.map(item => [item.contract_ticker_symbol, project, item.quote, item.quote])).flat(1)
  // console.log('%O', tokens)
  const tokenData = [
    [
      'Token',
      'Parent',
      'Value',
      'Amount',
    ],
    [project, null, 0, 0],
    ...tokens,
  ]

  return (
    <Chart
      width={`${width}px`}
      height={'300px'}
      chartType="TreeMap"
      loader={<div>Loading Chart</div>}
      data={tokenData}
      options={{
        minColor: '#9eebff',
        midColor: '#72bbd4',
        maxColor: '#5da3bf',
        headerHeight: 15,
        fontColor: 'black',
        showScale: true,
        legend: 'none',
      }}
      rootProps={{ 'data-testid': '1' }}
    />
  )
}
