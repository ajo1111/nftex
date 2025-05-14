import { CategoryTabs } from "@/components/category-tabs";
import { FeaturedCollections } from "@/components/featured-collections";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { Navbar } from "@/components/navbar";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <CategoryTabs />
        <FeaturedCollections />
      </main>
      <Footer />
    </div>
  );
}
