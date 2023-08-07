export const wethAddress = (chainId: number) => {
  if (chainId === 1) {
    // wrapped-ethereum addr on eth network
    return "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2";
  }
  if (chainId === 10) {
    // wrapped-ethereum addr on optimism network
    return "0x4200000000000000000000000000000000000006";
  }
  if (chainId === 56) {
    // wrapped-ethereum addr on bsc network
    return "0x4DB5a66E937A9F4473fA95b1cAF1d1E1D62E29EA";
  }
};
