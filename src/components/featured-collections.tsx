import { NFTCard } from "@/components/nft-card";

const FEATURED_NFTS = [
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
];

export function FeaturedCollections() {
  return (
    <section className="py-12">
      <div className="container">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-purple-600 text-transparent bg-clip-text">
            Featured Collections
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {FEATURED_NFTS.map((nft) => (
            <NFTCard key={nft.id} {...nft} />
          ))}
        </div>
      </div>
    </section>
  );
}
