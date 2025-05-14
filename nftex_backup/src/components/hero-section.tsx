import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-gradient-to-r from-yellow-400 via-orange-500 to-purple-600 text-transparent bg-clip-text">
                Discover, Collect, and Sell Extraordinary NFTs
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Explore the best digital art and collectibles in the world of
                NFTs. Join our community of creators and collectors.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/explore">
                <Button
                  size="lg"
                  className="gap-1 bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white border-none"
                >
                  Explore Collection <ArrowRight size={16} />
                </Button>
              </Link>
              <Link href="/create">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-purple-600/50 text-purple-600 hover:bg-purple-600/10"
                >
                  Create NFT
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative aspect-square overflow-hidden rounded-xl border border-purple-600/20 bg-muted md:w-full">
              <img
                src="/featured-nft.svg"
                alt="Featured NFT artwork"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
