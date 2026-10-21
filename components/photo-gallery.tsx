import Image from "next/image"

import { photos } from "@/lib/photos"

export function PhotoGallery() {
  return (
    <div className="columns-1 gap-10 sm:columns-2 sm:gap-x-12 lg:gap-x-20">
      {photos.map((photo) => (
        <figure
          key={photo.src}
          className="mb-12 break-inside-avoid sm:mb-16"
        >
          <div className={`relative overflow-hidden bg-muted ${photo.aspect}`}>
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 ease-out hover:scale-[1.02]"
            />
          </div>
          <figcaption className="mt-4 flex items-baseline justify-between gap-4 border-b border-border/60 pb-4">
            <span className="font-heading text-lg">{photo.title}</span>
            <span className="font-mono text-[10px] tracking-[0.16em] text-muted-foreground uppercase">
              {photo.place} · {photo.year}
            </span>
          </figcaption>
        </figure>
      ))}
    </div>
  )
}
