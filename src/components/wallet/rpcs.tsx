export type RpcProps =
  | string
  | {
      url: string;
      tracking: string;
    };

export type RpcArrayProps = {
  rpcs: RpcProps[];
};

export type RpcsPropsByChain = Record<number, RpcArrayProps>;

export const rpcList: RpcsPropsByChain = {
  1: {
    rpcs: [
      // Quicknode -> tracks IP
      {
        url: "https://endpoints.omniatech.io/v1/eth/mainnet/public",
        tracking: "none",
      },
      {
        url: "https://rpc.ankr.com/eth",
        tracking: "limited",
      },
      {
        url: "https://eth.getblock.io/&lt;api_key&gt;/mainnet/",
        tracking: "none",
      },
      {
        url: "https://ethereum.publicnode.com",
        tracking: "none",
      },
      {
        url: "https://1rpc.io/eth",
        tracking: "none",
      },
      {
        url: "https://rpc.builder0x69.io/",
        tracking: "none",
      },
      {
        url: "https://rpc.mevblocker.io",
        tracking: "none",
      },
      {
        url: "https://rpc.flashbots.net/",
        tracking: "none",
      },
      // RPC Fast -> Tracks IP
      {
        url: "https://eth-mainnet.public.blastapi.io",
        tracking: "limited",
      },
      {
        url: "https://eth-rpc.gateway.pokt.network",
        tracking: "none",
      },
      {
        url: "https://eth-mainnet-public.unifra.io",
        tracking: "limited",
      },
      {
        url: "https://ethereum.blockpi.network/v1/rpc/public",
        tracking: "limited",
      },
      {
        url: "https://rpc.payload.de",
        tracking: "none",
      },
      // Distributed cluster of Ethereum nodes designed for speed and anonymity!
      {
        url: "https://api.zmok.io/mainnet/oaen6dy8ff6hju9k",
        tracking: "none",
      },
      {
        url: "https://eth.api.onfinality.io/public",
        tracking: "limited",
      },
      "https://mainnet.eth.cloud.ava.do/",
      "https://ethereumnodelight.app.runonflux.io",
      "https://eth-mainnet.rpcfast.com?api_key=xbhWBI1Wkguk8SNMu1bvvLurPGLXmgwYeC4S6g2H7WdwFigZSmPWVZRxrskEQwIf",
      "https://main-light.eth.linkpool.io",
      {
        url: "https://eth.meowrpc.com",
        tracking: "none",
      },
      {
        url: "https://eth.drpc.org",
        tracking: "limited",
      },
      {
        url: "https://api.zan.top/node/v1/eth/mainnet/public",
        tracking: "limited",
      },
    ],
  },
  2: {
    rpcs: ["https://node.eggs.cool", "https://node.expanse.tech"],
  },
  1975: {
    rpcs: ["https://rpc.onuschain.io"],
  },
  80001: {
    rpcs: [
      "https://rpc-mumbai.maticvigil.com",
      {
        url: "https://endpoints.omniatech.io/v1/matic/mumbai/public",
        tracking: "none",
      },
      {
        url: "https://rpc.ankr.com/polygon_mumbai",
        tracking: "limited",
      },
      "https://polygontestapi.terminet.io/rpc",
      {
        url: "https://polygon-testnet.public.blastapi.io",
        tracking: "limited",
      },
      {
        url: "https://polygon-mumbai.blockpi.network/v1/rpc/public",
        tracking: "limited",
      },
      {
        url: "https://polygon-mumbai-bor.publicnode.com",
        tracking: "none",
      },
      {
        url: "https://api.zan.top/node/v1/polygon/mumbai/public",
        tracking: "limited",
      },
    ],
  },
  //Rinkeby testnet deprecated
  4: {
    rpcs: [
      "https://rpc.ankr.com/eth_rinkeby",
      "https://rinkeby.infura.io/3/9aa3d95b3bc440fa88ea12eaa4456161",
    ],
  },
  5: {
    rpcs: [
      {
        url: "https://rpc.ankr.com/eth_goerli",
        tracking: "limited",
      },
      {
        url: "https://endpoints.omniatech.io/v1/eth/goerli/public",
        tracking: "none",
      },
      {
        url: "https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
        tracking: "limited",
      },
      {
        url: "https://eth-goerli.public.blastapi.io",
        tracking: "limited",
      },
      {
        url: "https://eth-goerli.g.alchemy.com/v2/demo",
        tracking: "yes",
      },
      {
        url: "https://goerli.blockpi.network/v1/rpc/public",
        tracking: "limited",
      },
      {
        url: "https://eth-goerli.api.onfinality.io/public",
        tracking: "limited",
      },
      {
        url: "https://rpc.goerli.eth.gateway.fm",
        tracking: "yes",
      },
      {
        url: "https://ethereum-goerli.publicnode.com",
        tracking: "none",
      },
      {
        url: "https://goerli.gateway.tenderly.co",
        tracking: "yes",
      },
      {
        url: "https://gateway.tenderly.co/public/goerli",
        tracking: "yes",
      },
      {
        url: "https://api.zan.top/node/v1/eth/goerli/public",
        tracking: "limited",
      },
      "https://rpc.notadegen.com/goerli",
    ],
  },
  //Ropsten testnet deprecated
  3: {
    rpcs: [
      "https://rpc.ankr.com/eth_ropsten",
      "https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
    ],
  },
  4002: {
    rpcs: [
      "https://rpc.testnet.fantom.network/",
      {
        url: "https://endpoints.omniatech.io/v1/fantom/testnet/public",
        tracking: "none",
      },
      {
        url: "https://rpc.ankr.com/fantom_testnet",
        tracking: "limited",
      },
      {
        url: "https://fantom-testnet.public.blastapi.io",
        tracking: "limited",
      },
      {
        url: "https://fantom-testnet.publicnode.com",
        tracking: "none",
      },
    ],
  },
  "4444": {
    rpcs: ["https://janus.htmlcoin.dev/janus/"],
  },
  43113: {
    rpcs: [
      "https://api.avax-test.network/ext/bc/C/rpc",
      {
        url: "https://endpoints.omniatech.io/v1/avax/fuji/public",
        tracking: "none",
      },
      {
        url: "https://rpc.ankr.com/avalanche_fuji",
        tracking: "limited",
      },
      {
        url: "https://rpc.ankr.com/avalanche_fuji-c",
        tracking: "limited",
      },
      "https://avalanchetestapi.terminet.io/ext/bc/C/rpc",
      {
        url: "https://ava-testnet.public.blastapi.io/ext/bc/C/rpc",
        tracking: "limited",
      },
      {
        url: "https://avalanche-fuji-c-chain.publicnode.com",
        tracking: "none",
      },
    ],
  },
  56: {
    rpcs: [
      "https://bsc-dataseed.binance.org/",
      "https://bsc-dataseed1.defibit.io/",
      "https://bsc-dataseed1.ninicoin.io/",
      "https://bsc-dataseed2.defibit.io/",
      "https://bsc-dataseed3.defibit.io/",
      "https://bsc-dataseed4.defibit.io/",
      "https://bsc-dataseed2.ninicoin.io/",
      "https://bsc-dataseed3.ninicoin.io/",
      "https://bsc-dataseed4.ninicoin.io/",
      "https://bsc-dataseed1.binance.org/",
      "https://bsc-dataseed2.binance.org/",
      "https://bsc-dataseed3.binance.org/",
      "https://bsc-dataseed4.binance.org/",
      {
        url: "https://rpc-bsc.48.club",
        tracking: "limited",
      },
      {
        url: "https://koge-rpc-bsc.48.club",
        tracking: "limited",
      },
      {
        url: "https://endpoints.omniatech.io/v1/bsc/mainnet/public",
        tracking: "none",
      },
      {
        url: "https://bsc-mainnet.gateway.pokt.network/v1/lb/6136201a7bad1500343e248d",
        tracking: "none",
      },
      {
        url: "https://bsc-mainnet.nodereal.io/v1/64a9df0874fb4a93b9d0a3849de012d3",
        tracking: "yes",
      },
      {
        url: "https://rpc.ankr.com/bsc",
        tracking: "limited",
      },
      "https://bscrpc.com",
      "https://bsc.rpcgator.com/",
      {
        url: "https://binance.nodereal.io",
        tracking: "yes",
      },
      "https://bsc-mainnet.rpcfast.com?api_key=xbhWBI1Wkguk8SNMu1bvvLurPGLXmgwYeC4S6g2H7WdwFigZSmPWVZRxrskEQwIf",
      "https://nodes.vefinetwork.org/smartchain",
      {
        url: "https://1rpc.io/bnb",
        tracking: "none",
      },
      {
        url: "https://bsc.rpc.blxrbdn.com/",
        tracking: "yes",
      },
      {
        url: "https://bsc.blockpi.network/v1/rpc/public",
        tracking: "limited",
      },
      {
        url: "https://bnb.api.onfinality.io/public",
        tracking: "limited",
      },
      {
        url: "https://bsc.publicnode.com",
        tracking: "none",
      },
      {
        url: "https://bsc-mainnet.public.blastapi.io",
        tracking: "limited",
      },
      {
        url: "https://bsc.meowrpc.com",
        tracking: "none",
      },
      {
        url: "https://api.zan.top/node/v1/bsc/mainnet/public",
        tracking: "limited",
      },
    ],
  },
  97: {
    rpcs: [
      {
        url: "https://endpoints.omniatech.io/v1/bsc/testnet/public",
        tracking: "none",
      },
      "https://bsctestapi.terminet.io/rpc",
      {
        url: "https://bsc-testnet.public.blastapi.io",
        tracking: "limited",
      },
      {
        url: "https://bsc-testnet.publicnode.com",
        tracking: "none",
      },
      {
        url: "https://api.zan.top/node/v1/bsc/testnet/public",
        tracking: "limited",
      },
    ],
  },
  900000: {
    rpcs: ["https://api.posichain.org", "https://api.s0.posichain.org"],
  },
  43114: {
    rpcs: [
      "https://api.avax.network/ext/bc/C/rpc",
      "https://avax.rpcgator.com/",
      "https://avalanche.public-rpc.com",
      {
        url: "https://rpc.ankr.com/avalanche",
        tracking: "limited",
      },
      {
        url: "https://blastapi.io/public-api/avalanche",
        tracking: "limited",
      },
      {
        url: "https://ava-mainnet.public.blastapi.io/ext/bc/C/rpc",
        tracking: "limited",
      },
      "https://avalancheapi.terminet.io/ext/bc/C/rpc",
      {
        url: "https://avalanche-c-chain.publicnode.com",
        tracking: "none",
      },
      {
        url: "https://1rpc.io/avax/c",
        tracking: "none",
      },
      {
        url: "https://avalanche.blockpi.network/v1/rpc/public",
        tracking: "limited",
      },
      {
        url: "https://avax-mainnet.gateway.pokt.network/v1/lb/605238bf6b986eea7cf36d5e/ext/bc/C/rpc",
        tracking: "none",
      },
      {
        url: "https://avalanche.api.onfinality.io/public/ext/bc/C/rpc",
        tracking: "limited",
      },
      {
        url: "https://endpoints.omniatech.io/v1/avax/mainnet/public",
        tracking: "none",
      },
      {
        url: "https://avax.meowrpc.com",
        tracking: "none",
      },
    ],
  },
  250: {
    rpcs: [
      "https://rpcapi.fantom.network",
      {
        url: "https://endpoints.omniatech.io/v1/fantom/mainnet/public",
        tracking: "none",
      },
      "https://fantom-mainnet.gateway.pokt.network/v1/lb/62759259ea1b320039c9e7ac",
      "https://rpc.ftm.tools/",
      {
        url: "https://rpc.ankr.com/fantom",
        tracking: "limited",
      },
      "https://rpc.fantom.network",
      "https://rpc2.fantom.network",
      "https://rpc3.fantom.network",
      {
        url: "https://fantom-mainnet.public.blastapi.io",
        tracking: "limited",
      },
      {
        url: "https://1rpc.io/ftm",
        tracking: "none",
      },
      {
        url: "https://fantom.blockpi.network/v1/rpc/public",
        tracking: "limited",
      },
      {
        url: "https://fantom.publicnode.com",
        tracking: "none",
      },
      {
        url: "https://fantom.api.onfinality.io/public",
        tracking: "limited",
      },
      {
        url: "https://rpc.fantom.gateway.fm",
        tracking: "yes",
      },
    ],
  },
  137: {
    rpcs: [
      "https://rpc-mainnet.maticvigil.com",
      {
        url: "https://endpoints.omniatech.io/v1/matic/mainnet/public",
        tracking: "none",
      },
      "https://polygon-rpc.com",
      "https://rpc-mainnet.matic.network",
      "https://rpc-mainnet.matic.quiknode.pro",
      "https://matic-mainnet-full-rpc.bwarelabs.com",
      "https://matic-mainnet-archive-rpc.bwarelabs.com",
      "https://poly-rpc.gateway.pokt.network/",
      {
        url: "https://rpc.ankr.com/polygon",
        tracking: "limited",
      },
      {
        url: "https://polygon-mainnet.public.blastapi.io",
        tracking: "limited",
      },
      "https://polygonapi.terminet.io/rpc",
      {
        url: "https://1rpc.io/matic",
        tracking: "none",
      },
      "https://polygon-mainnet.rpcfast.com?api_key=xbhWBI1Wkguk8SNMu1bvvLurPGLXmgwYeC4S6g2H7WdwFigZSmPWVZRxrskEQwIf",
      {
        url: "https://polygon-bor.publicnode.com",
        tracking: "none",
      },
      "https://polygon-mainnet-public.unifra.io",
      {
        url: "https://polygon-mainnet.g.alchemy.com/v2/demo",
        tracking: "yes",
      },
      {
        url: "https://polygon.blockpi.network/v1/rpc/public",
        tracking: "limited",
      },
      {
        url: "https://polygon.api.onfinality.io/public",
        tracking: "limited",
      },
      {
        url: "https://polygon.rpc.blxrbdn.com/",
        tracking: "yes",
      },
      {
        url: "https://polygon.drpc.org",
        tracking: "limited",
      },
      {
        url: "https://polygon.gateway.tenderly.co",
        tracking: "yes",
      },
      {
        url: "https://gateway.tenderly.co/public/polygon",
        tracking: "yes",
      },
      {
        url: "https://api.zan.top/node/v1/polygon/mainnet/public",
        tracking: "limited",
      },
      {
        url: "https://polygon.meowrpc.com",
        tracking: "none",
      },
    ],
  },
  25: {
    rpcs: [
      "https://evm.cronos.org",
      "https://cronos-rpc.elk.finance/",
      {
        url: "https://node.croswap.com/rpc",
        tracking: "limited",
      },
      {
        url: "https://cronos.blockpi.network/v1/rpc/public",
        tracking: "limited",
      },
      {
        url: "https://cronos-evm.publicnode.com",
        tracking: "none",
      },
    ],
  },
  338: {
    rpcs: ["https://evm-t3.cronos.org/"],
  },
  142857: {
    rpcs: [
      {
        url: "https://rpc1.icplaza.pro/",
        tracking: "yes",
      },
    ],
  },
  42161: {
    rpcs: [
      "https://arb1.arbitrum.io/rpc",
      {
        url: "https://arb1.croswap.com/rpc",
        tracking: "limited",
      },
      {
        url: "https://rpc.ankr.com/arbitrum",
        tracking: "limited",
      },
      {
        url: "https://1rpc.io/arb",
        tracking: "none",
      },
      {
        url: "https://arbitrum.getblock.io/api_key/mainnet/",
        tracking: "none",
      },
      {
        url: "https://arbitrum-mainnet.infura.io/v3/${INFURA_API_KEY}",
        tracking: "limited",
      },
      {
        url: "https://arb-mainnet.g.alchemy.com/v2/demo",
        tracking: "yes",
      },
      {
        url: "https://arbitrum.blockpi.network/v1/rpc/public",
        tracking: "limited",
      },
      {
        url: "https://arbitrum-one.public.blastapi.io",
        tracking: "limited",
      },
      {
        url: "https://endpoints.omniatech.io/v1/arbitrum/one/public",
        tracking: "none",
      },
      {
        url: "https://arb-mainnet-public.unifra.io",
        tracking: "limited",
      },
      {
        url: "https://arbitrum.api.onfinality.io/public",
        tracking: "limited",
      },
      {
        url: "https://rpc.arb1.arbitrum.gateway.fm",
        tracking: "yes",
      },
      {
        url: "https://arbitrum-one.publicnode.com",
        tracking: "none",
      },
      {
        url: "https://arbitrum.meowrpc.com",
        tracking: "none",
      },
      {
        url: "https://api.zan.top/node/v1/arb/one/public",
        tracking: "limited",
      },
    ],
  },
  421613: {
    rpcs: [
      {
        url: "https://endpoints.omniatech.io/v1/arbitrum/goerli/public",
        tracking: "none",
      },
      {
        url: "https://arb-goerli.g.alchemy.com/v2/demo",
        tracking: "yes",
      },
      {
        url: "https://arbitrum-goerli.public.blastapi.io",
        tracking: "limited",
      },
      {
        url: "https://rpc.goerli.arbitrum.gateway.fm",
        tracking: "yes",
      },
      {
        url: "https://arbitrum-goerli.publicnode.com",
        tracking: "none",
      },
      {
        url: "https://arbitrum-goerli.blockpi.network/v1/rpc/public",
        tracking: "limited",
      },
      {
        url: "https://api.zan.top/node/v1/arb/goerli/public",
        tracking: "limited",
      },
    ],
  },
  42170: {
    rpcs: [
      "https://nova.arbitrum.io/rpc",
      {
        url: "https://arbitrum-nova.public.blastapi.io",
        tracking: "limited",
      },
      {
        url: "https://arbitrum-nova.blockpi.network/v1/rpc/public",
        tracking: "limited",
      },
      {
        url: "https://arbitrum-nova.publicnode.com",
        tracking: "none",
      },
    ],
  },
  8217: {
    rpcs: [
      "https://public-node-api.klaytnapi.com/v1/cypress",
      "https://cypress.fautor.app/archive",
      {
        url: "https://klaytn.blockpi.network/v1/rpc/public",
        tracking: "limited",
      },
      {
        url: "https://klaytn.api.onfinality.io/public",
        tracking: "limited",
      },
      {
        url: "https://1rpc.io/klay",
        tracking: "none",
      },
    ],
  },
  1666600000: {
    rpcs: [
      "https://api.harmony.one",
      "https://a.api.s0.t.hmny.io",
      "https://api.s0.t.hmny.io",
      {
        url: "https://rpc.ankr.com/harmony",
        tracking: "limited",
      },
      {
        url: "https://harmony.api.onfinality.io/public",
        tracking: "limited",
      },
      {
        url: "https://1rpc.io/one",
        tracking: "none",
      },
    ],
  },
  1313161554: {
    rpcs: [
      "https://mainnet.aurora.dev",
      {
        url: "https://endpoints.omniatech.io/v1/aurora/mainnet/public",
        tracking: "none",
      },
      {
        url: "https://1rpc.io/aurora",
        tracking: "none",
      },
    ],
  },
  1313161555: {
    rpcs: [
      {
        url: "https://endpoints.omniatech.io/v1/aurora/testnet/public",
        tracking: "none",
      },
    ],
  },
  4181: {
    rpcs: ["https://rpc1.phi.network"],
  },
  128: {
    rpcs: [
      "https://http-mainnet.hecochain.com",
      "https://http-mainnet-node.huobichain.com",
      "https://hecoapi.terminet.io/rpc",
    ],
  },
  256: {
    rpcs: ["https://hecotestapi.terminet.io/rpc"],
  },
  42220: {
    rpcs: [
      "https://forno.celo.org",
      {
        url: "https://rpc.ankr.com/celo",
        tracking: "limited",
      },
      {
        url: "https://1rpc.io/celo",
        tracking: "none",
      },
      {
        url: "https://celo.api.onfinality.io/public",
        tracking: "limited",
      },
    ],
  },
  10: {
    rpcs: [
      "https://mainnet.optimism.io/",
      {
        url: "https://optimism-mainnet.public.blastapi.io",
        tracking: "limited",
      },
      {
        url: "https://rpc.ankr.com/optimism",
        tracking: "limited",
      },
      {
        url: "https://1rpc.io/op",
        tracking: "none",
      },
      {
        url: "https://opt-mainnet.g.alchemy.com/v2/demo",
        tracking: "yes",
      },
      {
        url: "https://optimism.blockpi.network/v1/rpc/public",
        tracking: "limited",
      },
      {
        url: "https://endpoints.omniatech.io/v1/op/mainnet/public",
        tracking: "none",
      },
      {
        url: "https://optimism.api.onfinality.io/public",
        tracking: "limited",
      },
      {
        url: "https://rpc.optimism.gateway.fm",
        tracking: "yes",
      },
      {
        url: "https://optimism.publicnode.com",
        tracking: "none",
      },
      {
        url: "https://optimism.meowrpc.com",
        tracking: "none",
      },
      {
        url: "https://api.zan.top/node/v1/opt/mainnet/public",
        tracking: "limited",
      },
    ],
  },
  1881: {
    rpcs: [
      {
        url: "https://rpc.cartenz.works",
        tracking: "none",
      },
    ],
  },
  420: {
    rpcs: [
      {
        url: "https://endpoints.omniatech.io/v1/op/goerli/public",
        tracking: "none",
      },
      {
        url: "https://opt-goerli.g.alchemy.com/v2/demo",
        tracking: "yes",
      },
      {
        url: "https://optimism-goerli.public.blastapi.io",
        tracking: "limited",
      },
      {
        url: "https://rpc.goerli.optimism.gateway.fm",
        tracking: "yes",
      },
      {
        url: "https://optimism-goerli.publicnode.com",
        tracking: "none",
      },
      {
        url: "https://optimism-goerli.blockpi.network/v1/rpc/public",
        tracking: "limited",
      },
      {
        url: "https://api.zan.top/node/v1/opt/goerli/public",
        tracking: "limited",
      },
    ],
  },
  1088: {
    rpcs: [
      "https://andromeda.metis.io/?owner=1088",
      {
        url: "https://metis-mainnet.public.blastapi.io",
        tracking: "limited",
      },
    ],
  },
  1246: {
    rpcs: ["https://rpc-cnx.omplatform.com"],
  },
  100: {
    rpcs: [
      "https://rpc.gnosischain.com",
      "https://xdai-rpc.gateway.pokt.network",
      "https://xdai-archive.blockscout.com",
      {
        url: "https://rpc.gnosis.gateway.fm",
        tracking: "yes",
      },
      {
        url: "https://gnosis-mainnet.public.blastapi.io",
        tracking: "limited",
      },
      {
        url: "https://rpc.ankr.com/gnosis",
        tracking: "limited",
      },
      {
        url: "https://rpc.ap-southeast-1.gateway.fm/v4/gnosis/non-archival/mainnet",
        tracking: "yes",
      },
      {
        url: "https://gnosis.blockpi.network/v1/rpc/public",
        tracking: "limited",
      },
      {
        url: "https://gnosis.api.onfinality.io/public",
        tracking: "limited",
      },
    ],
  },
  10200: {
    rpcs: [
      "https://rpc.chiadochain.net",
      {
        url: "https://rpc.chiado.gnosis.gateway.fm",
        tracking: "yes",
      },
    ],
  },
  1231: {
    rpcs: ["https://ultron-rpc.net"],
  },
  1285: {
    rpcs: [
      {
        url: "wss://moonriver.api.onfinality.io/public-ws",
        tracking: "limited",
      },
      {
        url: "https://moonriver.api.onfinality.io/public",
        tracking: "limited",
      },
      {
        url: "https://moonriver.unitedbloc.com:2000",
        tracking: "yes",
      },
      {
        url: "wss://moonriver.unitedbloc.com:2001",
        tracking: "yes",
      },
      {
        url: "https://moonriver.public.blastapi.io",
        tracking: "limited",
      },
      {
        url: "https://moonriver-rpc.dwellir.com",
        tracking: "limited",
      },
      {
        url: "wss://moonriver-rpc.dwellir.com",
        tracking: "limited",
      },
    ],
  },
  361: {
    rpcs: ["https://eth-rpc-api.thetatoken.org/rpc"],
  },
  42262: {
    rpcs: ["https://emerald.oasis.dev/"],
  },
  40: {
    rpcs: [
      "https://mainnet.telos.net/evm",
      "https://rpc1.eu.telos.net/evm",
      "https://rpc1.us.telos.net/evm",
      "https://rpc2.us.telos.net/evm",
      "https://api.kainosbp.com/evm",
      "https://rpc2.eu.telos.net/evm",
      "https://evm.teloskorea.com/evm",
      "https://rpc2.teloskorea.com/evm",
      "https://rpc01.us.telosunlimited.io/evm",
      "https://rpc02.us.telosunlimited.io/evm",
    ],
  },
  32659: {
    rpcs: [
      "https://mainnet.anyswap.exchange",
      "https://mainway.freemoon.xyz/gate",
      "https://fsn.dev/api",
      "https://mainnet.fusionnetwork.io",
    ],
  },
  1284: {
    rpcs: [
      "https://rpc.api.moonbeam.network",
      {
        url: "https://moonbeam.api.onfinality.io/public",
        tracking: "limited",
      },
      {
        url: "wss://moonbeam.api.onfinality.io/public-ws",
        tracking: "limited",
      },
      {
        url: "https://moonbeam.unitedbloc.com:3000",
        tracking: "yes",
      },
      {
        url: "wss://moonbeam.unitedbloc.com:3001",
        tracking: "yes",
      },
      {
        url: "https://moonbeam.public.blastapi.io",
        tracking: "limited",
      },
      {
        url: "https://rpc.ankr.com/moonbeam",
        tracking: "limited",
      },
      {
        url: "https://1rpc.io/glmr",
        tracking: "none",
      },
      {
        url: "https://moonbeam-rpc.dwellir.com",
        tracking: "limited",
      },
      {
        url: "wss://moonbeam-rpc.dwellir.com",
        tracking: "limited",
      },
    ],
  },
  30: {
    rpcs: ["https://public-node.rsk.co"],
  },
  4689: {
    rpcs: [
      "https://iotex-mainnet.gateway.pokt.network/v1/lb/6176f902e19001003499f492",
      {
        url: "https://rpc.ankr.com/iotex",
        tracking: "limited",
      },
      "https://babel-api.mainnet.iotex.io",
      "https://babel-api.mainnet.iotex.one",
      "https://pokt-api.iotex.io",
      "https://babel-api.fastblocks.io",
    ],
  },
  66: {
    rpcs: [
      "https://exchainrpc.okex.org",
      {
        url: "https://oktc-mainnet.public.blastapi.io",
        tracking: "limited",
      },
    ],
  },
  288: {
    rpcs: [
      "https://mainnet.boba.network/",
      {
        url: "https://boba-mainnet.gateway.pokt.network/v1/lb/623ad21b20354900396fed7f",
        tracking: "none",
      },
      {
        url: "https://boba-ethereum.gateway.tenderly.co",
        tracking: "yes",
      },
      {
        url: "https://gateway.tenderly.co/public/boba-ethereum",
        tracking: "yes",
      },
    ],
  },
  321: {
    rpcs: [
      "https://rpc-mainnet.kcc.network",
      "https://kcc.mytokenpocket.vip",
      "https://kcc-rpc.com",
    ],
  },
  888: {
    rpcs: [
      "https://gwan-ssl.wandevs.org:56891",
      "https://gwan2-ssl.wandevs.org",
    ],
  },
  106: {
    rpcs: [
      "https://evmexplorer.velas.com/rpc",
      "https://velas-mainnet.rpcfast.com?api_key=xbhWBI1Wkguk8SNMu1bvvLurPGLXmgwYeC4S6g2H7WdwFigZSmPWVZRxrskEQwIf",
    ],
  },
  10000: {
    rpcs: [
      "https://smartbch.fountainhead.cash/mainnet",
      "https://global.uat.cash",
      "https://rpc.uatvo.com",
    ],
  },
  19: {
    rpcs: ["https://songbird.towolabs.com/rpc"],
  },
  122: {
    rpcs: [
      "https://fuse-rpc.gateway.pokt.network/",
      "https://rpc.fuse.io",
      "https://fuse-mainnet.chainstacklabs.com",
      {
        url: "https://fuse.api.onfinality.io/public",
        tracking: "limited",
      },
    ],
  },
  336: {
    rpcs: [
      "https://rpc.shiden.astar.network:8545/",
      {
        url: "https://shiden.public.blastapi.io",
        tracking: "limited",
      },
      {
        url: "https://shiden-rpc.dwellir.com",
        tracking: "limited",
      },
      {
        url: "wss://shiden-rpc.dwellir.com",
        tracking: "limited",
      },
    ],
  },
  592: {
    rpcs: [
      "https://evm.astar.network/",
      "https://rpc.astar.network:8545",
      {
        url: "https://astar.public.blastapi.io",
        tracking: "limited",
      },
      {
        url: "https://getblock.io/nodes/bsc/",
        tracking: "none",
      },
      {
        url: "https://1rpc.io/astr",
        tracking: "none",
      },
      {
        url: "https://astar-mainnet.g.alchemy.com/v2/demo",
        tracking: "yes",
      },
      {
        url: "https://astar.api.onfinality.io/public",
        tracking: "limited",
      },
      {
        url: "wss://astar.api.onfinality.io/public-ws",
        tracking: "limited",
      },
      {
        url: "https://astar-rpc.dwellir.com",
        tracking: "limited",
      },
      {
        url: "wss://astar-rpc.dwellir.com",
        tracking: "limited",
      },
    ],
  },
  71394: {
    rpcs: ["https://mainnet.godwoken.io/rpc/eth-wallet"],
  },
  52: {
    rpcs: [
      "https://rpc.coinex.net/",
      "https://rpc1.coinex.net/",
      "https://rpc2.coinex.net/",
      "https://rpc3.coinex.net/",
      "https://rpc4.coinex.net/",
    ],
  },
  820: {
    rpcs: ["https://rpc.callisto.network", "https://clo-geth.0xinfra.com/"],
  },
  108: {
    rpcs: ["https://mainnet-rpc.thundercore.com"],
  },
  20: {
    rpcs: ["https://api.elastos.io/esc", "https://api.trinity-tech.io/esc"],
  },
  82: {
    rpcs: [
      "https://rpc.meter.io",
      {
        url: "https://rpc-meter.jellypool.xyz/",
        tracking: "yes",
      },
      {
        url: "https://meter.blockpi.network/v1/rpc/public",
        tracking: "limited",
      },
    ],
  },
  5551: {
    rpcs: ["https://l2.nahmii.io/"],
  },
  88: {
    rpcs: ["https://rpc.tomochain.com"],
  },
  246: {
    rpcs: ["https://rpc.energyweb.org"],
  },
  57: {
    rpcs: [
      "https://rpc.syscoin.org",
      {
        url: "https://rpc.ankr.com/syscoin",
        tracking: "limited",
      },
      {
        url: "https://syscoin-evm.publicnode.com",
        tracking: "none",
      },
    ],
  },
  8: {
    rpcs: ["https://rpc.octano.dev"],
  },
  5050: {
    rpcs: ["https://rpc.liquidchain.net/", "https://rpc.xlcscan.com/"],
  },
  333999: {
    rpcs: ["https://rpc.polis.tech"],
  },
  55: {
    rpcs: [
      "https://rpc-1.zyx.network/",
      "https://rpc-2.zyx.network/",
      "https://rpc-3.zyx.network/",
      "https://rpc-5.zyx.network/",
    ],
  },
  60: {
    rpcs: ["https://rpc.gochain.io"],
  },
  11297108109: {
    rpcs: [
      {
        url: "https://palm-mainnet.infura.io/v3/3a961d6501e54add9a41aa53f15de99b",
        tracking: "limited",
      },
      {
        url: "https://palm-mainnet.public.blastapi.io",
        tracking: "limited",
      },
    ],
  },
  7: {
    rpcs: ["https://rpc.dome.cloud"],
  },
  11: {
    rpcs: ["https://api.metadium.com/dev"],
  },
  15: {
    rpcs: ["https://prenet.diode.io:8443/"],
  },
  17: {
    rpcs: ["https://rpc.thaifi.com"],
  },
  22: {
    rpcs: ["https://api.trinity-tech.io/eid", "https://api.elastos.io/eid"],
  },
  24: {
    rpcs: ["https://rpc.kardiachain.io"],
  },
  27: {
    rpcs: ["https://rpc.shibachain.net"],
  },
  29: {
    rpcs: ["https://rpc.genesisl1.org"],
  },
  35: {
    rpcs: ["https://rpc.tbwg.io"],
  },
  44: {
    rpcs: [
      {
        url: "https://crab.api.onfinality.io/public",
        tracking: "limited",
      },
    ],
  },
  50: {
    rpcs: [
      "https://rpc.xdcrpc.com",
      "https://rpc1.xinfin.network",
      "https://erpc.xinfin.network",
      "https://rpc.xinfin.network",
      "https://rpc-xdc.icecreamswap.com",
      "https://erpc.xdcrpc.com",
    ],
  },
  51: {
    rpcs: [
      "https://rpc.apothem.network",
      "https://erpc.apothem.network",
      "https://apothem.xdcrpc.com",
    ],
  },
  58: {
    rpcs: [
      "https://dappnode1.ont.io:10339",
      "https://dappnode2.ont.io:10339",
      "https://dappnode3.ont.io:10339",
      "https://dappnode4.ont.io:10339",
    ],
  },
  59: {
    rpcs: ["https://api.eosargentina.io", "https://api.metahub.cash"],
  },
  15557: {
    rpcs: [
      {
        url: "https://api.testnet.evm.eosnetwork.com",
        tracking: "yes",
      },
    ],
  },
  17777: {
    rpcs: [
      {
        url: "https://api.evm.eosnetwork.com",
        tracking: "yes",
      },
    ],
  },
  6: {
    rpcs: [
      "https://www.ethercluster.com/kotti",
      {
        url: "https://geth-kotti.etc-network.info",
        tracking: "yes",
      },
    ],
  },
  61: {
    rpcs: [
      "https://etc.rivet.link",
      "https://etc.etcdesktop.com",
      "https://etc.mytokenpocket.vip",
      {
        url: "https://besu-de.etc-network.info",
        tracking: "yes",
      },
      {
        url: "https://geth-de.etc-network.info",
        tracking: "yes",
      },
      {
        url: "https://erigon-de.etc-network.info",
        tracking: "yes",
      },
      {
        url: "https://besu-at.etc-network.info",
        tracking: "yes",
      },
      {
        url: "https://geth-at.etc-network.info",
        tracking: "yes",
      },
      {
        url: "https://erigon-at.etc-network.info",
        tracking: "yes",
      },
      "https://rpc.etcplanets.com",
    ],
  },
  63: {
    rpcs: [
      "https://rpc.mordor.etccooperative.org",
      {
        url: "https://geth-mordor.etc-network.info",
        tracking: "yes",
      },
    ],
  },
  74: {
    rpcs: ["https://idchain.one/rpc/"],
  },
  77: {
    rpcs: ["https://sokol.poa.network"],
  },
  78: {
    rpcs: ["https://ethnode.primusmoney.com/mainnet"],
  },
  86: {
    rpcs: ["https://evm.gatenode.cc"],
  },
  87: {
    rpcs: [
      {
        url: "https://rpc.novanetwork.io:9070",
        tracking: "none",
      },
      {
        url: "https://dev.rpc.novanetwork.io/",
        tracking: "none",
      },
    ],
  },
  90: {
    rpcs: ["https://s0.garizon.net/rpc"],
  },
  91: {
    rpcs: ["https://s1.garizon.net/rpc"],
  },
  92: {
    rpcs: ["https://s2.garizon.net/rpc"],
  },
  93: {
    rpcs: ["https://s3.garizon.net/rpc"],
  },
  96: {
    rpcs: ["https://rpc.bitkubchain.io", "wss://wss.bitkubchain.io"],
  },
  99: {
    rpcs: ["https://core.poanetwork.dev"],
  },
  111: {
    rpcs: ["https://rpc.etherlite.org"],
  },
  123: {
    rpcs: ["https://rpc.fusespark.io"],
  },
  126: {
    rpcs: ["https://rpc.mainnet.oychain.io", "https://rpc.oychain.io"],
  },
  142: {
    rpcs: ["https://rpc.prodax.io"],
  },
  163: {
    rpcs: ["https://node.mainnet.lightstreams.io"],
  },
  186: {
    rpcs: ["https://rpc.seelen.pro/"],
  },
  188: {
    rpcs: ["https://mainnet.bmcchain.com/"],
  },
  199: {
    rpcs: ["https://rpc.bittorrentchain.io/"],
  },
  200: {
    rpcs: ["https://arbitrum.xdaichain.com"],
  },
  70: {
    rpcs: ["https://http-mainnet.hoosmartchain.com"],
  },
  222: {
    rpcs: ["https://blockchain-api-mainnet.permission.io/rpc"],
  },
  262: {
    rpcs: ["https://sur.nilin.org"],
  },
  369: {
    rpcs: [
      {
        url: "https://pulsechain.publicnode.com",
        tracking: "none",
      },
    ],
  },
  416: {
    rpcs: ["https://rpc.sx.technology"],
  },
  512: {
    rpcs: ["https://rpc.acuteangle.com"],
  },
  555: {
    rpcs: ["https://rpc.velaverse.io"],
  },
  558: {
    rpcs: ["https://rpc.tao.network"],
  },
  595: {
    rpcs: [],
  },
  686: {
    rpcs: [
      "https://eth-rpc-karura.aca-staging.network",
      "https://rpc.evm.karura.network",
    ],
  },
  777: {
    rpcs: ["https://node.cheapeth.org/rpc"],
  },
  787: {
    rpcs: [
      "https://eth-rpc-acala.aca-staging.network",
      "https://rpc.evm.acala.network",
    ],
  },
  1001: {
    rpcs: [
      "https://public-node-api.klaytnapi.com/v1/baobab",
      "https://baobab.fautor.app/archive",
      {
        url: "https://klaytn-baobab.blockpi.network/v1/rpc/public",
        tracking: "limited",
      },
    ],
  },
  1010: {
    rpcs: ["https://meta.evrice.com"],
  },
  1012: {
    rpcs: ["https://global.rpc.mainnet.newtonproject.org"],
  },
  1024: {
    rpcs: ["https://api-para.clover.finance"],
  },
  1030: {
    rpcs: [
      "https://evm.confluxrpc.com",
      "https://conflux-espace-public.unifra.io",
    ],
  },
  1115: {
    rpcs: ["https://rpc.test.btcs.network"],
  },
  1116: {
    rpcs: ["https://rpc.coredao.org", "https://core.public.infstones.com"],
  },
  1139: {
    rpcs: ["https://mathchain.maiziqianbao.net/rpc"],
  },
  1213: {
    rpcs: ["https://dataseed.popcateum.org"],
  },
  1280: {
    rpcs: ["https://nodes.halo.land"],
  },
  280: {
    rpcs: [
      {
        url: "https://zksync-era-testnet.blockpi.network/v1/rpc/public",
        tracking: "limited",
      },
    ],
  },
  324: {
    rpcs: [
      {
        url: "https://zksync-era.blockpi.network/v1/rpc/public",
        tracking: "limited",
      },
    ],
  },
  1287: {
    rpcs: [
      "https://rpc.testnet.moonbeam.network",
      {
        url: "https://moonbase.unitedbloc.com:1000",
        tracking: "yes",
      },
      {
        url: "wss://moonbase.unitedbloc.com:1001",
        tracking: "yes",
      },
      {
        url: "https://moonbase-alpha.public.blastapi.io",
        tracking: "limited",
      },
      {
        url: "https://moonbeam-alpha.api.onfinality.io/public",
        tracking: "limited",
      },
      {
        url: "wss://moonbeam-alpha.api.onfinality.io/public-ws",
        tracking: "limited",
      },
    ],
  },
  1440: {
    rpcs: [
      {
        url: "https://beta.mainnet.livingassets.io/rpc",
        tracking: "limited",
      },
      {
        url: "https://gamma.mainnet.livingassets.io/rpc",
        tracking: "limited",
      },
    ],
  },
  1618: {
    rpcs: ["https://send.catechain.com"],
  },
  1657: {
    rpcs: ["https://dataseed1.btachain.com/"],
  },
  2000: {
    rpcs: [
      "https://rpc.dogechain.dog",
      "https://rpc-us.dogechain.dog",
      "https://rpc-sg.dogechain.dog",
      "https://rpc.dogechain.dog",
      "https://rpc01-sg.dogechain.dog",
      "https://rpc02-sg.dogechain.dog",
      "https://rpc03-sg.dogechain.dog",
      {
        url: "https://dogechain.ankr.com",
        tracking: "limited",
      },
      {
        url: "https://dogechain-sj.ankr.com",
        tracking: "limited",
      },
    ],
  },
  2021: {
    rpcs: [
      "https://mainnet2.edgewa.re/evm",
      "https://mainnet3.edgewa.re/evm",
      "https://edgeware-evm.jelliedowl.net/",
      {
        url: "https://edgeware.api.onfinality.io/public",
        tracking: "limited",
      },
    ],
  },
  7001: {
    rpcs: [
      {
        url: "https://zetachain-athens-evm.blockpi.network/v1/rpc/public",
        tracking: "limited",
      },
    ],
  },
  2025: {
    rpcs: ["https://mainnet.rangersprotocol.com/api/jsonrpc"],
  },
  2077: {
    rpcs: ["http://rpc.qkacoin.org:8548"],
  },
  2100: {
    rpcs: ["https://api.ecoball.org/ecoball/"],
  },
  2213: {
    rpcs: ["https://seed4.evanesco.org:8546"],
  },
  2222: {
    rpcs: [
      "https://evm.kava.io",
      {
        url: "https://kava.api.onfinality.io/public",
        tracking: "limited",
      },
      {
        url: "https://kava-evm.publicnode.com",
        tracking: "none",
      },
    ],
  },
  2612: {
    rpcs: ["https://api.ezchain.com/ext/bc/C/rpc"],
  },
  5000: {
    rpcs: [
      {
        url: "https://mantle.publicnode.com",
        tracking: "none",
      },
      {
        url: "https://mantle-mainnet.public.blastapi.io",
        tracking: "limited",
      },
    ],
  },
  5197: {
    rpcs: ["https://mainnet.eraswap.network"],
  },
  5729: {
    rpcs: ["https://rpc-testnet.hika.network"],
  },
  5869: {
    rpcs: ["https://proxy.wegochain.io"],
  },
  6626: {
    rpcs: ["https://http-mainnet.chain.pixie.xyz"],
  },
  6688: {
    rpcs: [
      {
        url: "https://iris-evm.publicnode.com",
        tracking: "none",
      },
    ],
  },
  7341: {
    rpcs: ["https://rpc.shyft.network/"],
  },
  8000: {
    rpcs: ["https://dataseed.testnet.teleport.network"],
  },
  8995: {
    rpcs: ["https://core.bloxberg.org"],
  },
  9001: {
    rpcs: [
      "https://eth.bd.evmos.org:8545/",
      "https://evmos-mainnet.gateway.pokt.network/v1/lb/627586ddea1b320039c95205",
      "https://evmos-json-rpc.stakely.io",
      "https://jsonrpc-evmos-ia.cosmosia.notional.ventures",
      "https://json-rpc.evmos.blockhunters.org",
      "https://evmos-json-rpc.agoranodes.com",
      {
        url: "https://evmos-mainnet.public.blastapi.io",
        tracking: "limited",
      },
      {
        url: "https://evmos-evm.publicnode.com",
        tracking: "none",
      },
      "https://jsonrpc-evmos.goldenratiostaking.net",
      {
        url: "https://evmos.api.onfinality.io/public",
        tracking: "limited",
      },
    ],
  },
  9100: {
    rpcs: ["rpcWorking:false"],
  },
  10101: {
    rpcs: ["https://eu.mainnet.xixoio.com"],
  },
  11111: {
    rpcs: ["https://api.trywagmi.xyz/rpc"],
  },
  12052: {
    rpcs: ["https://zerorpc.singularity.gold"],
  },
  13381: {
    rpcs: ["https://rpc.phoenixplorer.com/"],
  },
  21816: {
    rpcs: ["https://seed.omlira.com"],
  },
  24734: {
    rpcs: ["https://node1.mintme.com"],
  },
  31102: {
    rpcs: ["rpcWorking:false"],
  },
  32520: {
    rpcs: [
      "https://rpc.icecreamswap.com",
      "https://nodes.vefinetwork.org/bitgert",
      "https://flux-rpc.brisescan.com",
      "https://flux-rpc1.brisescan.com",
      "https://flux-rpc2.brisescan.com",
      "https://rpc-1.chainrpc.com",
      "https://rpc-2.chainrpc.com",
      "https://node1.serverrpc.com",
      "https://node2.serverrpc.com",
    ],
  },
  39797: {
    rpcs: [
      "https://nodeapi.energi.network",
      "https://explorer.energi.network/api/eth-rpc",
    ],
  },
  39815: {
    rpcs: [
      "https://mainnet.oho.ai",
      "https://mainnet-rpc.ohoscan.com",
      "https://mainnet-rpc2.ohoscan.com",
    ],
  },
  42069: {
    rpcs: ["rpcWorking:false"],
  },
  43110: {
    rpcs: ["rpcWorking:false"],
  },
  45000: {
    rpcs: ["https://rpc.autobahn.network"],
  },
  47805: {
    rpcs: ["https://rpc.rei.network"],
  },
  55555: {
    rpcs: ["https://rei-rpc.moonrhythm.io"],
  },
  63000: {
    rpcs: ["https://rpc.ecredits.com"],
  },
  70001: {
    rpcs: ["https://proxy1.thinkiumrpc.net/"],
  },
  70002: {
    rpcs: ["https://proxy2.thinkiumrpc.net/"],
  },
  70103: {
    rpcs: ["https://proxy103.thinkiumrpc.net/"],
  },
  84531: {
    rpcs: [
      {
        url: "https://base-goerli.public.blastapi.io",
        tracking: "limited",
      },
      {
        url: "https://1rpc.io/base-goerli",
        tracking: "none",
      },
      {
        url: "https://base-goerli.blockpi.network/v1/rpc/public",
        tracking: "limited",
      },
    ],
  },
  8453: {
    rpcs: [
      "https://developer-access-mainnet.base.org",
      {
        url: "https://base.blockpi.network/v1/rpc/public",
        tracking: "limited",
      },
      {
        url: "https://1rpc.io/base",
        tracking: "none",
      },
      {
        url: "https://base.meowrpc.com",
        tracking: "none",
      },
      {
        url: "https://base-mainnet.public.blastapi.io",
        tracking: "limited",
      },
    ],
  },
  11235: {
    rpcs: [
      {
        url: "https://haqq-evm.publicnode.com",
        tracking: "none",
      },
    ],
  },
  99999: {
    rpcs: ["https://rpc.uschain.network"],
  },
  100001: {
    rpcs: ["http://eth-jrpc.mainnet.quarkchain.io:39000"],
  },
  100002: {
    rpcs: ["http://eth-jrpc.mainnet.quarkchain.io:39001"],
  },
  100003: {
    rpcs: ["http://eth-jrpc.mainnet.quarkchain.io:39002"],
  },
  100004: {
    rpcs: ["http://eth-jrpc.mainnet.quarkchain.io:39003"],
  },
  100005: {
    rpcs: ["http://eth-jrpc.mainnet.quarkchain.io:39004"],
  },
  100006: {
    rpcs: ["http://eth-jrpc.mainnet.quarkchain.io:39005"],
  },
  100007: {
    rpcs: ["http://eth-jrpc.mainnet.quarkchain.io:39006"],
  },
  100008: {
    rpcs: ["http://eth-jrpc.mainnet.quarkchain.io:39007"],
  },
  108801: {
    rpcs: ["rpcWorking:false"],
  },
  110000: {
    rpcs: ["rpcWorking:false"],
  },
  110001: {
    rpcs: ["http://eth-jrpc.devnet.quarkchain.io:39900"],
  },
  110002: {
    rpcs: ["http://eth-jrpc.devnet.quarkchain.io:39901"],
  },
  110003: {
    rpcs: ["http://eth-jrpc.devnet.quarkchain.io:39902"],
  },
  110004: {
    rpcs: ["http://eth-jrpc.devnet.quarkchain.io:39903"],
  },
  110005: {
    rpcs: ["http://eth-jrpc.devnet.quarkchain.io:39904"],
  },
  110006: {
    rpcs: ["http://eth-jrpc.devnet.quarkchain.io:39905"],
  },
  110007: {
    rpcs: ["http://eth-jrpc.devnet.quarkchain.io:39906"],
  },
  110008: {
    rpcs: ["http://eth-jrpc.devnet.quarkchain.io:39907"],
  },
  200625: {
    rpcs: ["https://boot2.akroma.org/"],
  },
  201018: {
    rpcs: ["https://openapi.alaya.network/rpc"],
  },
  534353: {
    rpcs: [
      {
        url: "https://scroll-alpha-public.unifra.io",
        tracking: "limited",
      },
      {
        url: "https://scroll-alphanet.public.blastapi.io",
        tracking: "limited",
      },
      {
        url: "https://scroll-testnet.blockpi.network/v1/rpc/public",
        tracking: "limited",
      },
      {
        url: "https://scroll-alphanet.public.blastapi.io",
        tracking: "limited",
      },
    ],
  },
  534354: {
    rpcs: ["https://prealpha-rpc.scroll.io/l2"],
  },
  888888: {
    rpcs: ["https://infragrid.v.network/ethereum/compatible"],
  },
  955305: {
    rpcs: ["https://host-76-74-28-226.contentfabric.io/eth/"],
  },
  1313114: {
    rpcs: ["https://rpc.ethoprotocol.com"],
  },
  1313500: {
    rpcs: ["https://rpc.xerom.org"],
  },
  11155111: {
    rpcs: [
      {
        url: "https://eth-sepolia.g.alchemy.com/v2/demo",
        tracking: "yes",
      },
      {
        url: "https://endpoints.omniatech.io/v1/eth/sepolia/public",
        tracking: "none",
      },
      {
        url: "https://ethereum-sepolia.blockpi.network/v1/rpc/public",
        tracking: "limited",
      },
      {
        url: "https://eth-sepolia.public.blastapi.io",
        tracking: "limited",
      },
      {
        url: "https://eth-sepolia-public.unifra.io",
        tracking: "limited",
      },
      {
        url: "https://sepolia.gateway.tenderly.co",
        tracking: "yes",
      },
      {
        url: "https://gateway.tenderly.co/public/sepolia",
        tracking: "yes",
      },
      {
        url: "https://api.zan.top/node/v1/eth/sepolia/public",
        tracking: "limited",
      },
      "https://rpc.notadegen.com/sepolia",
    ],
  },
  20181205: {
    rpcs: ["https://hz.rpc.qkiscan.cn"],
  },
  35855456: {
    rpcs: ["https://node.joys.digital"],
  },
  61717561: {
    rpcs: ["https://c.onical.org"],
  },
  192837465: {
    rpcs: ["https://mainnet.gather.network"],
  },
  245022926: {
    rpcs: ["https://proxy.devnet.neonlabs.org/solana"],
  },
  245022934: {
    rpcs: [
      "https://neon-proxy-mainnet.solana.p2p.org",
      "https://neon-mainnet.everstake.one",
    ],
  },
  311752642: {
    rpcs: ["https://mainnet-rpc.oneledger.network"],
  },
  356256156: {
    rpcs: ["https://testnet.gather.network"],
  },
  486217935: {
    rpcs: ["https://devnet.gather.network"],
  },
  11297108099: {
    rpcs: [
      {
        url: "https://palm-testnet.public.blastapi.io",
        tracking: "limited",
      },
    ],
  },
  53935: {
    rpcs: [
      "https://avax-dfk.gateway.pokt.network/v1/lb/6244818c00b9f0003ad1b619/ext/bc/q2aTwKuyzgs8pynF7UXBZCU7DejbZbZ6EUyHr3JQzYgwNPUPi/rpc",
      {
        url: "https://dfkchain.api.onfinality.io/public",
        tracking: "limited",
      },
    ],
  },
  1666600001: {
    rpcs: ["https://s1.api.harmony.one"],
  },
  1666600002: {
    rpcs: ["https://s2.api.harmony.one"],
  },
  197710212030: {
    rpcs: ["https://rpc.ntity.io"],
  },
  79: {
    rpcs: [
      "https://dataserver-us-1.zenithchain.co/",
      "https://dataserver-asia-3.zenithchain.co/",
      "https://dataserver-asia-4.zenithchain.co/",
      "https://dataserver-asia-2.zenithchain.co/",
    ],
  },
  1501: {
    rpcs: ["https://rpc-1.bevm.io/", "https://rpc-2.bevm.io/"],
  },
  1506: {
    rpcs: ["https://mainnet.sherpax.io/rpc"],
  },
  512512: {
    rpcs: ["https://galaxy.block.caduceus.foundation"],
  },
  256256: {
    rpcs: ["https://mainnet.block.caduceus.foundation"],
  },
  167: {
    rpcs: [
      "https://node.atoshi.io",
      "https://node2.atoshi.io",
      "https://node3.atoshi.io",
    ],
  },
  7777: {
    rpcs: [
      "https://testnet1.rotw.games",
      "https://testnet2.rotw.games",
      "https://testnet3.rotw.games",
      "https://testnet4.rotw.games",
      "https://testnet5.rotw.games",
    ],
  },
  103090: {
    rpcs: ["https://evm.cryptocurrencydevs.org", "https://rpc.crystaleum.org"],
  },
  420420: {
    rpcs: [
      "https://mainnet.kekchain.com",
      "https://rpc2.kekchain.com",
      "https://kek.interchained.org",
      "https://kekchain.interchained.org",
    ],
  },
  420666: {
    rpcs: ["https://testnet.kekchain.com"],
  },
  1515: {
    rpcs: ["https://beagle.chat/eth"],
  },
  10067275: {
    rpcs: ["https://testnet.plian.io/child_test"],
  },
  16658437: {
    rpcs: ["https://testnet.plian.io/testnet"],
  },
  2099156: {
    rpcs: ["https://mainnet.plian.io/pchain"],
  },
  8007736: {
    rpcs: ["https://mainnet.plian.io/child_0"],
  },
  943: {
    rpcs: [
      {
        url: "https://pulsechain-testnet.publicnode.com",
        tracking: "none",
      },
    ],
  },
  970: {
    rpcs: ["https://rpc.mainnet.computecoin.com"],
  },
  971: {
    rpcs: ["https://beta-rpc.mainnet.computecoin.com"],
  },
  18159: {
    rpcs: [
      "https://mainnet-rpc.memescan.io/",
      "https://mainnet-rpc2.memescan.io/",
      "https://mainnet-rpc3.memescan.io/",
      "https://mainnet-rpc4.memescan.io/",
    ],
  },
  311: {
    rpcs: ["https://mainapi.omaxray.com/"],
  },
  314: {
    rpcs: [
      "https://api.node.glif.io",
      "https://node.filutils.com/rpc/v1",
      {
        url: "https://rpc.ankr.com/filecoin",
        tracking: "limited",
      },
      {
        url: "https://filecoin.chainup.net/rpc/v1",
        tracking: "limited",
      },
      {
        url: "https://infura.sftproject.io/filecoin/rpc/v1",
        tracking: "yes",
      },
      "https://api.chain.love/rpc/v1",
    ],
  },
  314159: {
    rpcs: [
      {
        url: "https://filecoin-calibration.chainup.net/rpc/v1",
        tracking: "limited",
      },
    ],
  },
  13000: {
    rpcs: ["https://rpc.ssquad.games"],
  },
  50001: {
    rpcs: [
      "https://rpc.oracle.liveplex.io",
      {
        url: "https://rpc.oracle.liveplex.io",
        tracking: "yes",
      },
    ],
  },
  119: {
    rpcs: ["https://evmapi.nuls.io", "https://evmapi2.nuls.io"],
  },
  15551: {
    rpcs: [
      {
        url: "https://api.mainnetloop.com",
        tracking: "limited",
      },
    ],
  },
  88888888: {
    rpcs: [
      {
        url: "https://rpc.teamblockchain.team",
        tracking: "none",
      },
    ],
  },
  1072: {
    rpcs: [
      {
        url: "https://json-rpc.evm.testnet.shimmer.network/",
        tracking: "none",
      },
    ],
  },
  1101: {
    rpcs: [
      {
        url: "https://rpc.ankr.com/polygon_zkevm",
        tracking: "limited",
      },
      {
        url: "https://rpc.polygon-zkevm.gateway.fm",
        tracking: "yes",
      },
      {
        url: "https://1rpc.io/polygon/zkevm",
        tracking: "none",
      },
      {
        url: "https://polygon-zkevm.blockpi.network/v1/rpc/public",
        tracking: "limited",
      },
      {
        url: "https://polygon-zkevm-mainnet.public.blastapi.io",
        tracking: "limited",
      },
    ],
  },
  431140: {
    rpcs: [
      {
        url: "https://rpc.markr.io/ext/",
        tracking: "none",
      },
    ],
  },
  248: {
    rpcs: [
      {
        url: "https://oasys-rpc.gateway.pokt.network",
        tracking: "none",
      },
      {
        url: "https://oasys.blockpi.network/v1/rpc/public",
        tracking: "limited",
      },
    ],
  },
  3501: {
    rpcs: [
      "https://rpc.jfinchain.com",
      {
        url: "https://rpc.jfinchain.com",
        tracking: "limited",
      },
    ],
  },
  35011: {
    rpcs: [
      {
        url: "https://rpc.j2o.io",
        tracking: "limited",
      },
    ],
  },
  827431: {
    rpcs: ["https://mainnet-rpc.curvescan.io"],
  },
  2323: {
    rpcs: [
      {
        url: "https://data-testnet-v1.somanetwork.io",
        tracking: "yes",
      },
      {
        url: "https://block-testnet-v1.somanetwork.io",
        tracking: "yes",
      },
    ],
  },
  2332: {
    rpcs: [
      {
        url: "https://data-mainnet-v1.somanetwork.io",
        tracking: "yes",
      },
      {
        url: "https://block-mainnet-v1.somanetwork.io",
        tracking: "yes",
      },
    ],
  },
  570: {
    rpcs: [
      "https://rollux.public-rpc.com",
      "wss://rpc.rollux.com/wss",
      "https://rpc.rollux.com",
    ],
  },
  5700: {
    rpcs: [
      {
        url: "https://syscoin-tanenbaum-evm.publicnode.com",
        tracking: "none",
      },
    ],
  },
  7895: {
    rpcs: [
      {
        url: "https://rpc-athena.ardescan.com",
        tracking: "yes",
      },
    ],
  },
  1707: {
    rpcs: ["https://rpc.blockchain.or.th"],
  },
  1708: {
    rpcs: ["https://rpc.testnet.blockchain.or.th"],
  },
};
