import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Plus } from "lucide-react";
import Link from "next/link";

// Mock collections data
const MOCK_COLLECTIONS = [
  {
    id: "1",
    name: "Abstract Dimensions",
    creator: "ArtistOne",
    items: 12,
    floorPrice: "1.2",
    volume: "45.8",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    banner:
      "https://images.unsplash.com/photo-1579546929662-711aa81148cf?w=1200&q=80",
  },
  {
    id: "2",
    name: "Digital Dreams",
    creator: "CryptoCreator",
    items: 24,
    floorPrice: "0.8",
    volume: "32.5",
    image:
      "https://images.unsplash.com/photo-1633537066504-552f9e1e5d2e?w=800&q=80",
    banner:
      "https://images.unsplash.com/photo-1604871000636-074fa5117945?w=1200&q=80",
  },
  {
    id: "3",
    name: "Neon Genesis",
    creator: "NFTMaster",
    items: 18,
    floorPrice: "2.4",
    volume: "78.2",
    image:
      "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=800&q=80",
    banner:
      "https://images.unsplash.com/photo-1614728263952-84ea256f9679?w=1200&q=80",
  },
  {
    id: "4",
    name: "Pixel Perfection",
    creator: "PixelQueen",
    items: 32,
    floorPrice: "0.5",
    volume: "28.6",
    image:
      "https://images.unsplash.com/photo-1647163927506-399a13f9f908?w=800&q=80",
    banner:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&q=80",
  },
  {
    id: "5",
    name: "Future Nostalgia",
    creator: "RetroFuturist",
    items: 15,
    floorPrice: "1.8",
    volume: "42.3",
    image:
      "https://images.unsplash.com/photo-1618172193763-c511deb635ca?w=800&q=80",
    banner:
      "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=1200&q=80",
  },
  {
    id: "6",
    name: "Ethereal Landscapes",
    creator: "VirtualWorlds",
    items: 21,
    floorPrice: "3.2",
    volume: "67.9",
    image:
      "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=800&q=80",
    banner:
      "https://images.unsplash.com/photo-1520034475321-cbe63696469a?w=1200&q=80",
  },
];

export default function CollectionsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 container py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-purple-600 text-transparent bg-clip-text inline-block">
            Collections
          </h1>
          <Link href="/create">
            <Button className="gap-2 bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white border-none">
              <Plus size={16} />
              Create Collection
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_COLLECTIONS.map((collection) => (
            <Link key={collection.id} href={`/collections/${collection.id}`}>
              <div className="group rounded-xl overflow-hidden border border-purple-600/20 hover:shadow-lg hover:shadow-purple-600/10 transition-all hover:border-purple-600/50">
                <div className="h-32 overflow-hidden relative">
                  <img
                    src={collection.banner}
                    alt={collection.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-5 pt-12 relative">
                  <div className="absolute -top-10 left-5 rounded-xl overflow-hidden border-4 border-background w-16 h-16">
                    <img
                      src={collection.image}
                      alt={collection.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h2 className="text-xl font-bold mb-1">{collection.name}</h2>
                  <p className="text-sm text-muted-foreground mb-4">
                    by {collection.creator}
                  </p>

                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <div>
                      <p className="text-muted-foreground">Items</p>
                      <p className="font-medium">{collection.items}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Floor</p>
                      <p className="font-medium text-purple-600">
                        {collection.floorPrice} ETH
                      </p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Volume</p>
                      <p className="font-medium">{collection.volume} ETH</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
