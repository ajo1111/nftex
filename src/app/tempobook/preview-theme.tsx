"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Logo } from "@/components/ui/logo";
import { Search, Wallet } from "lucide-react";

export default function PreviewTheme() {
  return (
    <div className="bg-background min-h-screen p-8">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header with logo */}
        <header className="sticky top-0 z-50 w-full border-b border-purple-600/20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 p-4 rounded-lg">
          <div className="flex items-center justify-between">
            <Logo />

            <div className="hidden md:block mx-4 flex-1 max-w-md">
              <form className="relative w-full max-w-sm flex items-center">
                <Input
                  type="search"
                  placeholder="Search NFTs, collections..."
                  className="pr-10 bg-background border-purple-600/30 focus-visible:ring-purple-600/50"
                />
                <Button
                  type="submit"
                  size="icon"
                  variant="ghost"
                  className="absolute right-0 h-full px-3 text-purple-600 hover:text-purple-500"
                >
                  <Search size={18} />
                </Button>
              </form>
            </div>

            <div className="flex items-center gap-4">
              <Button className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white border-none gap-2">
                <Wallet size={16} />
                Connect Wallet
              </Button>
            </div>
          </div>
        </header>

        {/* Preview Title */}
        <div className="text-center">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-purple-600 text-transparent bg-clip-text inline-block">
            Color Theme Preview
          </h1>
          <p className="text-muted-foreground mt-2">
            Based on the logo's purple, yellow, and orange colors
          </p>
        </div>

        {/* UI Elements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Buttons */}
          <Card>
            <CardHeader>
              <h2 className="text-xl font-semibold">Buttons</h2>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-4">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white border-none">
                  Primary Button
                </Button>
                <Button
                  variant="outline"
                  className="border-purple-600/50 text-purple-600 hover:bg-purple-600/10"
                >
                  Outline Button
                </Button>
                <Button
                  variant="ghost"
                  className="text-purple-600 hover:bg-purple-600/10"
                >
                  Ghost Button
                </Button>
                <Button className="bg-gradient-to-r from-yellow-400 via-orange-500 to-purple-600 text-white border-none">
                  Gradient Button
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Cards */}
          <Card>
            <CardHeader>
              <h2 className="text-xl font-semibold">NFT Card</h2>
            </CardHeader>
            <CardContent>
              <div className="border border-purple-600/20 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-purple-600/10 transition-all hover:border-purple-600/40">
                <div className="aspect-square bg-gradient-to-br from-yellow-400 via-orange-500 to-purple-600 relative">
                  <div className="absolute inset-0 flex items-center justify-center text-white font-bold">
                    NFT Preview
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold truncate">
                    Cosmic Perspective #42
                  </h3>
                  <p className="text-sm text-muted-foreground">by ArtistOne</p>
                </div>
                <div className="p-4 pt-0 flex justify-between">
                  <div className="text-sm">
                    <span className="text-muted-foreground">Price</span>
                    <p className="font-semibold text-purple-600">2.5 ETH</p>
                  </div>
                  <div className="text-sm text-right">
                    <span className="text-muted-foreground">Highest Bid</span>
                    <p className="font-semibold text-purple-600">2.0 ETH</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Color Palette */}
        <Card>
          <CardHeader>
            <h2 className="text-xl font-semibold">Color Palette</h2>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-5 gap-4">
              <div className="space-y-2">
                <div className="h-20 rounded-md bg-purple-600"></div>
                <p className="text-xs text-center">Purple 600</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 rounded-md bg-purple-800"></div>
                <p className="text-xs text-center">Purple 800</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 rounded-md bg-yellow-400"></div>
                <p className="text-xs text-center">Yellow 400</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 rounded-md bg-orange-500"></div>
                <p className="text-xs text-center">Orange 500</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 rounded-md bg-muted"></div>
                <p className="text-xs text-center">Muted</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <footer className="border-t border-purple-600/20 pt-6 text-center text-sm text-muted-foreground">
          <p>
            This is a preview of the updated color scheme based on the logo.
          </p>
          <p className="mt-2">© {new Date().getFullYear()} NFT Marketplace</p>
        </footer>
      </div>
    </div>
  );
}
