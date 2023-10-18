import { Billboard } from "@prisma/client";
import Image from "next/image";

interface BillboardLabelWithImageProps {
  billboard: Billboard;
}

const BillboardLabelWithImage = ({
  billboard,
}: BillboardLabelWithImageProps) => {
  return (
    <div className="flex-1 flex items-center">
      <Image
        alt={`${billboard.label} image`}
        src={billboard.imageUrl}
        width={128}
        height={128}
        quality={60}
        loading="lazy"
        className="h-8 w-8 rounded-sm object-cover mr-4"
      />
      {billboard.label}
    </div>
  );
};

export default BillboardLabelWithImage;
