import { useState } from "react";
import { useReadContract } from "wagmi";
import { ethers } from "ethers";
import { config } from "../config";
import presaleAbi from "../abi/preSale.json";
const presaleAddress = "0xd97B7e33039dD99675d2f00102548FC7e0407Ab1";

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