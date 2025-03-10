import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, Heart, Share2, Tag } from "lucide-react";
import Image from "next/image";

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

export default function NFTDetailPage({ params }: { params: { id: string } }) {
  const nft = MOCK_NFTS.find((n) => n.id === params.id) || MOCK_NFTS[0];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 container py-12">
        <div className="grid md:grid-cols-[1fr_500px] gap-12">
          {/* NFT Image */}
          <div className="rounded-xl overflow-hidden border border-purple-600/20 bg-muted">
            <Image
              src={nft.image}
              alt={nft.title}
              width={800}
              height={800}
              className="w-full h-auto object-cover"
              priority
            />
          </div>

          {/* NFT Details */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm text-muted-foreground">
                  {nft.collection}
                </p>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Heart size={20} className="text-muted-foreground" />
                  </Button>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Share2 size={20} className="text-muted-foreground" />
                  </Button>
                </div>
              </div>

              <h1 className="text-3xl font-bold">{nft.title}</h1>
              <div className="flex items-center gap-2 mt-2">
                <p className="text-sm">
                  Owned by <span className="text-purple-600">{nft.owner}</span>
                </p>
              </div>
            </div>

            <div className="space-y-4 p-6 rounded-xl border border-purple-600/20">
              <div className="flex justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Current Price</p>
                  <p className="text-2xl font-bold text-purple-600">
                    {nft.price} ETH
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Highest Bid</p>
                  <p className="text-xl font-semibold">{nft.highestBid} ETH</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Button className="flex-1 gap-2 bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white border-none">
                  <Tag size={16} />
                  Buy Now
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 gap-2 border-purple-600/50 text-purple-600 hover:bg-purple-600/10"
                >
                  <Clock size={16} />
                  Place Bid
                </Button>
              </div>
            </div>

            <Tabs defaultValue="details" className="w-full">
              <TabsList className="grid grid-cols-3 w-full">
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="properties">Properties</TabsTrigger>
                <TabsTrigger value="history">History</TabsTrigger>
              </TabsList>

              <TabsContent value="details" className="space-y-4 pt-4">
                <div>
                  <h3 className="font-medium mb-2">Description</h3>
                  <p className="text-muted-foreground">{nft.description}</p>
                </div>

                <Separator />

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <p className="text-muted-foreground">Creator</p>
                    <p className="text-purple-600">{nft.creator}</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-muted-foreground">Collection</p>
                    <p>{nft.collection}</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-muted-foreground">Created</p>
                    <p>{new Date(nft.createdAt).toLocaleDateString()}</p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="properties" className="pt-4">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {nft.properties.map((prop, index) => (
                    <div
                      key={index}
                      className="border border-purple-600/20 rounded-lg p-3 text-center bg-purple-600/5"
                    >
                      <p className="text-xs text-muted-foreground uppercase">
                        {prop.trait_type}
                      </p>
                      <p className="font-medium truncate">{prop.value}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="history" className="pt-4">
                <div className="space-y-4">
                  {nft.history.map((event, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center p-3 border-b border-purple-600/10"
                    >
                      <div>
                        <p className="font-medium">{event.event}</p>
                        <p className="text-sm text-muted-foreground">
                          From {event.from}{" "}
                          {event.to !== "-" ? `to ${event.to}` : ""}
                        </p>
                      </div>
                      <div className="text-right">
                        <p>{event.price}</p>
                        <p className="text-sm text-muted-foreground">
                          {new Date(event.date).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
