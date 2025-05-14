import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, Heart, Share2, Tag } from "lucide-react";

// Mock NFT data - in a real app, this would come from an API or database
const MOCK_NFTS = [
  {
    id: "1",
    title: "Cosmic Perspective #42",
    creator: "ArtistOne",
    owner: "Collector123",
    price: "2.5",
    highestBid: "2.0",
    description:
      "A stunning digital artwork exploring the vastness of space and our place within it. This piece combines elements of abstract art with cosmic imagery to create a unique perspective on the universe.",
    image:
      "https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?w=800&q=80",
    createdAt: "2023-09-15T14:30:00Z",
    collection: "Cosmic Series",
    properties: [
      { trait_type: "Style", value: "Abstract" },
      { trait_type: "Colors", value: "Blue, Purple" },
      { trait_type: "Mood", value: "Contemplative" },
      { trait_type: "Rarity", value: "Rare" },
    ],
    history: [
      {
        event: "Minted",
        from: "ArtistOne",
        to: "ArtistOne",
        price: "-",
        date: "2023-09-15T14:30:00Z",
      },
      {
        event: "Listed",
        from: "ArtistOne",
        to: "-",
        price: "2.5 ETH",
        date: "2023-09-15T15:00:00Z",
      },
      {
        event: "Bid",
        from: "Collector123",
        to: "-",
        price: "2.0 ETH",
        date: "2023-09-16T10:15:00Z",
      },
    ],
  },
  // More NFTs would be here
];

// Generate static params for all NFTs
export function generateStaticParams() {
  return MOCK_NFTS.map((nft) => ({
    id: nft.id,
  }));
}

export default function NFTPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 container py-12">
        <div className="grid md:grid-cols-[1fr_500px] gap-12">
          <div className="aspect-square bg-muted relative rounded-lg overflow-hidden">
            <img
              src="/nft-1.jpg"
              alt="NFT"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold">Cosmic Perspective #42</h1>
              <p className="text-muted-foreground">Created by ArtistOne</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-muted-foreground" />
                <span className="text-muted-foreground">Sale ends in 12h 43m 27s</span>
              </div>
              <div className="p-6 bg-card rounded-lg border">
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-muted-foreground">Current price</p>
                    <p className="text-4xl font-bold">2.5 ETH</p>
                    <p className="text-muted-foreground">≈ $4,429.87</p>
                  </div>
                  <div className="flex gap-4">
                    <Button className="flex-1">Buy now</Button>
                    <Button variant="outline" size="icon">
                      <Heart className="w-5 h-5" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Share2 className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <Separator />
            <div>
              <Tabs defaultValue="overview">
                <TabsList className="w-full">
                  <TabsTrigger value="overview" className="flex-1">Overview</TabsTrigger>
                  <TabsTrigger value="properties" className="flex-1">Properties</TabsTrigger>
                  <TabsTrigger value="history" className="flex-1">History</TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className="space-y-4">
                  <div>
                    <h2 className="text-xl font-semibold">Description</h2>
                    <p className="text-muted-foreground">A stunning piece that captures the cosmic beauty of the universe.</p>
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold">Details</h2>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Tag className="w-5 h-5 text-muted-foreground" />
                        <span className="text-muted-foreground">Token ID: 42</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Tag className="w-5 h-5 text-muted-foreground" />
                        <span className="text-muted-foreground">Token Standard: ERC-721</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Tag className="w-5 h-5 text-muted-foreground" />
                        <span className="text-muted-foreground">Chain: Ethereum</span>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="properties">Properties content</TabsContent>
                <TabsContent value="history">History content</TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
