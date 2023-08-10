import {
  useAccount,
  useDisconnect,
  useEnsName,
  useNetwork,
  useSwitchNetwork,
} from "wagmi";
import Head from "next/head";
import WalletSelectGrid from "~/components/wallet/walletSelectGrid";

export default function Wallet() {
  const { address, isConnected } = useAccount();
  const { data: ensName } = useEnsName({ address });
  const { disconnect } = useDisconnect();
  const { chain } = useNetwork();
  const { chains, error, isLoading, pendingChainId, switchNetwork } =
    useSwitchNetwork();

  return (
    <div>
      <Head>
        <title>OpenWeb3 Starter DApp: Wallet Profile</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {isConnected ? (
        <>
          <div>Connected to {ensName ?? address}</div>
          <button
            className="rounded-md border-2 border-solid border-neutral-800 p-2"
            onClick={() => disconnect()}
          >
            Disconnect
          </button>
          {chain && <div>Connected to {chain.name}</div>}
          {chains && (
            <div>
              Available chains:
              {chains.map((x) => (
                <button
                  disabled={!switchNetwork || x.id === chain?.id}
                  key={x.id}
                  onClick={() => switchNetwork?.(x.id)}
                  className="ml-2 rounded-md border-2 border-solid border-neutral-800 p-2"
                >
                  {x.name}
                  {isLoading && pendingChainId === x.id && " (switching)"}
                </button>
              ))}
            </div>
          )}
        </>
      ) : (
        <WalletSelectGrid />
      )}
    </div>
  );
}
