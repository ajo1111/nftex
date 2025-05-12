"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function CategoryTabs() {
  return (
    <section className="py-8">
      <div className="container">
        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-5 w-full max-w-md bg-purple-600/10 text-purple-600">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="art">Art</TabsTrigger>
              <TabsTrigger value="collectibles">Collectibles</TabsTrigger>
              <TabsTrigger value="music">Music</TabsTrigger>
              <TabsTrigger value="photography">Photography</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="all" className="mt-0">
            {/* Content for All tab is shown by default via FeaturedCollections */}
          </TabsContent>
          <TabsContent value="art" className="mt-0">
            {/* Content for Art tab would go here */}
          </TabsContent>
          <TabsContent value="collectibles" className="mt-0">
            {/* Content for Collectibles tab would go here */}
          </TabsContent>
          <TabsContent value="music" className="mt-0">
            {/* Content for Music tab would go here */}
          </TabsContent>
          <TabsContent value="photography" className="mt-0">
            {/* Content for Photography tab would go here */}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
