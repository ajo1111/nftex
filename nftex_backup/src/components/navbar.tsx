"use client";

import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { SearchBar } from "@/components/search-bar";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { WalletConnect } from "@/components/wallet/wallet-connect";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-purple-600/20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Logo />
        </div>

        {/* Search bar - hidden on small screens, visible on medium and up */}
        <div className="hidden md:block mx-4 flex-1 max-w-md">
          <SearchBar />
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium hover:text-primary">
            Home
          </Link>
          <Link
            href="/explore"
            className="text-sm font-medium hover:text-primary"
          >
            Explore
          </Link>
          <Link
            href="/collections"
            className="text-sm font-medium hover:text-primary"
          >
            Collections
          </Link>
          <Link
            href="/create"
            className="text-sm font-medium hover:text-primary"
          >
            Create
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <ThemeSwitcher />
          <div className="hidden md:block">
            <WalletConnect />
          </div>
          <Button
            className="md:hidden"
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu size={24} />
          </Button>
        </div>
      </div>

      {/* Mobile search bar - only visible when on small screens */}
      <div className="md:hidden px-4 py-2 border-b">
        <SearchBar />
      </div>

      {/* Mobile menu - could be expanded in the future */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 py-4 border-b bg-background">
          <nav className="flex flex-col space-y-4">
            <Link href="/" className="text-sm font-medium hover:text-primary">
              Home
            </Link>
            <Link
              href="/explore"
              className="text-sm font-medium hover:text-primary"
            >
              Explore
            </Link>
            <Link
              href="/collections"
              className="text-sm font-medium hover:text-primary"
            >
              Collections
            </Link>
            <Link
              href="/create"
              className="text-sm font-medium hover:text-primary"
            >
              Create
            </Link>
            <div className="mt-2">
              <WalletConnect />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
