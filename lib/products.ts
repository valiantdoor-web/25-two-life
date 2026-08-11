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
    img: "/images/merch/sc-jacket-front.jpg",
    gallery: [
      "/images/merch/sc-jacket-front.jpg",
      "/images/merch/sc-jacket-back.jpg",
      "/images/merch/sc-jacket-model.jpg",
      "/images/merch/sc-jacket-chest.jpg",
      "/images/merch/sc-jacket-sleeve.jpg",
      "/images/merch/sc-jacket-hem.jpg",
    ],
    tag: "Drop 001",
    details: [
      "Second Chances circular badge, left chest",
      "Burnt-orange 25 Two Life brush-script down the right sleeve",
      "Vertical 25 Two Life hem tag",
      "Heavyweight brushed flannel, fully lined",
    ],
  },
  {
    slug: "pain-didnt-break-me-jacket",
    name: "The Pain Didn’t Break Me Jacket",
    price: "$198",
    color: "Black / Charcoal Plaid",
    category: "Outerwear",
    img: "/images/merch/pd-jacket-back.jpg",
    gallery: [
      "/images/merch/pd-jacket-back.jpg",
      "/images/merch/pd-jacket-front.jpg",
      "/images/merch/pd-jacket-model.jpg",
      "/images/merch/pd-jacket-lapel.jpg",
      "/images/merch/pd-jacket-sleeve.jpg",
    ],
    tag: "Statement",
    details: [
      "“Past made me. Pain didn’t break me.” oversized back graphic",
      "Gold 25 Two Life chest hit and sleeve script",
      "Hidden lapel logo detail",
      "Heavyweight brushed flannel, fully lined",
    ],
  },
  {
    slug: "white-boy-rick-collab-jacket",
    name: "White Boy Rick ’25 Collab Jacket",
    price: "$225",
    color: "Black / Charcoal Plaid — Limited",
    category: "Outerwear",
    img: "/images/merch/wbr-jacket-front.jpg",
    gallery: [
      "/images/merch/wbr-jacket-front.jpg",
      "/images/merch/wbr-jacket-back.jpg",
      "/images/merch/wbr-jacket-model.jpg",
      "/images/merch/wbr-signature.jpg",
      "/images/merch/wbr-neck.jpg",
      "/images/merch/wbr-tag.jpg",
    ],
    tag: "Artiste Collab",
    details: [
      "Artiste collaboration with White Boy Rick — limited run",
      "Second Chances chest badge + orange sleeve script",
      "White Boy Rick ’25 signature print inside",
      "“Second chances change everything.” neck print",
    ],
  },
  {
    slug: "more-than-your-sentence-flannel",
    name: "More Than Your Sentence Flannel",
    price: "$168",
    color: "Black / Charcoal — Orange Graphic",
    category: "Outerwear",
    img: "/images/merch/og-flannel-back.jpg",
    gallery: [
      "/images/merch/og-flannel-back.jpg",
      "/images/merch/og-flannel-front.jpg",
      "/images/merch/og-flannel-detail.jpg",
    ],
    tag: "Drop 001",
    details: [
      "Oversized burnt-orange 25 Two Life globe graphic on the back",
      "“More than your sentence.” tagline hit",
      "25 Two Life brush-script down the sleeve",
      "Heavyweight brushed flannel, button front",
    ],
  },
  {
    slug: "built-through-it-work-pant",
    name: "The Built Through It Work Pant",
    price: "$142",
    color: "Washed Black — Structured Twill",
    category: "Bottoms",
    img: "/images/merch/bt-pant-front.jpg",
    gallery: [
      "/images/merch/bt-pant-front.jpg",
      "/images/merch/bt-pant-side.jpg",
      "/images/merch/bt-pant-back.jpg",
      "/images/merch/bt-pant-model.jpg",
      "/images/merch/bt-pant-pocket.jpg",
      "/images/merch/bt-pant-legdetail.jpg",
    ],
    tag: "Drop 001",
    details: [
      "Relaxed straight carpenter cut, utility pockets",
      "Orange “Built Through It!” brush-script down the leg",
      "“Not my past. My purpose.” seam detail",
      "14oz cotton twill, triple-needle stitching",
    ],
  },
  {
    slug: "built-different-cargo-pant",
    name: "The Built Different Cargo Pant",
    price: "$152",
    color: "Black — Heavy Canvas",
    category: "Bottoms",
    img: "/images/merch/bd-pant-front.jpg",
    gallery: [
      "/images/merch/bd-pant-front.jpg",
      "/images/merch/bd-pant-side.jpg",
      "/images/merch/bd-pant-pocket.jpg",
    ],
    tag: "Drop 001",
    details: [
      "Utility cargo cut with reinforced side pockets",
      "Gold “Built Different For A Reason” side-pocket graphic",
      "25 Two Life hardware and hem tag",
      "Heavy canvas, built to last",
    ],
  },
  {
    slug: "more-than-your-sentence-tee",
    name: "More Than Your Sentence Tee",
    price: "$52",
    color: "Black / Acid Lime Print",
    category: "Tops",
    img: "/images/merch/tee-lime.jpg",
    gallery: ["/images/merch/tee-lime.jpg"],
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
    gallery: ["/images/merch/tee-red.jpg"],
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
    gallery: ["/images/merch/tee-white.jpg"],
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
