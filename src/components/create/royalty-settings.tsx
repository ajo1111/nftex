"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { useState, useEffect } from "react";

interface RoyaltySettingsProps {
  royaltyPercentage: string;
  onRoyaltyChange: (percentage: string) => void;
}

export function RoyaltySettings({
  royaltyPercentage,
  onRoyaltyChange,
}: RoyaltySettingsProps) {
  const [percentage, setPercentage] = useState(
    parseFloat(royaltyPercentage) || 10,
  );

  useEffect(() => {
    onRoyaltyChange(percentage.toString());
  }, [percentage, onRoyaltyChange]);

  const handleSliderChange = (value: number[]) => {
    setPercentage(value[0]);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value) && value >= 0 && value <= 50) {
      setPercentage(value);
    }
  };

  return (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground">
        Earn a percentage of the sale price each time your NFT is sold on the
        marketplace.
      </p>

      <div className="space-y-2">
        <div className="flex justify-between">
          <Label htmlFor="royalty">Royalty Percentage</Label>
          <span className="text-sm text-muted-foreground">{percentage}%</span>
        </div>

        <Slider
          id="royalty-slider"
          min={0}
          max={50}
          step={0.5}
          value={[percentage]}
          onValueChange={handleSliderChange}
          className="py-4"
        />

        <div className="relative w-24">
          <Input
            id="royalty"
            type="number"
            min="0"
            max="50"
            step="0.5"
            value={percentage}
            onChange={handleInputChange}
            className="pr-8 border-purple-600/30 focus-visible:ring-purple-600/50"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <span className="text-muted-foreground">%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
