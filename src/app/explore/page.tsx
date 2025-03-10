import { CategoryTabs } from "@/components/category-tabs";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { NFTCard } from "@/components/nft-card";
import { SearchBar } from "@/components/search-bar";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Filter, SortDesc } from "lucide-react";

// Mock NFT data
const EXPLORE_NFTS = [
  {
    id: "1",
    title: "Cosmic Perspective #42",
    creator: "ArtistOne",
    price: "2.5",
    image:
      "https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?w=800&q=80",
  },
  {
    id: "2",
    title: "Digital Dreams #18",
    creator: "CryptoCreator",
    price: "1.8",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  },
  {
    id: "3",
    title: "Abstract Reality",
    creator: "DigitalArtist",
    price: "3.2",
    image:
      "https://images.unsplash.com/photo-1633537066504-552f9e1e5d2e?w=800&q=80",
  },
  {
    id: "4",
    title: "Neon Genesis #7",
    creator: "NFTMaster",
    price: "4.0",
    image:
      "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=800&q=80",
  },
  {
    id: "5",
    title: "Pixel Perfection",
    creator: "PixelQueen",
    price: "1.5",
    image:
      "https://images.unsplash.com/photo-1647163927506-399a13f9f908?w=800&q=80",
  },
  {
    id: "6",
    title: "Future Nostalgia",
    creator: "RetroFuturist",
    price: "2.2",
    image:
      "https://images.unsplash.com/photo-1618172193763-c511deb635ca?w=800&q=80",
  },
  {
    id: "7",
    title: "Ethereal Landscape",
    creator: "VirtualWorlds",
    price: "3.7",
    image:
      "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=800&q=80",
  },
  {
    id: "8",
    title: "Cybernetic Sunset",
    creator: "TechnoArtist",
    price: "2.8",
    image:
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&q=80",
  },
  {
    id: "9",
    title: "Quantum Fragments",
    creator: "QuantumCreator",
    price: "5.1",
    image:
      "https://images.unsplash.com/photo-1604871000636-074fa5117945?w=800&q=80",
  },
  {
    id: "10",
    title: "Digital Dystopia",
    creator: "CyberPunk",
    price: "3.5",
    image:
      "https://images.unsplash.com/photo-1604871000636-074fa5117945?w=800&q=80",
  },
  {
    id: "11",
    title: "Holographic Dreams",
    creator: "HoloArtist",
    price: "2.7",
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80",
  },
  {
    id: "12",
    title: "Neon Wilderness",
    creator: "NeonMaster",
    price: "1.9",
    image:
      "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=800&q=80",
  },
];

export default function ExplorePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <div className="container py-8">
          <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-yellow-400 via-orange-500 to-purple-600 text-transparent bg-clip-text inline-block">
            Explore NFTs
          </h1>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="w-full md:w-64 space-y-6">
              <div className="p-4 border rounded-lg border-purple-600/20">
                <h3 className="font-medium flex items-center gap-2 mb-4">
                  <Filter size={16} />
                  Filters
                </h3>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Price Range</h4>
                    <div className="space-y-4">
                      <Slider defaultValue={[0, 10]} max={10} step={0.1} />
                      <div className="flex justify-between text-sm">
                        <span>0 ETH</span>
                        <span>10 ETH</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Collections</h4>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 text-sm">
                        <input
                          type="checkbox"
                          className="rounded text-purple-600 focus:ring-purple-600"
                        />
                        Abstract Dimensions
                      </label>
                      <label className="flex items-center gap-2 text-sm">
                        <input
                          type="checkbox"
                          className="rounded text-purple-600 focus:ring-purple-600"
                        />
                        Digital Dreams
                      </label>
                      <label className="flex items-center gap-2 text-sm">
                        <input
                          type="checkbox"
                          className="rounded text-purple-600 focus:ring-purple-600"
                        />
                        Neon Genesis
                      </label>
                      <label className="flex items-center gap-2 text-sm">
                        <input
                          type="checkbox"
                          className="rounded text-purple-600 focus:ring-purple-600"
                        />
                        Pixel Perfection
                      </label>
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white border-none">
                    Apply Filters
                  </Button>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                <div className="w-full md:w-64">
                  <SearchBar />
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">
                    Sort by:
                  </span>
                  <select className="h-9 rounded-md border border-purple-600/30 bg-background px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-purple-600/50">
                    <option>Recently Added</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Most Popular</option>
                  </select>
                </div>
              </div>

              <CategoryTabs />

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
                {EXPLORE_NFTS.map((nft) => (
                  <NFTCard key={nft.id} {...nft} />
                ))}
              </div>

              <div className="flex justify-center mt-12">
                <Button
                  variant="outline"
                  className="border-purple-600/50 text-purple-600 hover:bg-purple-600/10"
                >
                  Load More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
