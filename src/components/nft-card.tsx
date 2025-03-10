import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

interface NFTCardProps {
  id: string;
  title: string;
  creator: string;
  price: string;
  image: string;
}

export function NFTCard({ id, title, creator, price, image }: NFTCardProps) {
  return (
    <Link href={`/nft/${id}`}>
      <Card className="overflow-hidden transition-all hover:shadow-lg hover:scale-[1.02] hover:border-purple-600/50 hover:shadow-purple-600/10">
        <CardHeader className="p-0">
          <AspectRatio ratio={1 / 1}>
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover rounded-t-lg"
            />
          </AspectRatio>
        </CardHeader>
        <CardContent className="p-4">
          <h3 className="font-semibold truncate">{title}</h3>
          <p className="text-sm text-muted-foreground">by {creator}</p>
        </CardContent>
        <CardFooter className="p-4 pt-0 flex justify-between">
          <div className="text-sm">
            <span className="text-muted-foreground">Price</span>
            <p className="font-semibold text-purple-600">{price} ETH</p>
          </div>
          <div className="text-sm text-right">
            <span className="text-muted-foreground">Highest Bid</span>
            <p className="font-semibold text-purple-600">
              {(parseFloat(price) * 0.8).toFixed(2)} ETH
            </p>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
