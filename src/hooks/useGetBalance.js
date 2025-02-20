import { useState } from "react";
import { useReadContract } from "wagmi";
import { ethers } from "ethers";
import { config } from "../config";
import presaleAbi from "../abi/preSale.json";
const presaleAddress = "0xFA0f2d5DbA8942aB9128F1d4381ac6F5f4c11D12";

const useGetBalance = (address) => {
  const [balance, setBalance] = useState(0);
  const { data, isError, error, isLoading } = useReadContract({
    abi: presaleAbi,
    address: presaleAddress,
    functionName: "balanceOf",
    args: [address],
    config
  });

  const getBalance = async () => {
    if (data) {
      const balance = ethers.formatEther(data.toString());
      setBalance(balance);
    }
  };

  return { balance, getBalance, isError, error, isLoading };
};

export default useGetBalance;