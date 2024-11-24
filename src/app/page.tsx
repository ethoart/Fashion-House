import { ConnectEmbed } from "@/app/thirdweb";
import { client } from "./client";
import { chain } from "./chain";
import { Staking } from "../../components/Staking";
import Head from 'next/head';

export default function Home() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      margin: "20px auto",
      width: "500px",
    }}>
      <Head>
  <link rel="icon" href="https://raw.githubusercontent.com/ethoart/manikeimages/refs/heads/main/logo%20w.png" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</Head>
      <h1>Fashion House</h1>
      <ConnectEmbed
        client={client}
        chain={chain}
      />
      <Staking />
    </div>
  );
}
