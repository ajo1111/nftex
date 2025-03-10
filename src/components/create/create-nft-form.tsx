"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { WalletConnect } from "@/components/wallet/wallet-connect";
import { FileUpload } from "@/components/create/file-upload";
import { NFTPreview } from "@/components/create/nft-preview";
import { PricingOptions } from "@/components/create/pricing-options";
import { PropertiesEditor } from "@/components/create/properties-editor";
import { RoyaltySettings } from "@/components/create/royalty-settings";
import { CollectionSelector } from "@/components/create/collection-selector";
import { useState } from "react";

export function CreateNFTForm() {
  const [formStep, setFormStep] = useState(1);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    collection: "",
    properties: [] as { trait_type: string; value: string }[],
    price: "",
    saleType: "fixed" as "fixed" | "auction",
    royaltyPercentage: "10",
  });

  const handleFileUpload = (file: File) => {
    setIsUploading(true);

    // Create a preview URL for the uploaded file
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewUrl(reader.result as string);
      setUploadedFile(file);
      setIsUploading(false);
    };
    reader.readAsDataURL(file);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaleTypeChange = (value: "fixed" | "auction") => {
    setFormData((prev) => ({ ...prev, saleType: value }));
  };

  const handlePropertiesChange = (
    properties: { trait_type: string; value: string }[],
  ) => {
    setFormData((prev) => ({ ...prev, properties }));
  };

  const handleCollectionChange = (collection: string) => {
    setFormData((prev) => ({ ...prev, collection }));
  };

  const handleRoyaltyChange = (royaltyPercentage: string) => {
    setFormData((prev) => ({ ...prev, royaltyPercentage }));
  };

  const nextStep = () => {
    setFormStep((prev) => Math.min(prev + 1, 3));
  };

  const prevStep = () => {
    setFormStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // In a real implementation, we would:
    // 1. Upload the file to IPFS
    // 2. Create metadata JSON and upload to IPFS
    // 3. Call the smart contract to mint the NFT

    // For now, we'll simulate the process
    alert("NFT creation process would start here with blockchain integration");
    console.log("Form data:", { ...formData, file: uploadedFile?.name });
  };

  return (
    <div className="grid md:grid-cols-[1fr_400px] gap-8">
      <Card>
        <CardContent className="p-6">
          <Tabs value={`step-${formStep}`} className="w-full">
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger
                value="step-1"
                onClick={() => setFormStep(1)}
                disabled={formStep < 1}
                className={formStep >= 1 ? "text-purple-600" : ""}
              >
                Upload
              </TabsTrigger>
              <TabsTrigger
                value="step-2"
                onClick={() => setFormStep(2)}
                disabled={formStep < 2}
                className={formStep >= 2 ? "text-purple-600" : ""}
              >
                Details
              </TabsTrigger>
              <TabsTrigger
                value="step-3"
                onClick={() => setFormStep(3)}
                disabled={formStep < 3}
                className={formStep >= 3 ? "text-purple-600" : ""}
              >
                Pricing
              </TabsTrigger>
            </TabsList>

            <TabsContent value="step-1" className="mt-0">
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold mb-4">Upload File</h2>
                  <p className="text-muted-foreground mb-6">
                    Supported file types: JPG, PNG, GIF, SVG, MP4, WEBM, MP3,
                    WAV, OGG, GLB, GLTF. Max size: 100 MB
                  </p>
                  <FileUpload
                    onFileUpload={handleFileUpload}
                    isUploading={isUploading}
                  />
                </div>

                <div className="flex justify-end mt-8">
                  <Button
                    onClick={nextStep}
                    disabled={!uploadedFile || isUploading}
                    className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white border-none"
                  >
                    Next: Add Details
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="step-2" className="mt-0">
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold mb-4">NFT Details</h2>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Item name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="border-purple-600/30 focus-visible:ring-purple-600/50"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description">Description</Label>
                      <Textarea
                        id="description"
                        name="description"
                        placeholder="Provide a detailed description of your item"
                        rows={4}
                        value={formData.description}
                        onChange={handleInputChange}
                        className="border-purple-600/30 focus-visible:ring-purple-600/50"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Collection</Label>
                      <CollectionSelector
                        onCollectionChange={handleCollectionChange}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Properties</Label>
                      <PropertiesEditor
                        onPropertiesChange={handlePropertiesChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-between mt-8">
                  <Button
                    variant="outline"
                    onClick={prevStep}
                    className="border-purple-600/50 text-purple-600 hover:bg-purple-600/10"
                  >
                    Back
                  </Button>
                  <Button
                    onClick={nextStep}
                    disabled={!formData.name}
                    className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white border-none"
                  >
                    Next: Set Price
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="step-3" className="mt-0">
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold mb-4">Pricing</h2>
                  <PricingOptions
                    saleType={formData.saleType}
                    price={formData.price}
                    onSaleTypeChange={handleSaleTypeChange}
                    onPriceChange={(value) =>
                      setFormData((prev) => ({ ...prev, price: value }))
                    }
                  />

                  <Separator className="my-6" />

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Royalties</h3>
                    <RoyaltySettings
                      royaltyPercentage={formData.royaltyPercentage}
                      onRoyaltyChange={handleRoyaltyChange}
                    />
                  </div>
                </div>

                <div className="flex justify-between mt-8">
                  <Button
                    variant="outline"
                    onClick={prevStep}
                    className="border-purple-600/50 text-purple-600 hover:bg-purple-600/10"
                  >
                    Back
                  </Button>
                  <Button
                    onClick={handleSubmit}
                    disabled={!formData.price}
                    className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white border-none"
                  >
                    Create NFT
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <div className="space-y-6">
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-medium mb-4">Preview</h3>
            <NFTPreview
              name={formData.name || "Untitled NFT"}
              previewUrl={previewUrl}
              price={
                formData.price ? `${formData.price} ETH` : "Not priced yet"
              }
              creator="Your Name"
            />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-medium mb-4">Wallet</h3>
            <p className="text-sm text-muted-foreground mb-4">
              You need to connect your wallet to create an NFT
            </p>
            <WalletConnect />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
