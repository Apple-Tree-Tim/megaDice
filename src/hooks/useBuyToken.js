import { useState } from "react";
import { useWriteContract } from "wagmi";
import { waitForTransactionReceipt } from "wagmi/actions";
import { ethers } from "ethers";
import { config } from "../config";
import presaleAbi from "../abi/preSale.json";
const presaleAddress = "0xFA0f2d5DbA8942aB9128F1d4381ac6F5f4c11D12";

const useBuyToken = (amount) => {
  const [isBuying, setIsBuying] = useState(false);
  const { writeContractAsync } = useWriteContract();

  const buyToken = async () => {
    try {
      setIsBuying(true);
      const value = ethers.parseEther(amount.toString());
      const { hash } = await writeContractAsync({
        abi: presaleAbi,
        address: presaleAddress,
        functionName: "buyTokens",
        value: value,
      });
      await waitForTransactionReceipt(config, { hash: hash.toString() });
      setIsBuying(false);
      return true;
    } catch (error) {
      setIsBuying(false);
      console.error("Error buying tokens:", error);
      return false;
    }
  };
  return { buyToken, isBuying };
};

export default useBuyToken;