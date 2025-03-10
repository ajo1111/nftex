import { CreateNFTForm } from "@/components/create/create-nft-form";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

export default function CreatePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 container py-12">
        <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-yellow-400 via-orange-500 to-purple-600 text-transparent bg-clip-text inline-block">
          Create New NFT
        </h1>
        <CreateNFTForm />
      </main>
      <Footer />
    </div>
  );
}
