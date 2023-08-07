import BigNumber from "bignumber.js";
import Head from "next/head";
import {
  useAccount,
  useBalance,
  useContractRead,
  useContractWrite,
  useNetwork,
  usePrepareContractWrite,
} from "wagmi";
import { wethAddress } from "~/const/addresses";
import { oneUnit } from "~/const/bigNumber";

import wethABI from "../ABIs/ERC20.json";
import { convertFromWei, convertToWei } from "~/helpers/formatting";

export default function Home() {
  const { address } = useAccount();
  const { chain } = useNetwork();
  // READ METHODS
  const { data: wethBal } = useBalance({
    address,
    token: wethAddress(chain?.id ?? 1),
  });
  const { data: nativeBal } = useBalance({
    address,
  });
  const { data: wethName } = useContractRead({
    address: wethAddress(chain?.id ?? 1),
    abi: wethABI,
    functionName: "name",
  });
  const { data: wethSymbol } = useContractRead({
    address: wethAddress(chain?.id ?? 1),
    abi: wethABI,
    functionName: "symbol",
  });
  const { data: wethSupply }: { data: BigNumber | undefined } = useContractRead(
    {
      address: wethAddress(chain?.id ?? 1),
      abi: wethABI,
      functionName: "totalSupply",
    }
  );
  // WRITE METHODS
  const { config: tsfConfig } = usePrepareContractWrite({
    address: wethAddress(chain?.id ?? 1),
    abi: wethABI,
    functionName: "transfer",
    args: [address, oneUnit],
  });
  const { data: tsfTxn, write: writeTsfTxn } = useContractWrite(tsfConfig);

  const isEnoughWeth = () => {
    const _balance = wethBal?.value;
    if (
      _balance &&
      BigNumber(_balance.toString()).isGreaterThanOrEqualTo(
        convertToWei("0.01")
      )
    ) {
      return true;
    }
    return false;
  };

  return (
    <div>
      <Head>
        <title>OpenWeb3 Starter DApp: Home Page</title>
        <link
          rel="shortcut icon"
          type="image/svg+xml"
          href="placeholder-logo.svg"
        />
      </Head>
      <div>
        <h3 className="text-lg font-medium">
          Read Function Examples ({wethSymbol?.toString()} ERC20 Contract)
        </h3>
        <div>
          <div>
            Native Balance: {nativeBal?.formatted} {nativeBal?.symbol}
          </div>
          <div>
            ERC20 Balance: {wethBal?.formatted} {wethBal?.symbol}
          </div>
          <div>Token Name: {wethName?.toString()}</div>
          <div>Token Symbol: {wethSymbol?.toString()}</div>
          <div>
            Total Supply: {wethSupply && convertFromWei(wethSupply.toString())}
          </div>
        </div>
      </div>
      <div className="mt-2">
        <h3 className="text-lg font-medium">
          Write Function Examples ({wethSymbol?.toString()} ERC20 Contract)
        </h3>
        <div>
          <button className="p-2" disabled={!address}>
            Approve (yourself) to spend 1 {wethSymbol?.toString()}
          </button>
          <button className="p-2" disabled={!writeTsfTxn || !address || !isEnoughWeth()} onClick={() => writeTsfTxn?.()}>
            Tsf 0.01 {wethSymbol?.toString()} to yourself
          </button>
        </div>
      </div>
    </div>
  );
}
