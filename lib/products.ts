export type Product = {
  slug: string
  name: string
  price: string
  color: string
  category: string
  img: string
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
    img: "/images/product-jacket.png",
    tag: "Drop 001",
    details: [
      "Second Chances circular badge, left chest",
      "Vertical 25 Two Life hem tag",
      "Brush-script detail toward the rear of the right sleeve",
      "Heavyweight brushed flannel, fully lined",
    ],
  },
  {
    slug: "built-through-it-work-pant",
    name: "The Built Through It Work Pant",
    price: "$142",
    color: "Black — Structured Twill",
    category: "Bottoms",
    img: "/images/product-pant.png",
    tag: "Drop 001",
    details: [
      "Relaxed straight carpenter cut, utility pockets",
      "“Built Through It” along the inner rear seam",
      "“Not my past. My purpose.” — hidden vertical seam detail",
      "14oz cotton twill, triple-needle stitching",
    ],
  },
  {
    slug: "more-than-your-sentence-tee",
    name: "More Than Your Sentence Tee",
    price: "$52",
    color: "Black — Heavyweight Cotton",
    category: "Tops",
    img: "/images/product-tee.png",
    tag: "Drop 001",
    details: [
      "Boxy premium fit, 240gsm cotton",
      "Burnt-orange brush-script chest hit",
      "Inside-neck Second Chances print",
      "Ribbed collar, double-stitched hems",
    ],
  },
  {
    slug: "second-chances-beanie",
    name: "Second Chances Beanie",
    price: "$38",
    color: "Black — Ribbed Knit",
    category: "Accessories",
    img: "/images/product-beanie.png",
    tag: "Drop 001",
    details: [
      "Cuffed ribbed knit, one size",
      "Embroidered Second Chances patch",
      "Burnt-orange stitch accent",
      "Warm, structured, everyday wear",
    ],
  },
]

export function getProduct(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug)
}
