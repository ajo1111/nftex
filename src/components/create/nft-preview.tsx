import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";

interface NFTPreviewProps {
  name: string;
  previewUrl: string;
  price: string;
  creator: string;
}

export function NFTPreview({
  name,
  previewUrl,
  price,
  creator,
}: NFTPreviewProps) {
  return (
    <Card className="overflow-hidden border-purple-600/20 hover:shadow-purple-600/10">
      <div className="aspect-square bg-muted relative">
        {previewUrl ? (
          <Image src={previewUrl} alt={name} fill className="object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-yellow-400 via-orange-500 to-purple-600">
            <span className="text-white font-bold">Preview</span>
          </div>
        )}
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold truncate">{name}</h3>
        <p className="text-sm text-muted-foreground">by {creator}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <div className="text-sm">
          <span className="text-muted-foreground">Price</span>
          <p className="font-semibold text-purple-600">{price}</p>
        </div>
      </CardFooter>
    </Card>
  );
}
