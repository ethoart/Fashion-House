import { ConnectEmbed } from "@/app/thirdweb";
import { client } from "./client";
import { chain } from "./chain";
import { Staking } from "../../components/Staking";
import React from 'react';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="container">
        <h1 className="title">Fashion House</h1>
        <ConnectEmbed client={client} chain={chain} />
        <Staking />
      </div>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 20px auto;
          padding: 10px;
          width: 100%;
          max-width: 500px;
        }
        .title {
          font-size: 2rem;
          text-align: center;
          margin: 20px 0;
        }
        @media (max-width: 768px) {
          .container {
            padding: 10px;
          }
          .title {
            font-size: 1.5rem;
          }
          .description {
            font-size: 1rem;
          }
        }
      `}</style>
    </>
  );
}
