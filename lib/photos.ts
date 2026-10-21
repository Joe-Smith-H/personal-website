export type Photo = {
  src: string
  alt: string
  title: string
  place: string
  year: string
  aspect: string
}

export const photos: Photo[] = [
  {
    src: "/photos/portrait-blue.webp",
    alt: "Portrait of a woman lit by cool blue and violet light against a pale background.",
    title: "Ivy",
    place: "Studio, Portland",
    year: "2025",
    aspect: "aspect-[4/5]",
  },
  {
    src: "/photos/wedding-vows.webp",
    alt: "A couple holding a bouquet, backlit by low golden light among trees.",
    title: "Late light",
    place: "Hood River, Oregon",
    year: "2024",
    aspect: "aspect-[3/2]",
  },
  {
    src: "/photos/portrait-ama.webp",
    alt: "Portrait of a woman with short hair and a patterned blue and gold shirt, standing against a red wall.",
    title: "Ama",
    place: "Portland",
    year: "2025",
    aspect: "aspect-[4/5]",
  },
  {
    src: "/photos/wedding-beach.webp",
    alt: "A bride and groom standing on a pebble beach, the bride's veil lifting in the wind.",
    title: "Ella & James",
    place: "Cannon Beach, Oregon",
    year: "2025",
    aspect: "aspect-[3/4]",
  },
  {
    src: "/photos/portrait-nadia.webp",
    alt: "A woman in a red dress laughing, photographed outdoors against a soft, blurred background.",
    title: "Nadia",
    place: "Alberta Arts District",
    year: "2024",
    aspect: "aspect-[4/5]",
  },
  {
    src: "/photos/landscape-lake.webp",
    alt: "A turquoise alpine lake reflecting snow-covered mountains at sunrise.",
    title: "Moraine Lake",
    place: "Banff, Alberta",
    year: "2023",
    aspect: "aspect-[3/2]",
  },
  {
    src: "/photos/portrait-editorial.webp",
    alt: "A man in a dark suit and burgundy tie standing outdoors with his arms folded.",
    title: "Daniel",
    place: "Downtown, Portland",
    year: "2024",
    aspect: "aspect-[4/5]",
  },
  {
    src: "/photos/landscape-forest.webp",
    alt: "A narrow path winding through a stand of tall trees in late afternoon light.",
    title: "The long way home",
    place: "Tillamook State Forest",
    year: "2023",
    aspect: "aspect-[3/2]",
  },
]
