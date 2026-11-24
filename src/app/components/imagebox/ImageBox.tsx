import Image from "next/image";

interface ImageBoxProps {
  title: string;
  src: string;
  alt: string;
}

export default function ImageBox({ title, src, alt }: ImageBoxProps) {
  return (
    <figure className="flex flex-col gap-2">
      <h2>{title}</h2>

      <div className="relative w-full aspect-video overflow-hidden rounded-lg">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover" 
        />
      </div>
    </figure>
  );
}