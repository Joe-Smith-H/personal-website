export const site = {
  name: "Mara Ellison",
  role: "Portrait & wedding photographer",
  location: "Portland, Oregon",
  email: "hello@maraellison.com",
  instagram: "@mara.ellison",
  instagramUrl: "https://instagram.com/mara.ellison",
  availability: "Now booking sessions and weddings from January 2027.",
}

export const facts = [
  { label: "Based in", value: "Portland, Oregon" },
  { label: "Photographing since", value: "2014" },
  { label: "Formats", value: "Film and digital" },
  { label: "Travel", value: "Available worldwide" },
]

export type PriceTier = {
  name: string
  length: string
  includes: string
  price: string
  note: string
}

export const pricing: PriceTier[] = [
  {
    name: "Portrait",
    length: "90 minutes",
    includes: "25 edited photographs, private online gallery",
    price: "from $450",
    note: "For individuals, couples and families. One location, wardrobe changes welcome.",
  },
  {
    name: "Couples & engagement",
    length: "2 hours",
    includes: "40 edited photographs, two locations",
    price: "from $650",
    note: "A walk, a drink, and pictures that look like the two of you rather than a pose.",
  },
  {
    name: "Wedding",
    length: "Full day",
    includes: "400+ edited photographs, engagement session included",
    price: "from $2,800",
    note: "Coverage from getting ready to the last dance, with a second photographer when the day calls for it.",
  },
  {
    name: "Editorial & commercial",
    length: "Half or full day",
    includes: "Usage-licensed images, shot list planning",
    price: "on request",
    note: "Portraits for press, brands and publications. Tell me the brief and the deadline.",
  },
]

export const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
]
