module.exports = {
  origin: 'http://localhost:8000',
  adminEmailAddress: 'Crypticle <grosjona@yahoo.com.au>',
  secretSignupKey: '313e7cc1-ad75-4030-a927-6a09f39c1603',
  databaseName: 'crypticle_rise',
  maxSocketBackpressure: 1000,
  services: {
    account: {
      transactionSettlementInterval: 5000,
      withdrawalProcessingInterval: 20000,
      maxTransactionSettlementsPerAccount: 10,
      maxConcurrentWithdrawalsPerAccount: 10,
      maxConcurrentDebitTransfersPerAccount: 100,
      blockchainNodeWalletPassphrase: 'drastic spot aerobic web wave tourist library first scout fatal inherit arrange',
      blockchainAdapterPath: null,
      blockchainSync: true,
      blockchainNodeAddress: 'https://wallet.rise.vision',
      blockPollInterval: 5000,
      blockFetchLimit: 100,
      blockchainWithdrawalMaxAttempts: 20,
      bcryptPasswordRounds: 10
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
    mainWalletAddress: '16460447528999404929R',
    requiredDepositBlockConfirmations: 102,
    requiredWithdrawalBlockConfirmations: 102,
    paginationShowTotalCounts: false,
    maxRecordDisplayAge: 2592000000,
    maxPageSize: 100,
    alwaysRequireSecretSignupKey: false,
    enableAdminAccountSignup: true
  }
};
