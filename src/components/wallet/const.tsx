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
    logo: "/wallets/MetaMask.svg",
    tags: ["Desktop", "iOS", "Android"],
    desc: "If your wallet is not showing up here, make sure its selected as the active wallet in your browser",
    hwWallet: "No hardware wallet support",
    connector: new InjectedConnector({
      chains,
    }),
  },
  // {
  //   id: "metaMask",
  //   name: "MetaMask",
  //   url: "https://metamask.io/",
  //   logo: "/wallets/MetaMask.svg",
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
  //   logo: "/wallets/TrustWallet.svg",
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
    logo: "/wallets/WalletConnect.svg",
    tags: ["Desktop", "iOS", "Android"],
    desc: "A protocol to connect to 170+ wallets using a QR code on either mobile or desktop devices",
    hwWallet: "No hardware wallet support",
    connector: new WalletConnectConnector({
      chains,
      options: {
        projectId: process.env.NEXT_PUBLIC_WCPROJECTID ?? "",
      },
    }),
  },
  {
    id: "coinbaseWallet",
    name: "Coinbase Wallet",
    url: "/wallets/CoinbaseWallet.svg",
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
    logo: "/wallets/Ledger.svg",
    tags: ["Desktop", "iOS", "Android"],
    desc: "Use your Ledger hardware wallet via LedgerLive on this device or your mobile",
    hwWallet:
      "Ledger devices are supported as long as you have it connected to LedgerLive on this device or on your mobile",
    connector: new LedgerConnector({
      chains,
      options: { projectId: process.env.NEXT_PUBLIC_WCPROJECTID ?? "" },
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

// These wallets have matching SVG files in /public/wallets folder
export const walletsWithLogos = [
  "Coinbase Wallet",
  "MathWallet",
  "MetaMask",
  "Rabby Wallet",
  "Trust Wallet",
  "XDEFI Wallet",
];

// These wallets do not yet have matching SVG files in /public/wallets folder
export const walletsWithoutLogos = [
  "Apex Wallet",
  "Core Wallet",
  "Backpack",
  "Bifrost Wallet",
  "BitKeep",
  "Bitski",
  "BlockWallet",
  "Brave Wallet",
  "Dawn Wallet",
  "Defiant",
  "Desig Wallet",
  "Enkrypt",
  "Exodus",
  "Fordefi",
  "Frame",
  "Frontier Wallet",
  "GameStop Wallet",
  "HAQQ Wallet",
  "HyperPay Wallet",
  "ImToken",
  "Halo Wallet",
  "KuCoin Wallet",
  "Nova Wallet",
  "OKX Wallet",
  "1inch Wallet",
  "Opera",
  "Phantom",
  "Ripio Portal",
  "Rainbow",
  "Status",
  "Talisman",
  "Taho",
  "TokenPocket",
  "Tokenary",
  "TTWallet",
  "Zerion",
];
