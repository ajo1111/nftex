import Image from "next/image";
import Link from "next/link";

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center gap-2 ${className}`}>
      <div className="relative w-8 h-8">
        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-yellow-400 via-orange-500 to-purple-600 flex items-center justify-center">
          <span className="text-white font-bold text-xs">NFT</span>
        </div>
      </div>
      <span className="text-xl font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-purple-600 text-transparent bg-clip-text">
        NFT Marketplace
      </span>
    </Link>
  );
}
