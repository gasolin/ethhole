# ethhole
How the token flows

## Usage

```
yarn install
yarn start
```

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
https://github.com/gasolin/ethhole/blob/main/src/data/bridge_contracts.js

To do analytics
https://github.com/gasolin/ethhole/blob/main/src/data/

To suggest
https://github.com/gasolin/ethhole/issues

## Credit

Event

- Initial version made during [Scaling Ethereum Hackthon](https://scaling.ethglobal.co/)

Contracts

- Collected plenty of Layer 2 contract addresses from [l2beat](https://www.l2beat.com/)
- Bridges balance fetched through [Covalent API](https://www.covalenthq.com/docs/api/#overview)
- Protocol and Staked balance fetched through [Zapper API](https://docs.zapper.fi/zapper-api/api-guides)

Design

- UI style based on [Tail-kit](https://www.tailwind-kit.com/)
- Original icon design from [freepik](https://www.flaticon.com/free-icon/hole_595435?term=hole&related_id=595435)

## License

MIT License
