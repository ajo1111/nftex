"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus } from "lucide-react";
import { useState } from "react";

interface CollectionSelectorProps {
  onCollectionChange: (collection: string) => void;
}

// Mock collections data
const MOCK_COLLECTIONS = [
  {
    id: "1",
    name: "Abstract Art",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=200&q=80",
  },
  {
    id: "2",
    name: "Digital Dreams",
    image:
      "https://images.unsplash.com/photo-1633537066504-552f9e1e5d2e?w=200&q=80",
  },
  {
    id: "3",
    name: "Crypto Punks",
    image:
      "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=200&q=80",
  },
];

export function CollectionSelector({
  onCollectionChange,
}: CollectionSelectorProps) {
  const [selectedCollection, setSelectedCollection] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [newCollectionName, setNewCollectionName] = useState("");

  const handleCollectionSelect = (collectionId: string) => {
    setSelectedCollection(collectionId);
    onCollectionChange(collectionId);
    setIsDialogOpen(false);
  };

  const handleCreateCollection = () => {
    // In a real implementation, we would create the collection in the database
    // For now, we'll just simulate it
    alert(`New collection "${newCollectionName}" would be created here`);
    setNewCollectionName("");
    setIsCreateDialogOpen(false);
  };

  const getCollectionName = () => {
    const collection = MOCK_COLLECTIONS.find(
      (c) => c.id === selectedCollection,
    );
    return collection ? collection.name : "Select Collection";
  };

  return (
    <div>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="w-full justify-between border-purple-600/30 hover:bg-purple-600/5"
          >
            {getCollectionName()}
            <span className="sr-only">Select Collection</span>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Select Collection</DialogTitle>
            <DialogDescription>
              Choose an existing collection or create a new one
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            {MOCK_COLLECTIONS.map((collection) => (
              <button
                key={collection.id}
                className={`flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors ${selectedCollection === collection.id ? "bg-purple-600/10 border border-purple-600/30" : ""}`}
                onClick={() => handleCollectionSelect(collection.id)}
              >
                <div className="w-12 h-12 rounded-md overflow-hidden bg-muted relative">
                  <img
                    src={collection.image}
                    alt={collection.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <span className="font-medium">{collection.name}</span>
              </button>
            ))}

            <Dialog
              open={isCreateDialogOpen}
              onOpenChange={setIsCreateDialogOpen}
            >
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full border-dashed border-purple-600/30 text-purple-600 hover:bg-purple-600/5"
                >
                  <Plus size={16} className="mr-2" />
                  Create New Collection
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Create New Collection</DialogTitle>
                  <DialogDescription>
                    Add details for your new collection
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="collection-name">Collection Name</Label>
                    <Input
                      id="collection-name"
                      placeholder="My Amazing Collection"
                      value={newCollectionName}
                      onChange={(e) => setNewCollectionName(e.target.value)}
                      className="border-purple-600/30 focus-visible:ring-purple-600/50"
                    />
                  </div>

                  <Button
                    onClick={handleCreateCollection}
                    disabled={!newCollectionName.trim()}
                    className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white border-none"
                  >
                    Create Collection
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
