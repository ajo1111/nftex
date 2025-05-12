"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";

export function SearchBar() {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality here
    console.log("Searching for:", query);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="relative w-full max-w-sm flex items-center"
    >
      <Input
        type="search"
        placeholder="Search NFTs, collections..."
        className="pr-10 bg-background border-purple-600/30 focus-visible:ring-purple-600/50"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
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
  );
}
