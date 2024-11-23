import { chain } from "@/app/chain";
import { client } from "@/app/client";
import { getContract } from "thirdweb";
import { stakingABI } from "./stakingABI";

const nftContractAddress = "0x282082C62Cd03eDA3A61AF62584cAb1C57e8d338";
const rewardTokenContractAddress = "0x74F477F87fE47a999CD5c35a0f8F2bA483648301";
const stakingContractAddress = "0xcB3b5478aE517F75Cd473F7dc822daAE72CD1071";

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
