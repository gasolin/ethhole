# ethhole
How the token flows

[![Daily Fetch](https://github.com/gasolin/ethhole/actions/workflows/deno.yml/badge.svg)](https://github.com/gasolin/ethhole/actions/workflows/deno.yml)

## Usage

```
yarn install
yarn start
```

## How its made

How it's made
1. Collect Layer 2 / Sidechain bridges contracts
2. Collect TVL and token allocation of production Layer 2 (Loopring, ZkSwap, zkSync...) and Sidechain bridges contracts through [Covalent API](https://www.covalenthq.com/docs/api/#overview) (with Deno script)
3. Get protocol and stake balance by [Zapper API](https://docs.zapper.fi/zapper-api/api-guides)
4. Auto daily update data via github action
5. Build website (react, hookrouter, tailwind) with leaderboard and the Sankey flow chart for quick glance
6. Build per project page to show bridges and use Treemap diagrams to show its token composition
7. Show ETH or USD based TVL
8. Show emerging Layer 2 projects with the `strict mode`

## Fetch Data

Install `deno` from https://deno.land/#installation

```sh
deno run --allow-net --allow-write scripts/fetch_data.js --key [COVALENT_API_KEY]
```

Get covalent API key from https://www.covalenthq.com/platform/#/auth/register/


## Data Format

In `src/data` Layer 2 and side chain bridge contracts balances are list by date.

The format is

```
projectName: {
    tvl: // in eth
    bridges: [
        {
            address,
            quote_currency, // eth
            chain_id,
            items: [
                {
                    contract_ticker_symbol,
                    balance,
                    quote, // value
                }
            ]
        }
    ]
}
```

Can explorer data with JSON viewer, ex http://jsonviewer.stack.hu/

## Contribution

To add new contracts
https://github.com/gasolin/ethhole/blob/main/src/helpers/bridge_contracts.js

To do analytics
https://github.com/gasolin/ethhole/blob/main/src/data/

To suggest
https://github.com/gasolin/ethhole/issues

## Credit

Event

- Initial version made during [Scaling Ethereum Hackthon](https://scaling.ethglobal.co/)

Contracts

- Bridges balance fetched through [Covalent API](https://www.covalenthq.com/docs/api/#overview)
- Protocol and Staked balance fetched through [Zapper API](https://docs.zapper.fi/zapper-api/api-guides)
- Collected plenty of Layer 2 contract addresses from [l2beat](https://github.com/l2beat/l2beat/tree/master/config/src/projects)
- Also referred [DefiLlama](https://github.com/DefiLlama/DefiLlama-Adapters/tree/main/projects), [DefiPulse](https://github.com/ConcourseOpen/DeFi-Pulse-Adapters/tree/master/projects), and [Blockscan](https://blockscan.com/bridges/)

Design

- UI style based on [Tail-kit](https://www.tailwind-kit.com/)
- Original icon design from [freepik](https://www.flaticon.com/free-icon/hole_595435?term=hole&related_id=595435)

## License

MIT License
