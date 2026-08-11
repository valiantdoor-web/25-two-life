export type Product = {
  slug: string
  name: string
  price: string
  color: string
  category: string
  img: string
  gallery?: string[]
  tag?: string
  details: string[]
}

export const PRODUCTS: Product[] = [
  {
    slug: "second-chance-jacket",
    name: "The Second Chance Jacket",
    price: "$188",
    color: "Black / Charcoal Plaid",
    category: "Outerwear",
    img: "/images/merch/jacket-front.jpg",
    gallery: ["/images/merch/jacket-front.jpg", "/images/merch/jacket-back.jpg"],
    tag: "Drop 001",
    details: [
      "Second Chances circular badge, left chest",
      "Burnt-orange 25 Two Life brush-script down the right sleeve",
      "Vertical 25 Two Life hem tag",
      "Heavyweight brushed flannel, fully lined",
    ],
  },
  {
    slug: "built-through-it-work-pant",
    name: "The Built Through It Work Pant",
    price: "$142",
    color: "Washed Black — Structured Twill",
    category: "Bottoms",
    img: "/images/merch/pant-front.jpg",
    gallery: ["/images/merch/pant-front.jpg", "/images/merch/pant-back.jpg"],
    tag: "Drop 001",
    details: [
      "Relaxed straight carpenter cut, utility pockets",
      "“Built Through It” brush-script on the front thigh",
      "“Not my past. My purpose.” down the back leg",
      "14oz cotton twill, triple-needle stitching",
    ],
  },
  {
    slug: "more-than-your-sentence-tee",
    name: "More Than Your Sentence Tee",
    price: "$52",
    color: "Black / Acid Lime Print",
    category: "Tops",
    img: "/images/merch/tee-lime.jpg",
    tag: "Drop 001",
    details: [
      "Oversized 25 Two Life back print in acid lime",
      "“More than your sentence.” tagline hit",
      "Boxy premium fit, 240gsm cotton",
      "Ribbed collar, double-stitched hems",
    ],
  },
  {
    slug: "lived-learned-earned-tee",
    name: "Lived. Learned. Earned. Tee",
    price: "$52",
    color: "Black / Red Print",
    category: "Tops",
    img: "/images/merch/tee-red.jpg",
    tag: "Drop 001",
    details: [
      "Oversized 25 Two Life back print in signal red",
      "“Lived. Learned. Earned.” tagline hit",
      "Boxy premium fit, 240gsm cotton",
      "Ribbed collar, double-stitched hems",
    ],
  },
  {
    slug: "second-chances-tee",
    name: "Second Chances Tee",
    price: "$52",
    color: "Black / Mono Print",
    category: "Tops",
    img: "/images/merch/tee-white.jpg",
    tag: "Drop 001",
    details: [
      "Oversized 25 Two Life back print in weathered white",
      "“Second chances change everything.” tagline hit",
      "Boxy premium fit, 240gsm cotton",
      "Ribbed collar, double-stitched hems",
    ],
  },
]

export function getProduct(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug)
}
