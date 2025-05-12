"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, Trash2 } from "lucide-react";
import { useState } from "react";

interface PropertiesEditorProps {
  onPropertiesChange: (
    properties: { trait_type: string; value: string }[],
  ) => void;
}

export function PropertiesEditor({
  onPropertiesChange,
}: PropertiesEditorProps) {
  const [properties, setProperties] = useState<
    { trait_type: string; value: string }[]
  >([]);

  const addProperty = () => {
    const newProperties = [...properties, { trait_type: "", value: "" }];
    setProperties(newProperties);
    onPropertiesChange(newProperties);
  };

  const removeProperty = (index: number) => {
    const newProperties = properties.filter((_, i) => i !== index);
    setProperties(newProperties);
    onPropertiesChange(newProperties);
  };

  const updateProperty = (
    index: number,
    field: "trait_type" | "value",
    value: string,
  ) => {
    const newProperties = [...properties];
    newProperties[index][field] = value;
    setProperties(newProperties);
    onPropertiesChange(newProperties);
  };

  return (
    <div className="space-y-4 border rounded-md p-4 border-purple-600/20">
      <div className="flex justify-between items-center">
        <p className="text-sm text-muted-foreground">
          Properties show up underneath your item, are clickable, and can be
          filtered in your collection's sidebar.
        </p>
      </div>

      {properties.length > 0 && (
        <div className="space-y-3">
          {properties.map((property, index) => (
            <div
              key={index}
              className="grid grid-cols-[1fr_1fr_auto] gap-2 items-end"
            >
              <div>
                <Label htmlFor={`trait-${index}`} className="text-xs">
                  Type
                </Label>
                <Input
                  id={`trait-${index}`}
                  value={property.trait_type}
                  onChange={(e) =>
                    updateProperty(index, "trait_type", e.target.value)
                  }
                  placeholder="Character"
                  className="border-purple-600/30 focus-visible:ring-purple-600/50"
                />
              </div>
              <div>
                <Label htmlFor={`value-${index}`} className="text-xs">
                  Value
                </Label>
                <Input
                  id={`value-${index}`}
                  value={property.value}
                  onChange={(e) =>
                    updateProperty(index, "value", e.target.value)
                  }
                  placeholder="Male"
                  className="border-purple-600/30 focus-visible:ring-purple-600/50"
                />
              </div>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={() => removeProperty(index)}
                className="text-muted-foreground hover:text-destructive"
              >
                <Trash2 size={18} />
              </Button>
            </div>
          ))}
        </div>
      )}

      <Button
        type="button"
        variant="outline"
        size="sm"
        onClick={addProperty}
        className="w-full border-dashed border-purple-600/30 text-purple-600 hover:bg-purple-600/5"
      >
        <Plus size={16} className="mr-2" />
        Add Property
      </Button>
    </div>
  );
}
