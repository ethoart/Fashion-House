import { chain } from "@/app/chain";
import { client } from "@/app/client";
import { getContract } from "thirdweb";
import { stakingABI } from "./stakingABI";

const nftContractAddress = "0x282082C62Cd03eDA3A61AF62584cAb1C57e8d338";
const rewardTokenContractAddress = "0x8178A20c5EE42EDBfB5DeF23b9B5DaD6986f5003";
const stakingContractAddress = "0x22B3b2AD8962657C865157eA2793717F9321EB0D";

export const NFT_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: nftContractAddress
});

export const REWARD_TOKEN_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: rewardTokenContractAddress
});

export const STAKING_CONTRACT = getContract({
    client: client,
    chain: chain,
    address: stakingContractAddress,
    abi: stakingABI
});
