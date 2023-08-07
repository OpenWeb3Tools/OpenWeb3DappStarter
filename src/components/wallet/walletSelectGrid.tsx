import Image from "next/image";
import { useConnect } from "wagmi";
import { walletList, walletsWithLogos } from "./const";

export default function WalletSelectGrid() {
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect();

  const walletIsAvailable = (walletId: string) =>
    connectors.filter((x) => x.id === walletId)[0]?.ready;

  const getInjectedConnector = () =>
    connectors.filter((x) => x.id === "injected")[0];

  const getInjectedLogoUrl = () => {
    let hasLogo = false;
    const injectedConnectorName = getInjectedConnector()?.name ?? "";
    if (injectedConnectorName.length > 0) {
      hasLogo = walletsWithLogos.includes(injectedConnectorName);
    }
    if (hasLogo) {
      return "./wallets/" + injectedConnectorName + ".svg";
    }
    return "./wallets/MetaMask.svg"; // TODO: Replace with some sort of generic injected wallet icon
  };

  return (
    <>
      {error && <div>{error.message}</div>}
      <ul
        role="list"
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        {walletList.map((wallet) => (
          <li
            key={wallet.id}
            className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
          >
            <div className="flex flex-1 flex-col p-4">
              <Image
                src={
                  wallet.id !== "injected" ? wallet.logo : getInjectedLogoUrl()
                }
                height="128"
                width="128"
                alt={wallet.name}
                className="mx-auto h-32 w-32 flex-shrink-0 rounded-full bg-gray-100 p-2"
              />
              <h3 className="mt-6 text-sm font-medium text-gray-900">
                {connectors.filter((x) => x.id === wallet.id)[0]?.name}
              </h3>
              <dl className="mt-1 flex flex-grow flex-col justify-between">
                <dd className="text-sm text-gray-500">{wallet.desc}</dd>
                {/* <dd className="mt-3">
                  {wallet.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20"
                    >
                      {tag}
                    </span>
                  ))}
                </dd> */}
              </dl>
            </div>
            <div>
              <div className="-mt-px flex divide-x divide-gray-200">
                <div className="flex w-0 flex-1">
                  <button
                    disabled={!walletIsAvailable(wallet.id)}
                    onClick={() => connect({ connector: wallet.connector })}
                    className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                  >
                    {isLoading && pendingConnector?.id === wallet.id
                      ? "Connecting"
                      : walletIsAvailable(wallet.id)
                      ? "Connect"
                      : "Not Detected"}
                  </button>
                </div>
                <div className="-ml-px flex w-0 flex-1">
                  <a
                    href={wallet.url}
                    target="_blank"
                    className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                  >
                    Website
                  </a>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
