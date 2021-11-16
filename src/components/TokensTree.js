import human from 'millify'
import { Chart } from "react-google-charts"

// https://react-google-charts.com/treemap-chart
export const TokensTree = ({project, tokens, price, width = 400}) => {
  const tokenNames = []
  const tokenData = [
    [
      'Token',
      'Parent',
      'Value',
      'Amount',
    ],
    [project, null, 0, 0],
    ...tokens
      .filter(item => {
        if (tokenNames.includes(item.contract_ticker_symbol)) {
          return false
        }
        tokenNames.push(item.contract_ticker_symbol)
        return true
      })
      .map(item => [item.contract_ticker_symbol, project, item.quote, item.quote]),
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
        generateTooltip: (row, size, value) => {
          return (
            `<div>$${human(size * price)}</div>`
          )
        },
      }}
      rootProps={{ 'data-testid': '1' }}
    />
  )
}
