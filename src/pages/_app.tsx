import "~/styles/globals.css";
import { Suspense, useEffect, useState } from "react";
import { WagmiConfig } from "wagmi";
import { wagmiConfig } from "~/components/wallet/const";

import { type AppType } from "next/dist/shared/lib/utils";
import Layout from "~/components/layout/layout";
import Loading from "./loading";

const OpenWeb3DApp: AppType = ({ Component, pageProps }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <WagmiConfig config={wagmiConfig}>
      {isClient && (
        <Layout>
          <Suspense fallback={<Loading />}>
            <Component {...pageProps} />
          </Suspense>
        </Layout>
      )}
    </WagmiConfig>
  );
};

export default OpenWeb3DApp;
