curl -X POST https://eth-mainnet.g.alchemy.com/v2/docs-demo \
     -H "Content-Type: application/json" \
     -d '{
  "jsonrpc": "2.0",
  "method": "alchemy_getAssetTransfers",
  "params": [
    {
      "fromBlock": "0x0",
      "fromAddress": "0x0000000000000000000000000000000000000000",
      "toAddress": "0x5c43B1eD97e52d009611D89b74fA829FE4ac56b1",
      "excludeZeroValue": true,
      "withMetadata": true,
      "category": [
        "erc721",
        "erc1155"
      ]
    }
  ],
  "id": 1
}'
