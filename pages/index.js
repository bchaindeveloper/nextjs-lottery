import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Middle from '../components/Middle';
import LotteryEntrance from "../components/LotteryEntrance";
import { useMoralis } from "react-moralis";

const supportedChains = ["31337", "5"];

export default function Home() {
  const { isWeb3Enabled, chainId } = useMoralis();

  return (
    <div className={styles.container}>
      <Head>
        <title>Ether Lottery</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="./Ethereum.png" />
      </Head>
      <Header />
      {isWeb3Enabled ? (
        <div>
          {supportedChains.includes(parseInt(chainId).toString()) ? (
            <div className="flex flex-row">
              <LotteryEntrance className="p-8" />
            </div>
          ) : (
            <div>{`Please switch to a supported chainId. The supported Chain Ids are: ${supportedChains}`}</div>
          )}
        </div>
      ) : (
        <div className="p-9 font-semibold underline">^Connect Wallet To Enter^</div>
      )}
      <div>
        <Middle />
      </div>
      <br />
      <div>
        <Footer />
      </div>
    </div>
  );
}
