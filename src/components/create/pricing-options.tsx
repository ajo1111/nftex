"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface PricingOptionsProps {
  saleType: "fixed" | "auction";
  price: string;
  onSaleTypeChange: (type: "fixed" | "auction") => void;
  onPriceChange: (price: string) => void;
}

export function PricingOptions({
  saleType,
  price,
  onSaleTypeChange,
  onPriceChange,
}: PricingOptionsProps) {
  return (
    <Tabs
      value={saleType}
      onValueChange={(v) => onSaleTypeChange(v as "fixed" | "auction")}
      className="w-full"
    >
      <TabsList className="grid grid-cols-2 w-full mb-6">
        <TabsTrigger value="fixed">Fixed Price</TabsTrigger>
        <TabsTrigger value="auction">Timed Auction</TabsTrigger>
      </TabsList>

      <TabsContent value="fixed" className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="price">Price (ETH)</Label>
          <div className="relative">
            <Input
              id="price"
              type="number"
              step="0.01"
              min="0"
              placeholder="0.00"
              value={price}
              onChange={(e) => onPriceChange(e.target.value)}
              className="pr-12 border-purple-600/30 focus-visible:ring-purple-600/50"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <span className="text-muted-foreground">ETH</span>
            </div>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="auction" className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="startingPrice">Starting Price (ETH)</Label>
          <div className="relative">
            <Input
              id="startingPrice"
              type="number"
              step="0.01"
              min="0"
              placeholder="0.00"
              value={price}
              onChange={(e) => onPriceChange(e.target.value)}
              className="pr-12 border-purple-600/30 focus-visible:ring-purple-600/50"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <span className="text-muted-foreground">ETH</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="duration">Duration</Label>
            <select
              id="duration"
              className="w-full h-10 px-3 rounded-md border border-purple-600/30 bg-background focus:outline-none focus:ring-2 focus:ring-purple-600/50"
            >
              <option value="1">1 day</option>
              <option value="3">3 days</option>
              <option value="5">5 days</option>
              <option value="7">7 days</option>
              <option value="14">14 days</option>
              <option value="30">30 days</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="reservePrice">Reserve Price (Optional)</Label>
            <div className="relative">
              <Input
                id="reservePrice"
                type="number"
                step="0.01"
                min="0"
                placeholder="0.00"
                className="pr-12 border-purple-600/30 focus-visible:ring-purple-600/50"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <span className="text-muted-foreground">ETH</span>
              </div>
            </div>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
}
