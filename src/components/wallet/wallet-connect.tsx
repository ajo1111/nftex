"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Wallet } from "lucide-react";
import { useState } from "react";

type WalletType = "metamask" | "walletconnect" | "coinbase" | null;

export function WalletConnect() {
  const [isConnecting, setIsConnecting] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  const [walletType, setWalletType] = useState<WalletType>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const connectWallet = async (type: WalletType) => {
    setIsConnecting(true);
    setWalletType(type);

    try {
      // Simulate wallet connection
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Mock successful connection
      const mockAddress =
        "0x" +
        [...Array(40)]
          .map(() => Math.floor(Math.random() * 16).toString(16))
          .join("");
      setWalletAddress(mockAddress);
      setIsConnected(true);
      setIsDialogOpen(false);

      // In a real implementation, we would use ethers.js or web3.js to connect to the actual wallet
      // Example with MetaMask:
      // if (window.ethereum) {
      //   try {
      //     const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      //     setWalletAddress(accounts[0]);
      //     setIsConnected(true);
      //   } catch (error) {
      //     console.error("User rejected connection");
      //   }
      // }
    } catch (error) {
      console.error("Error connecting wallet:", error);
    } finally {
      setIsConnecting(false);
    }
  };

  const disconnectWallet = () => {
    setWalletAddress("");
    setIsConnected(false);
    setWalletType(null);
  };

  const formatWalletAddress = (address: string) => {
    if (!address) return "";
    return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        {isConnected ? (
          <Button
            onClick={(e) => {
              e.preventDefault();
              disconnectWallet();
            }}
            variant="outline"
            className="gap-2 border-purple-600/50 text-purple-600 hover:bg-purple-600/10"
          >
            <Wallet size={16} />
            {formatWalletAddress(walletAddress)}
          </Button>
        ) : (
          <Button
            onClick={(e) => {
              e.preventDefault();
              setIsDialogOpen(true);
            }}
            className="gap-2 bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white border-none"
          >
            <Wallet size={16} />
            Connect Wallet
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Connect your wallet</DialogTitle>
          <DialogDescription>
            Connect your wallet to start creating and collecting NFTs
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Button
            onClick={() => connectWallet("metamask")}
            disabled={isConnecting}
            className="flex items-center justify-between p-4 h-auto"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center">
                <span className="text-white font-bold text-xs">MM</span>
              </div>
              <span>MetaMask</span>
            </div>
            {isConnecting && walletType === "metamask" && (
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
            )}
          </Button>

          <Button
            onClick={() => connectWallet("walletconnect")}
            disabled={isConnecting}
            className="flex items-center justify-between p-4 h-auto"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
                <span className="text-white font-bold text-xs">WC</span>
              </div>
              <span>WalletConnect</span>
            </div>
            {isConnecting && walletType === "walletconnect" && (
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
            )}
          </Button>

          <Button
            onClick={() => connectWallet("coinbase")}
            disabled={isConnecting}
            className="flex items-center justify-between p-4 h-auto"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-xs">CB</span>
              </div>
              <span>Coinbase Wallet</span>
            </div>
            {isConnecting && walletType === "coinbase" && (
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
