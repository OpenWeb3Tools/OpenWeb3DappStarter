import { createConfig, configureChains } from "wagmi";
import { mainnet, bsc, optimism } from "wagmi/chains";

import { jsonRpcProvider } from "wagmi/providers/jsonRpc";

import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { InjectedConnector } from "wagmi/connectors/injected";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { LedgerConnector } from "wagmi/connectors/ledger";

import { rpcList } from "./rpcs";

import type { Chain } from "wagmi/chains";
import type { Connector } from "wagmi";

export type WalletProps = {
  id: string;
  name: string;
  url: string;
  logo: string;
  tags: string[];
  desc: string;
  hwWallet: string;
  connector: Connector;
};

export const getRPCs = (chainId: number) => {
  const _rpcs = rpcList[chainId]?.rpcs ?? [];
  const newRpcs: string[] = [];
  // eslint-disable-next-line @typescript-eslint/prefer-for-of
  for (let i = 0; i < _rpcs.length; i++) {
    const _rpc = _rpcs[i];
    if (typeof _rpc === "object" && _rpc?.url) {
      newRpcs.push(_rpc.url);
    } else if (_rpc) {
      newRpcs.push(_rpc as string);
    }
  }
  return newRpcs;
};

export const getProviders = () => {
  const rpcList = [];
  for (let i = 0; i < 10; i++) {
    rpcList.push(
      jsonRpcProvider({
        rpc: (chain) => {
          const _rpcs = getRPCs(chain.id);
          const _rpc = _rpcs[i];
          if (_rpc) {
            return {
              http: _rpc,
              // webSocket: `wss://${chain.id}.example.com`,
            };
          }
          i = 10;
          return null;
        },
      })
    );
  }
  return rpcList;
};

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet as Chain, bsc as Chain, optimism as Chain],
  getProviders(),
  { rank: true }
);

export const walletList: WalletProps[] = [
  {
    id: "injected",
    name: "Injected EVM Wallets",
    url: "",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg",
    tags: ["Desktop", "iOS", "Android"],
    desc: "Try this option to connect most EVM wallets",
    hwWallet: "No hardware wallet support",
    connector: new InjectedConnector({
      chains,
    }),
  },
  // {
  //   id: "metaMask",
  //   name: "MetaMask",
  //   url: "https://metamask.io/",
  //   logo: "https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg",
  //   tags: ["Desktop", "iOS", "Android"],
  //   desc: "Offering a browser extension for desktop users and also mobile apps for iOS & android",
  //   hwWallet:
  //     "Supports Ledger & Trezor hardware wallets via the browser extension (desktop). Currently only supports QR-based hardware wallets (like Keystone) via mobile app, Ledger Nano X support is coming for mobile soon though",
  //   connector: new MetaMaskConnector({ chains }),
  // },
  // {
  //   id: "trustWallet",
  //   name: "TrustWallet",
  //   url: "https://trustwallet.com/",
  //   logo: "https://trustwallet.com/assets/images/media/assets/TWT.svg",
  //   tags: ["Desktop", "iOS", "Android"],
  //   desc: "Offering a browser extension for desktop users and also mobile apps for iOS & android",
  //   hwWallet: "No hardware wallet support",
  //   connector: new InjectedConnector({
  //     chains,
  //     options: {
  //       name: "TrustWallet",
  //     },
  //   }),
  // },
  {
    id: "walletConnect",
    name: "WalletConnect",
    url: "https://walletconnect.com/",
    logo: "https://trustwallet.com/assets/images/media/assets/TWT.svg",
    tags: ["Desktop", "iOS", "Android"],
    desc: "A protocol to connect to 170+ wallets using a QR code",
    hwWallet: "No hardware wallet support",
    connector: new WalletConnectConnector({
      chains,
      options: {
        projectId: process.env.WCPROJECTID ?? "",
      },
    }),
  },
  {
    id: "coinbaseWallet",
    name: "Coinbase Wallet",
    url: "https://www.coinbase.com/wallet",
    logo: "https://www.svgrepo.com/show/331345/coinbase-v2.svg",
    tags: ["Desktop", "iOS", "Android"],
    desc: "Offering a browser extension for desktop users and also mobile apps for iOS & android",
    hwWallet: "No hardware wallet support",
    connector: new CoinbaseWalletConnector({
      chains,
      options: {
        appName: "wagmi",
      },
    }),
  },
  {
    id: "ledger",
    name: "Ledger",
    url: "https://www.ledger.com/ledger-live",
    logo: "https://logotyp.us/files/ledger.svg",
    tags: ["Desktop", "iOS", "Android"],
    desc: "Use your Ledger hardware wallet via LedgerLive on this device or your mobile",
    hwWallet:
      "Ledger devices are supported as long as you have it connected to LedgerLive on this device or on your mobile",
    connector: new LedgerConnector({
      chains,
      options: { projectId: process.env.WCPROJECTID ?? "" },
    }),
  },
];

const getConnectors = () => {
  const connectorArray = [];
  for (const i of walletList) {
    connectorArray.push(i.connector);
  }
  return connectorArray;
};

export const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: getConnectors(),
  publicClient,
  webSocketPublicClient,
});
