module.exports = {
  origin: 'http://localhost:8000',
  adminEmailAddress: 'Crypticle <grosjona@yahoo.com.au>',
  services: {
    blockchain: {
      name: 'rise',
      nodeAddress: 'https://wallet.rise.vision',
      sync: true,
      blockPollInterval: 5000,
      blockFetchLimit: 100
    },
    mail: {
      name: 'mailgun',
      apiKey: 'key-11684d92cd1cae9ab957f2674c06887f',
      domain: 'mg.crypticle.io'
    },
    fiat: {
      name: 'stripe',
      apiSecretKey: 'sk_test_QlUgKWhOjRrIeTO4YWUaExQH'
    }
  },
  mainInfo: {
    cryptocurrency: {
      name: 'Rise',
      symbol: 'RISE',
      unit: '100000000'
    },
    mainWalletAddress: '16237277499158857342R',
    requiredBlockConfirmations: 3,
    transactionSettlementInterval: 5000,
    maxRecordDisplayAge: 2592000000
  }
};
